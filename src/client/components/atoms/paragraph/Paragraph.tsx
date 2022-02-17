import { HTMLAttributes } from 'react';
import style from './Paragraph.module.scss';
import util from '@styles/util.module.scss';

interface ParagraphProps extends HTMLAttributes<HTMLPreElement> {
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const Paragraph = ({ textAlign = 'justify', children }: ParagraphProps) => {
  return <pre className={style.container + ' ' + util['text-align-' + textAlign]}>{children}</pre>;
};

export default Paragraph;
