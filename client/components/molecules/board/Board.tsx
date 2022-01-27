import Heading from '@atoms/heading/Heading';
import { Posts } from 'const/types';
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
        const year = new Date(post.time).getFullYear();
        const month = new Date(post.time).getMonth();
        const date = new Date(post.time).getDate();

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
                <Image src={generateTierImage(post.commentNum)} width={12} height={12} />
              </span>
              <span>{`${year}.${month}.${date}.`}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Board;
