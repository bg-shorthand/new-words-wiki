import Link from 'next/link';
import style from './RelatedTitles.module.scss';

const RelatedTitles = (relatedTitles: string[]) => {
  return relatedTitles ? (
    <ul className={style.container}>
      {relatedTitles.map((title: string) => {
        return (
          <li key={title}>
            <Link href={'/words/' + title}>
              <a>{title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default RelatedTitles;
