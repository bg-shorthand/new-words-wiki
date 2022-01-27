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
      {!pages.includes(1) && (
        <>
          <li>
            <Link href={path + '/1'}>
              <a>
                <i aria-hidden className="fas fa-angle-double-left"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href={path + '/' + (pages[0] - 1)}>
              <a>
                <i aria-hidden className="fas fa-chevron-left"></i>
              </a>
            </Link>
          </li>
        </>
      )}
      {pages.map((num) => {
        return (
          <li key={num}>
            <Link href={path + '/' + num}>
              <a>{num}</a>
            </Link>
          </li>
        );
      })}
      {!pages.includes(Math.ceil(allLength / pagesNum)) && (
        <>
          <li>
            <Link href={path + '/' + (pages[pages.length - 1] + 1)}>
              <a>
                <i aria-hidden className="fas fa-chevron-right"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href={path + '/' + Math.ceil(allLength / pagesNum)}>
              <a>
                <i aria-hidden className="fas fa-angle-double-right"></i>
              </a>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Pagination;
