import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import style from './LabelInputContainer.module.scss';

interface LabelInputContainerProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  type?: string;
}

const LabelInputContainer = ({ disabled, type, ...props }: LabelInputContainerProps) => {
  const [isfocus, setIsFocus] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $container = ref.current;
    const $input = $container?.querySelector('input');
    setHasValue(!!$input?.value);
    $input?.addEventListener('focus', () => setIsFocus(true));
    $input?.addEventListener('blur', () => setIsFocus(false));
    $input?.addEventListener('change', () => setHasValue(!!$input?.value));
    const $textArea = $container?.querySelector('textarea');
    setHasValue(!!$textArea?.value);
    $textArea?.addEventListener('focus', () => setIsFocus(true));
    $textArea?.addEventListener('blur', () => setIsFocus(false));
    $textArea?.addEventListener('change', () => setHasValue(!!$textArea?.value));
  }, []);

  return (
    <div
      className={
        style.container +
        (isfocus || hasValue ? ' ' + style.isActive : '') +
        (disabled ? ' ' + style.disabled : '') +
        (type === 'checkbox' ? ' ' + style.checkbox : '')
      }
      {...props}
      ref={ref}
    />
  );
};

export default LabelInputContainer;
