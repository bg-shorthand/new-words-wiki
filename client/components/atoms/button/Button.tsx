import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 's' | 'm' | 'l';
}

const Button = ({ type = 'button', size = 'm', ...props }: ButtonProps) => {
  return <button type={type} className={style.button + ' ' + style[size]} {...props} />;
};

export default Button;
