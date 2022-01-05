import emailAuthApi from 'api/emailAuth';
import { useState } from 'react';

const useSetEmailAuthKey = () => {
  const [liveTime, setLiveTime] = useState(0);

  const setEmailAuthKey = async (email: string) => {
    const { data } = await emailAuthApi.post(email);
    setLiveTime(data.liveTime);
  };

  return { liveTime, setEmailAuthKey };
};

export default useSetEmailAuthKey;
