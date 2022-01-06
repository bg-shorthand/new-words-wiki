import { HTMLAttributes } from 'react';
import style from './LabelInputContainer.module.scss';

interface LabelInputContainerProps extends HTMLAttributes<HTMLDivElement> {
  locateLabel?: 'top' | 'right' | 'bottom' | 'left';
  locateValidAlert?: 'top' | 'right' | 'bottom' | 'left';
}

const LabelInputContainer = ({
  locateLabel = 'top',
  locateValidAlert = 'bottom',
  ...props
}: LabelInputContainerProps) => {
  return (
    <div
      className={
        style.container +
        ' ' +
        style['locateLabel-' + locateLabel] +
        ' ' +
        style['locateValidAlert-' + locateValidAlert]
      }
      {...props}
    />
  );
};

export default LabelInputContainer;
