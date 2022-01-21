import { HTMLAttributes } from 'react';
import style from './Heading.module.scss';
import util from '@styles/util.module.scss';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const Heading = ({ level = 1, textAlign = 'center', ...props }: HeadingProps) => {
  switch (level) {
    case 1:
      return <h1 className={style.h1 + ' ' + util['text-align-' + textAlign]} {...props} />;
    case 2:
      return <h2 className={style.h2 + ' ' + util['text-align-' + textAlign]} {...props} />;
    case 3:
      return <h3 className={style.h3 + ' ' + util['text-align-' + textAlign]} {...props} />;
    case 4:
      return <h4 className={style.h4 + ' ' + util['text-align-' + textAlign]} {...props} />;
    case 5:
      return <h5 className={style.h5 + ' ' + util['text-align-' + textAlign]} {...props} />;
    case 6:
      return <h6 className={style.h6 + ' ' + util['text-align-' + textAlign]} {...props} />;
    default:
      return null;
  }
};

export default Heading;
