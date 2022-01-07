import { KeyboardEventHandler, useEffect, useRef } from 'react';

const useControlDialogTab = () => {
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const $firstFocusible = dialogRef.current?.querySelectorAll('input, button')[0] as HTMLElement;

    $firstFocusible?.focus();
  }, []);

  const focusFirstWhenKeyUpTab: KeyboardEventHandler = (e) => {
    e.preventDefault();
    if (e.key !== 'Tab') return;
    const $firstFocusible = dialogRef.current?.querySelectorAll('input, button')[0] as HTMLElement;
    $firstFocusible.focus();
  };

  return { dialogRef, focusFirstWhenKeyUpTab };
};

export default useControlDialogTab;
