import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './Pagination.module.scss';

interface PaginationProps {
  curPage: number;
  path: string;
  allLength: number;
}

const Pagination = ({ curPage, path, allLength }: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([]);
  const [pagesNum, setPagesNum] = useState(10);

  useEffect(() => {
    const firstPage = Math.floor((curPage - 1) / pagesNum) * pagesNum + 1;
    const lastPage =
      firstPage + pagesNum - 1 >= Math.ceil(allLength / pagesNum)
        ? Math.ceil(allLength / pagesNum)
        : firstPage + pagesNum - 1;

    setPages(Array.from({ length: lastPage - firstPage + 1 }, (_, i) => firstPage + i));
  }, [curPage]);

  return (
    <ul className={style.container}>
      <li className={pages.includes(1) ? style.disable : ''}>
        <Link href={path + '/1'}>
          <a
            aria-label="맨 처음으로"
            onClick={(e) => {
              if (pages.includes(1)) e.preventDefault();
            }}
          >
            <i aria-hidden className="fas fa-angle-double-left"></i>
          </a>
        </Link>
      </li>
      <li className={pages.includes(1) ? style.disable : ''}>
        <Link href={path + '/' + (pages[0] - 1)}>
          <a
            aria-label="이전 페이지"
            onClick={(e) => {
              if (pages.includes(1)) e.preventDefault();
            }}
          >
            <i aria-hidden className="fas fa-chevron-left"></i>
          </a>
        </Link>
      </li>
      {pages.map((num) => {
        return (
          <li key={num} className={curPage === num ? style.active : ''}>
            <Link href={path + '/' + num}>
              <a>{num}</a>
            </Link>
          </li>
        );
      })}
      <li className={pages.includes(Math.ceil(allLength / pagesNum)) ? style.disable : ''}>
        <Link href={path + '/' + (pages[pages.length - 1] + 1)}>
          <a
            aria-label="다음 페이지"
            onClick={(e) => {
              if (pages.includes(Math.ceil(allLength / pagesNum))) e.preventDefault();
            }}
          >
            <i aria-hidden className="fas fa-chevron-right"></i>
          </a>
        </Link>
      </li>
      <li className={pages.includes(Math.ceil(allLength / pagesNum)) ? style.disable : ''}>
        <Link href={path + '/' + Math.ceil(allLength / pagesNum)}>
          <a
            aria-label="맨 뒤로"
            onClick={(e) => {
              if (pages.includes(Math.ceil(allLength / pagesNum))) e.preventDefault();
            }}
          >
            <i aria-hidden className="fas fa-angle-double-right"></i>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
