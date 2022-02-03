import { useEffect, useState } from 'react';
import style from './SlideIn.module.scss';

const SlideIn = () => {
  const [isSlide, setIsSlide] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsSlide(false), 500);
  }, []);

  return (
    <>
      <div className={style.common + ' ' + style.fadeout}></div>
      {isSlide && <div className={style.common + ' ' + style.slide}></div>}
    </>
  );
};

export default SlideIn;
