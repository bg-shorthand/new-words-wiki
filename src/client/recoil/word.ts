import { atom } from 'recoil';

const wordState = atom({
  key: 'wordState',
  default: {
    title: '',
    definition: '',
    history: '',
    example: '',
    images: [] as string[],
  },
});

export { wordState };
