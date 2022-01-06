import { DefaultProps } from 'const/types';
import style from './LabelInputContainer.module.scss';

interface LabelInputContainerProps extends DefaultProps {
  locateLabel?: 'top' | 'right' | 'bottom' | 'left';
  locateValidAlert?: 'top' | 'right' | 'bottom' | 'left';
}

const LabelInputContainer = ({
  locateLabel = 'top',
  locateValidAlert = 'bottom',
  children,
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
    >
      {children}
    </div>
  );
};

export default LabelInputContainer;
