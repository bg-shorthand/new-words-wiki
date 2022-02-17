import Label from '@atoms/label/Label';
import { InputHTMLAttributes } from 'react';
import style from './InputFile.module.scss';

const InputFile = ({ id, accept = 'image/*', ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <Label htmlFor={id} className={style.label}>
        <i aria-hidden className="fas fa-upload"></i> 이미지 업로드
      </Label>
      <input type="file" className={style.input} id={id} accept={accept} {...props} />
    </>
  );
};

export default InputFile;
