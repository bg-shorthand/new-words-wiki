import { TextareaHTMLAttributes } from 'react';
import style from './TextArea.module.scss';

const TextArea = ({
  autoComplete = 'off',
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={style.container} autoComplete={autoComplete} {...props} />;
};

export default TextArea;
