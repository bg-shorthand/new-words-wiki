import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

const Button = ({ type = 'button', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button type={type} {...props} />;
};

export default Button;
