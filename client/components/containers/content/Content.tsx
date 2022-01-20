import SlideIn from '@templates/slidein/SlideIn';
import { HTMLAttributes } from 'react';
import style from './Content.module.scss';
import util from '@styles/util.module.scss';

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  fitContent?: boolean;
  alignSelf?: 'flex-left' | 'flex-right' | 'center';
}

const Content = ({ children, fitContent, alignSelf }: ContentProps) => {
  return (
    <div
      className={
        style.container +
        ' ' +
        (fitContent ? style.fitContent : style.full) +
        ' ' +
        util['align-self' + alignSelf]
      }
    >
      {children}
      <SlideIn />
    </div>
  );
};

export default Content;
