import SlideIn from '@templates/slidein/SlideIn';
import { HTMLAttributes } from 'react';
import style from './Content.module.scss';
import util from '@styles/util.module.scss';

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  fitContent?: boolean;
  alignSelf?: 'flex-start' | 'flex-end' | 'center';
  textAlign?: 'left' | 'right' | 'center';
  flexFlow?: 'column' | 'row';
}

const Content = ({
  children,
  fitContent,
  alignSelf,
  textAlign,
  flexFlow = 'column',
}: ContentProps) => {
  return (
    <div
      className={
        style.container +
        ' ' +
        (fitContent ? style.fitContent : style.full) +
        ' ' +
        util['align-self-' + alignSelf] +
        ' ' +
        util['text-align-' + textAlign] +
        ' ' +
        style[flexFlow]
      }
    >
      {children}
      <SlideIn />
    </div>
  );
};

export default Content;
