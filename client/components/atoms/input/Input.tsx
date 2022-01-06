import Button from '@atoms/button/Button';
import { InputHTMLAttributes, useState } from 'react';

const Input = ({ autoComplete = 'off', ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const [isPassword, setIsPassword] = useState(props.type === 'password');

  return (
    <>
      <input autoComplete={autoComplete} {...props} />
      {isPassword ? (
        <Button onClick={() => setIsPassword((pre) => !pre)}>비밀번호 보기</Button>
      ) : null}
    </>
  );
};

export default Input;
