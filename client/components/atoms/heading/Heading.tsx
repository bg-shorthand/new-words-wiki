import { DefaultProps } from 'const/types';

const Heading = ({ children, className }: DefaultProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default Heading;
