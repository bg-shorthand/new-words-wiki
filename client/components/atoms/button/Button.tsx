import { DefaultProps } from 'const/types';
import { MouseEventHandler } from 'react';

interface ButtonProps extends DefaultProps {
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler;
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
