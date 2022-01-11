import Button from '@atoms/button/Button';
import { InputHTMLAttributes, useState } from 'react';

const Input = ({ autoComplete = 'off', type, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const [textType, setTextType] = useState('password');

  return (
    <>
      <input autoComplete={autoComplete} type={type === 'password' ? textType : type} {...props} />
      {type === 'password' ? (
        <Button
          onClick={() => {
            setTextType((pre) => (pre === 'password' ? 'text' : 'password'));
          }}
        >
          비밀번호 보기
        </Button>
      ) : null}
    </>
  );
};

export default Input;
