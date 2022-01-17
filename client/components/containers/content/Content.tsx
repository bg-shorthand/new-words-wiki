import SlideIn from '@templates/slidein/SlideIn';
import { HTMLAttributes } from 'react';
import style from './Content.module.scss';

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  fitContent?: boolean;
}

const Content = ({ children, fitContent }: ContentProps) => {
  return (
    <div className={style.container + ' ' + (fitContent ? style.fitContent : style.full)}>
      {children}
      <SlideIn />
    </div>
  );
};

export default Content;
