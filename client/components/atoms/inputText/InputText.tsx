import Button from '@atoms/button/Button';
import { DefaultProps } from 'const/types';
import { ChangeEventHandler, FocusEventHandler } from 'react';

interface InputProps extends DefaultProps {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  password?: 'password';
  placeholder?: string;
}

const InputText = ({ id, password, value, onChange, onBlur, placeholder }: InputProps) => {
  return (
    <>
      <input
        type={password ? 'password' : 'text'}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {password ? <Button>비밀번호 보기</Button> : null}
    </>
  );
};

export default InputText;
