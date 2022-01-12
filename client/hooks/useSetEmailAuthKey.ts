import emailAuthApi from 'api/emailAuth';
import userApi from 'api/userApi';
import { useState } from 'react';
import useValidString from './useValidString';

const useSetEmailAuthKey = () => {
  const [liveTime, setLiveTime] = useState(0);
  const [isUniqueEmail, setIsUniqueEmail] = useState(true);

  const { isCorrect, validString } = useValidString('email');

  const setEmailAuthKey = async (email: string) => {
    setLiveTime(0);
    setIsUniqueEmail(true);

    if (!validString(email)) return false;

    const { data } = await userApi.get(email);

    if (data.isUser) {
      setIsUniqueEmail(false);
      return false;
    } else {
      const { data } = await emailAuthApi.post(email);
      setLiveTime(data.liveTime);
      return true;
    }
  };

  return { isUniqueEmail, isCorrect, liveTime, setEmailAuthKey };
};

export default useSetEmailAuthKey;
