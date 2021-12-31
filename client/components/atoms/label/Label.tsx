import { DefaultProps } from 'const/types';

interface LabelProps extends DefaultProps {
  htmlFor: string;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
