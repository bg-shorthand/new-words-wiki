import { HTMLAttributes } from 'react';
import style from './Paragraph.module.scss';
import util from '@styles/util.module.scss';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const Paragraph = ({ textAlign = 'justify', children }: ParagraphProps) => {
  return <p className={style.container + ' ' + util['text-align-' + textAlign]}>{children}</p>;
};

export default Paragraph;
