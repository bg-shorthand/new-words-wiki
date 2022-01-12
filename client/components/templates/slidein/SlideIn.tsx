import { useEffect, useState } from 'react';
import style from './SlideIn.module.scss';

const SlideIn = () => {
  const [is, setIs] = useState(true);
  const [isSlide, setIsSlide] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsSlide(false), 1000);
  }, []);

  return is ? (
    <>
      <div className={style.common + ' ' + style.fadeout}></div>
      {isSlide && <div className={style.common + ' ' + style.slide}></div>}
    </>
  ) : null;
};

export default SlideIn;
