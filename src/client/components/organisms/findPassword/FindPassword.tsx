import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import EmailAuthForm from '@molecules/emailAuthForm/EmailAuthForm';
import FindPasswordForm from '@molecules/findPasswordForm/FindPasswrdForm';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

const FindPassword = () => {
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState('');

  const resetDialogs = useResetRecoilState(dialogsState);
  const isSignin = useRecoilValue(isSigninState);

  useEffect(() => {
    if (isSignin) setEmail(isSignin.email);
  }, []);

  return (
    <>
      <Heading level={1}>비밀번호 {isSignin ? '바꾸기' : '찾기'}</Heading>
      {stage === 0 && (
        <>
          <Alert textAlign="left">
            <i aria-hidden className="fas fa-flag-checkered"></i> 가입하신 이메일을 인증해주세요.
          </Alert>
          <EmailAuthForm
            email={email}
            setEmail={isSignin ? undefined : setEmail}
            mustRegist={true}
            setStage={setStage}
          />
        </>
      )}
      {stage === 1 && (
        <>
          <Alert textAlign="left">
            <i aria-hidden className="fas fa-flag-checkered"></i> 새로운 비밀번호를 등록해주세요.
          </Alert>
          <FindPasswordForm email={email} setStage={setStage} />
        </>
      )}
      {stage === 2 && (
        <>
          <Alert>비밀번호가 수정되었습니다. 로그인 해주세요.</Alert>
          <Button size="s" onClick={resetDialogs}>
            완료
          </Button>
        </>
      )}
    </>
  );
};

export default FindPassword;
