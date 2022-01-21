import IconButton from '@atoms/iconButton/IconButton';
import { InputHTMLAttributes, useState } from 'react';
import style from './Input.module.scss';

const Input = ({ autoComplete = 'off', type, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const [textType, setTextType] = useState('password');

  return (
    <div className={style.container + (type === 'checkbox' ? ' ' + style.checkbox : '')}>
      <input autoComplete={autoComplete} type={type === 'password' ? textType : type} {...props} />
      {type === 'password' ? (
        <IconButton
          onClick={() => {
            setTextType((pre) => (pre === 'password' ? 'text' : 'password'));
          }}
          title="비밀번호 보기"
          icon={textType === 'password' ? 'far fa-eye' : 'far fa-eye-slash'}
          tabIndex={-1}
        />
      ) : null}
    </div>
  );
};

export default Input;
