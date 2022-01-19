import { HTMLAttributes } from 'react';
import style from './Paragraph.module.scss';

const Paragraph = ({ children }: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={style.container}>{children}</p>;
};

export default Paragraph;
