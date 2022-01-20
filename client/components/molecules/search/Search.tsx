import IconButton from '@atoms/iconButton/IconButton';
import LabelInput from '@molecules/labelInput/LabelInput';
import { useRouter } from 'next/router';
import { useState } from 'react';
import style from './Search.module.scss';

const Search = () => {
  const [word, setWord] = useState('');

  const router = useRouter();

  return (
    <form className={style.container}>
      <LabelInput
        id="keyword"
        label="검색어"
        value={word}
        onChange={(e) => setWord(e.currentTarget.value)}
      />
      <IconButton
        aria-hidden
        type="submit"
        icon="fas fa-search"
        onClick={(e) => {
          e.preventDefault();
          console.log('search');
          router.push('/words/' + word);
        }}
      />
    </form>
  );
};

export default Search;
