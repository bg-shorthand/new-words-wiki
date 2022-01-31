import { atom, selector } from 'recoil';

const dialogsState = atom({
  key: 'dialogsState',
  default: {
    signin: false,
    signup: false,
    findPassword: false,
    alert: false,
    image: false,
    needSignin: false,
    report: false,
    changeNickname: false,
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

const alertContentState = atom({
  key: 'alertContentState',
  default: {
    message: '',
    callback: (() => {}) as () => void,
  },
});

const imageState = atom({
  key: 'imageState',
  default: {
    src: '',
    width: 0,
    height: 0,
  },
});

export { dialogsState, isOpenModalState, alertContentState, imageState };
