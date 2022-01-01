import { DefaultProps } from 'const/types';
import style from './LabelInputContainer.module.scss';

interface LabelInputBoxProps extends DefaultProps {
  locateLabel?: 'top' | 'right' | 'bottom' | 'left';
  locateValidAlert?: 'top' | 'right' | 'bottom' | 'left';
}

const LabelInputBox = ({
  locateLabel = 'top',
  locateValidAlert = 'bottom',
  children,
}: LabelInputBoxProps) => {
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

export default LabelInputBox;
