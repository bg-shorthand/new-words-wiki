import IconButton from '@atoms/iconButton/IconButton';
import InputFile from '@atoms/inputFile/InputFile';
import useOpenAlertDialog from '@hooks/useOpenAlertDialog';
import Images from '@molecules/images/Images';
import { Dispatch, SetStateAction } from 'react';
import style from './ImageUploader.module.scss';

interface ImageUploaderProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}

const ImageUploader = ({ images, setImages }: ImageUploaderProps) => {
  const openAlertDialog = useOpenAlertDialog();

  return (
    <div className={style.container}>
      <InputFile
        id="image"
        onInput={async (e) => {
          const images = e.currentTarget.files;
          if (!images || !images[0]) return;
          const reader = new FileReader();
          reader.onloadend = () => {
            const image = new Image();
            image.src = reader.result as string;
            image.onload = () => {
              const { width, height } = image;
              if (width > 1000 || height > 1000)
                return openAlertDialog('이미지의 크기는 가로 1000px, 세로 1000px 이하여야 합니다.');
              setImages((pre) => [reader.result as string, ...pre]);
            };
          };
          reader.readAsDataURL(images[0]);
        }}
      />
      <Images images={images} setImages={setImages} canDelete />
    </div>
  );
};

export default ImageUploader;
