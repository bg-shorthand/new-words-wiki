import { dialogsState, imageState } from '@recoil/modalDialog';
import { useSetRecoilState } from 'recoil';

const useOpenImagedialog = () => {
  const setDialogs = useSetRecoilState(dialogsState);
  const setImageSrc = useSetRecoilState(imageState);

  const OpenImagedialog = (src: string, width: number, height: number) => {
    setImageSrc({ src, width, height });
    setDialogs((pre) => ({ ...pre, image: true }));
  };

  return OpenImagedialog;
};

export default useOpenImagedialog;
