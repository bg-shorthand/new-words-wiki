import IconButton from '@atoms/iconButton/IconButton';
import LabelInput from '@molecules/labelInput/LabelInput';
import { wordApi } from 'api/word';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from './Search.module.scss';

const Search = () => {
  const [word, setWord] = useState('');
  const [titles, setTitles] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const setTitlesAsync = async () => {
      const { data } = await wordApi.getAll();
      setTitles(data.data);
    };
    setTitlesAsync();
  }, []);

  return (
    <form className={style.container}>
      <LabelInput
        id="keyword"
        label="검색어"
        list="searchWord"
        value={word}
        onChange={(e) => setWord(e.currentTarget.value)}
      />
      {word.length ? (
        <datalist id="searchWord">
          {titles &&
            titles.map((title: string) => {
              return <option value={title}></option>;
            })}
        </datalist>
      ) : null}
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
