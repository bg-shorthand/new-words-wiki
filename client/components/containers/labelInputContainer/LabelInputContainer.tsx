import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import style from './LabelInputContainer.module.scss';

interface LabelInputContainerProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

const LabelInputContainer = ({ disabled, ...props }: LabelInputContainerProps) => {
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
      className={
        style.container +
        (isfocus || hasValue ? ' ' + style.isActive : '') +
        (disabled ? ' ' + style.disabled : '')
      }
      {...props}
      ref={ref}
    />
  );
};

export default LabelInputContainer;
