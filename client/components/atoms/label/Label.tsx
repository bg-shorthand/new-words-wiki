import { DefaultProps } from 'const/types';
import utilStyle from '@styles/util.module.scss';

interface LabelProps extends DefaultProps {
  htmlFor: string;
  hidden?: boolean;
}

const Label = ({ htmlFor, children, hidden }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={hidden ? utilStyle['a11y-hidden'] : ''}>
      {children}
    </label>
  );
};

export default Label;
