import Button from '@atoms/button/Button';
import { DefaultProps } from 'const/types';
import useShowPassword from 'hooks/useShowPassword';
import { ChangeEventHandler, FocusEventHandler } from 'react';

interface InputProps extends DefaultProps {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  password?: boolean;
  placeholder?: string;
}

const InputText = ({ id, password, value, onChange, onBlur, placeholder }: InputProps) => {
  const { isPassword, showPasswordHandler } = useShowPassword(password);

  return (
    <>
      <input
        type={isPassword ? 'password' : 'text'}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        onBlur={onBlur}
        autoComplete="off"
      />
      {password ? <Button onClick={showPasswordHandler}>비밀번호 보기</Button> : null}
    </>
  );
};

export default InputText;
