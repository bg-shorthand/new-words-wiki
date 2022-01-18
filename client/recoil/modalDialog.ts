import { atom, selector } from 'recoil';

const dialogsState = atom({
  key: 'dialogsState',
  default: {
    signin: false,
    signup: false,
    findPassword: false,
    alert: false,
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

const alertMessageState = atom({
  key: 'alertMessageState',
  default: '',
});

export { dialogsState, isOpenModalState, alertMessageState };
