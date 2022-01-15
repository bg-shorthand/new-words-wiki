import userApi from 'api/userApi';
import { useState } from 'react';

const useFindUser = () => {
  const [errMsg, setErrMsg] = useState('');
  const [isUnique, setIsUnique] = useState(true);

  const findUser = async (keyword: string) => {
    setErrMsg('');
    setIsUnique(true);

    const { data } = await userApi.findUserByEmail(keyword);

    if (data.success) {
      setIsUnique(false);
      return data.data;
    } else {
      setIsUnique(true);
      setErrMsg(data.errMsg);
      return false;
    }
  };

  return { errMsg, isUnique, findUser };
};

export default useFindUser;
