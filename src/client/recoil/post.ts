import { atom } from 'recoil';

const postState = atom({
  key: 'postState',
  default: {
    title: '',
    content: '',
    id: '',
  },
});

export { postState };
