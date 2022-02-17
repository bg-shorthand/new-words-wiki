import IconButton from '@atoms/iconButton/IconButton';
import useOpenImagedialog from '@hooks/useOpenImagedialog';
import { Dispatch, SetStateAction } from 'react';
import style from './Images.module.scss';

interface ImageUploaderProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  canDelete?: boolean;
}

const Images = ({ images, setImages, canDelete = false }: ImageUploaderProps) => {
  const openImageDialog = useOpenImagedialog();

  return images.length ? (
    <ul className={style.container}>
      {images.map((image) => (
        <li
          id={image}
          key={image}
          style={{ backgroundImage: `url(${image})` }}
          onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            const img = new Image();
            img.src = image;
            img.onload = () => {
              const { width, height } = img;
              openImageDialog(image, width, height);
            };
          }}
        >
          {canDelete && (
            <IconButton
              icon="fas fa-minus-circle"
              aria-label="이미지 삭제"
              title="이미지 삭제"
              onClick={(e) => {
                const $li = e.currentTarget.parentNode as HTMLLIElement;
                setImages((pre) => pre.filter((image) => image !== $li.id));
              }}
            />
          )}
        </li>
      ))}
    </ul>
  ) : null;
};

export default Images;
