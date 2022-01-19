import IconButton from '@atoms/iconButton/IconButton';
import { Dispatch, SetStateAction } from 'react';
import style from './Images.module.scss';

interface ImageUploaderProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  canDelete?: boolean;
}

const Images = ({ images, setImages, canDelete = false }: ImageUploaderProps) => {
  return images.length ? (
    <ul className={style.container}>
      {images.map((image) => (
        <li id={image} key={image} style={{ backgroundImage: `url(${image})` }}>
          {canDelete && (
            <IconButton
              icon="fas fa-minus-circle"
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
