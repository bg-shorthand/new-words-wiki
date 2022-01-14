import emailAuthApi from 'api/emailAuth';
import userApi from 'api/userApi';
import { useState } from 'react';
import useValidString from './useValidString';

const useSetEmailAuthKey = () => {
  const [errMsg, setErrMsg] = useState('');
  const [liveTime, setLiveTime] = useState(0);
  const [isUniqueEmail, setIsUniqueEmail] = useState(true);

  const { isCorrect, validString } = useValidString('email');

  const setEmailAuthKey = async (email: string) => {
    setLiveTime(0);
    setIsUniqueEmail(true);

    if (!validString(email)) return false;

    const { data } = await userApi.findUserByEmail(email);

    if (!data.success) {
      const { data } = await emailAuthApi.post(email);
      setLiveTime(data.data.liveTime);
      return true;
    } else {
      setIsUniqueEmail(false);
      setErrMsg(data.errMsg);
      return false;
    }
  };

  return { errMsg, isUniqueEmail, isCorrect, liveTime, setEmailAuthKey };
};

export default useSetEmailAuthKey;
