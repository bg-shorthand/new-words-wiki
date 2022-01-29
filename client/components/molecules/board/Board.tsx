import Heading from '@atoms/heading/Heading';
import { Posts } from 'const/types';
import addPrefix0 from 'modules/addPrefix0';
import generateTierImage from 'modules/generateTierImage';
import Image from 'next/image';
import Link from 'next/link';
import style from './Board.module.scss';

interface BoardProps {
  posts: Posts[];
}

const Board = ({ posts }: BoardProps) => {
  return (
    <ul className={style.container}>
      {posts.map((post) => {
        const date = new Date(post.time);
        const year = date.getFullYear().toString().slice(2);
        const month = addPrefix0(date.getMonth() + 1);
        const day = addPrefix0(date.getDate());
        const hour = addPrefix0(date.getHours());
        const minute = addPrefix0(date.getMinutes());

        return (
          <li key={post.id}>
            <div className={style.title}>
              <span>{post.number}</span>
              <Link href={'/community/post/' + post.id}>
                <a>
                  <Heading level={2}>
                    {post.title + (post.commentNum ? ' +' + post.commentNum : '')}
                  </Heading>
                </a>
              </Link>
            </div>
            <div className={style.summary}>
              <span className={style.author}>
                {post.author}
                <Image src={generateTierImage(post.score)} width={12} height={12} />
              </span>
              <span>
                <i aria-hidden className="far fa-calendar-alt"></i> {`${year}.${month}.${day}. ${hour}:${minute}`}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Board;
