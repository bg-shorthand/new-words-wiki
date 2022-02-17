import { FormHTMLAttributes } from 'react';
import style from './WriteComment.module.scss';

const WriteComment = ({ children }: FormHTMLAttributes<HTMLFormElement>) => {
  return <form className={style.container}>{children}</form>;
};

export default WriteComment;
