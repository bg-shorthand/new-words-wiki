import emailAuthApi from 'api/emailAuth';
import { useState } from 'react';

const useConfirmAuthKey = () => {
  const [wrongAuthKey, setWrongAuthKey] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const confirmAuthKey = async (email: string, authKey: string) => {
    setWrongAuthKey(false);

    const { data } = await emailAuthApi.get(email, authKey);
    if (data.success) {
      setWrongAuthKey(false);
      return true;
    } else {
      setWrongAuthKey(true);
      setErrMsg(data.errMsg);
      return false;
    }
  };

  return { errMsg, wrongAuthKey, confirmAuthKey };
};

export default useConfirmAuthKey;
