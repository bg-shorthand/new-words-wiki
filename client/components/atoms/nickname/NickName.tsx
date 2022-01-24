import { isSigninState } from '@recoil/isSignin';
import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import generateTierImage from 'modules/generateTierImage';

const NickName = () => {
  const isSignin = useRecoilValue(isSigninState);

  return isSignin ? (
    <>
      <span>{isSignin.nickname}</span>{' '}
      <Image src={generateTierImage(isSignin.score)} width={12} height={12} />
    </>
  ) : null;
};

export default NickName;
