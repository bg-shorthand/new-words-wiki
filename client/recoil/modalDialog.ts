import { atom, selector } from 'recoil';

const dialogsState = atom({
  key: 'dialogsState',
  default: {
    signin: false,
  },
});

const isOpenModalState = selector({
  key: 'isOpenState',
  get: ({ get }) => {
    const dialogs = get(dialogsState);
    const isOpen = !!Object.values(dialogs).filter((dialog) => dialog).length;
    return isOpen;
  },
});

export { dialogsState, isOpenModalState };
