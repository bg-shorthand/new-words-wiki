import emailAuthApi from 'api/emailAuth';
import { useState } from 'react';

const useSetEmailAuthKey = () => {
  const [liveTime, setLiveTime] = useState(0);

  const setEmailAuthKey = async (email: string) => {
    setLiveTime(0);

    try {
      const { data } = await emailAuthApi.post(email);
      setLiveTime(data.data.liveTime);
      return true;
    } catch {
      return false;
    }
  };

  return { liveTime, setEmailAuthKey };
};

export default useSetEmailAuthKey;
