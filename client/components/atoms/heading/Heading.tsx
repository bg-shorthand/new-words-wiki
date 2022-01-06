import { HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ level = 1, ...props }: HeadingProps) => {
  switch (level) {
    case 1:
      return <h1 {...props} />;
    case 2:
      return <h2 {...props} />;
    case 3:
      return <h3 {...props} />;
    case 4:
      return <h4 {...props} />;
    case 5:
      return <h5 {...props} />;
    case 6:
      return <h6 {...props} />;
    default:
      break;
  }
};

export default Heading;
