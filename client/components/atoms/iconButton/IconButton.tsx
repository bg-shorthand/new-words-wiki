import { ButtonHTMLAttributes } from 'react';
import style from './IconButton.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const IconButton = ({ type = 'button', icon, ...props }: IconButtonProps) => {
  return (
    <button className={style.IconButton} type={type} {...props}>
      <i className={icon}></i>
    </button>
  );
};

export default IconButton;
