import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import style from './LabelInputContainer.module.scss';

const LabelInputContainer = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const [isfocus, setIsFocus] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $container = ref.current;
    const $input = $container?.querySelector('input');
    $input?.addEventListener('focus', () => setIsFocus(true));
    $input?.addEventListener('blur', () => setIsFocus(false));
    $input?.addEventListener('change', () => setHasValue(!!$input?.value));
  }, []);

  return (
    <div
      className={style.container + (isfocus || hasValue ? ' ' + style.isActive : '')}
      {...props}
      ref={ref}
    />
  );
};

export default LabelInputContainer;
