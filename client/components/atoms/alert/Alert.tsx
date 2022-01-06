import { HTMLAttributes } from 'react';

const Alert = (props: HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props} />;
};

export default Alert;
