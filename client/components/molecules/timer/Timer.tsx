import { DefaultProps } from 'const/types';
import useGenerateTimerByMs from 'hooks/useGenerateTimerByMs';
import addPrefix0 from 'modules/addPrefix0';

interface TimerProps extends DefaultProps {
  time: number;
}

const Timer = ({ time }: TimerProps) => {
  const [hour, min, sec] = useGenerateTimerByMs(time);

  return (
    <span>
      {time > 60 * 60 * 1000
        ? addPrefix0(hour) + ':' + addPrefix0(min) + ':' + addPrefix0(sec)
        : time > 60 * 1000
        ? addPrefix0(min) + ':' + addPrefix0(sec)
        : addPrefix0(sec)}
    </span>
  );
};

export default Timer;
