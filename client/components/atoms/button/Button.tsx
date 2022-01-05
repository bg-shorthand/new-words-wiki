import { DefaultProps } from 'const/types';
import { MouseEventHandler } from 'react';

interface ButtonProps extends DefaultProps {
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

const Button = ({ children, onClick, type = 'button', disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
