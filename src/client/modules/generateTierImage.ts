import level0 from '@public/1.png';
import level1 from '@public/2.png';
import level2 from '@public/3.png';
import level3 from '@public/4.png';
import level4 from '@public/5.png';
import level5 from '@public/6.png';
import level6 from '@public/7.png';
import level7 from '@public/8.png';
import level8 from '@public/9.png';
import level9 from '@public/10.png';
import level10 from '@public/11.png';
import level11 from '@public/12.png';
import level12 from '@public/13.png';

const generateTierImage = (score: number) => {
  const images = [
    level0,
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10,
    level11,
    level12,
  ];

  for (let i = 1; i <= 12; i++) {
    if (score < Math.pow(2, i)) return images[i - 1];
  }
  return images[images.length - 1];
};

export default generateTierImage;
