import { myInfoState } from '@recoil/myInfo';
import { useRecoilState, useRecoilValue } from 'recoil';
import jwt from 'jsonwebtoken';
import setToken from 'modules/setToken';

const useGetMyInfo = () => {
  const [myInfo, setMyInfo] = useRecoilState(myInfoState);

  const getMyInfo = () => {
    const { access } = setToken.get();

    if (!access) return;

    const payload = jwt.decode(access) as jwt.JwtPayload;
    const { email, nickname } = payload;

    setMyInfo({ email, nickname });
  };

  return { myInfo, getMyInfo };
};

export default useGetMyInfo;
