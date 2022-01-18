import IconButton from '@atoms/iconButton/IconButton';
import InputFile from '@atoms/inputFile/InputFile';
import { Dispatch, SetStateAction } from 'react';
import style from './ImageUploader.module.scss';

interface ImageUploaderProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}

const ImageUploader = ({ images, setImages }: ImageUploaderProps) => {
  return (
    <div className={style.container}>
      <InputFile
        id="image"
        onInput={async (e) => {
          const images = e.currentTarget.files;
          if (!images) return;
          const reader = new FileReader();
          reader.onloadend = () => {
            const image = new Image();
            image.src = reader.result as string;
            image.onload = () => {
              const { width, height } = image;
              if (width > 500 || height > 500) return console.log('이미지가 너무 큽니다');
              setImages((pre) => [reader.result as string, ...pre]);
            };
          };
          reader.readAsDataURL(images[0]);
        }}
      />
      {images.length ? (
        <ul>
          {images.map((image) => (
            <li id={image} key={image} style={{ backgroundImage: `url(${image})` }}>
              <IconButton
                icon="fas fa-minus-circle"
                onClick={(e) => {
                  const $li = e.currentTarget.parentNode as HTMLLIElement;
                  setImages((pre) => pre.filter((image) => image !== $li.id));
                }}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ImageUploader;
