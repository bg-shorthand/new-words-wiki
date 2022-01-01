import Button from '@atoms/button/Button';
import { DefaultProps } from 'const/types';
import { ChangeEventHandler } from 'react';

interface InputProps extends DefaultProps {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  password?: 'password';
  placeholder?: string;
}

const InputText = ({ id, password, value, onChange, placeholder }: InputProps) => {
  return (
    <>
      <input
        type={password ? 'password' : 'text'}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
      />
      {password ? <Button>비밀번호 보기</Button> : null}
    </>
  );
};

export default InputText;
