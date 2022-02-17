import { LabelHTMLAttributes } from 'react';

const Label = ({ ...props }: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label {...props} />;
};

export default Label;
