import { DefaultProps } from 'const/types';
import { MouseEventHandler } from 'react';

interface ButtonProps extends DefaultProps {
  onClick?: MouseEventHandler;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
