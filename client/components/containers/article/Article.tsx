import SlideIn from '@templates/slidein/SlideIn';
import { HTMLAttributes } from 'react';
import style from './Article.module.scss';

const Article = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <article className={style.container}>
      {children}
      <SlideIn />
    </article>
  );
};

export default Article;
