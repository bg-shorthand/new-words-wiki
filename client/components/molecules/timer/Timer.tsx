import { DefaultProps } from 'const/types';
import useGenerateTimerByMs from 'hooks/useGenerateTimerByMs';
import addPrefix0 from 'modules/addPrefix0';
import { useEffect, useState } from 'react';

interface TimerProps extends DefaultProps {
  time: number;
  callback?: () => void;
}

const Timer = ({ time, callback }: TimerProps) => {
  const [isFirst, setIsFirst] = useState(true);
  const [hour, min, sec] = useGenerateTimerByMs(time);

  useEffect(() => {
    if (!isFirst && callback && !hour && !min && !sec) {
      callback();
    }
  }, [isFirst, hour, min, sec]);
  useEffect(() => {
    setIsFirst(false);
  }, []);

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
