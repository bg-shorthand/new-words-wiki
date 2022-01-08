import emailAuthApi from 'api/emailAuth';
import userApi from 'api/userApi';
import { useState } from 'react';

const useSetEmailAuthKey = () => {
  const [liveTime, setLiveTime] = useState(0);
  const [isUniqueEmail, setIsUniqueEmail] = useState(true);

  const setEmailAuthKey = async (email: string) => {
    const { data } = await userApi.get(email);

    if (data.isUser) {
      setIsUniqueEmail(false);
    } else {
      const { data } = await emailAuthApi.post(email);
      setLiveTime(data.liveTime);
    }
  };

  return { isUniqueEmail, liveTime, setEmailAuthKey };
};

export default useSetEmailAuthKey;
