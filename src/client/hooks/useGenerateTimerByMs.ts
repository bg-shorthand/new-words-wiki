import { useEffect, useState } from 'react';

const useGenerateTimerByMs = (time: number) => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [ms, setMs] = useState(time);
  const [intervalTimer, setIntervalTimer] = useState<NodeJS.Timer>();

  useEffect(() => {
    setIntervalTimer(setInterval(() => setMs((pre) => (pre -= 1000)), 1000));
  }, []);
  useEffect(() => {
    const hour = Math.floor(ms / (60 * 60 * 1000));
    const min = Math.floor((ms - hour * (60 * 60 * 1000)) / (60 * 1000));
    const sec = Math.floor((ms - hour * (60 * 60 * 1000) - min * (60 * 1000)) / 1000);

    setHour(hour);
    setMin(min);
    setSec(sec);
    if (!ms && intervalTimer) clearInterval(intervalTimer);
  }, [ms]);

  return [hour, min, sec];
};

export default useGenerateTimerByMs;
