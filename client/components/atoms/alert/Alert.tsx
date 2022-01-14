import { HTMLAttributes } from 'react';
import style from './Alert.module.scss';

interface AlertProps extends HTMLAttributes<HTMLParagraphElement> {
  textAlign?: 'center' | 'left' | 'right';
}

const Alert = ({ textAlign = 'center', ...props }: AlertProps) => {
  return <p className={style[textAlign]} {...props} />;
};

export default Alert;
