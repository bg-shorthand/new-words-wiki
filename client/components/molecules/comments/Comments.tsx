import Alert from '@atoms/alert/Alert';
import Paragraph from '@atoms/paragraph/Paragraph';
import { Comment } from 'const/types';
import addPrefix0 from 'modules/addPrefix0';
import generateTierImage from 'modules/generateTierImage';
import Image from 'next/image';
import style from './Comments.module.scss';

const Comments = ({ comments }: { comments: Comment[] }) => {
  return (
    <ul className={style.container}>
      {comments.length ? (
        comments.map((item: Comment) => {
          const date = new Date(item.time);
          const year = date.getFullYear().toString().slice(2);
          const month = addPrefix0(date.getMonth() + 1);
          const day = addPrefix0(date.getDate());
          const hour = addPrefix0(date.getHours());
          const minute = addPrefix0(date.getMinutes());

          return (
            <li>
              <Paragraph>{item.number + '. ' + item.content}</Paragraph>
              <div>
                <span>
                  {item.author.nickname}{' '}
                  <Image src={generateTierImage(item.author.score)} width={12} height={12} />
                </span>
                <span>{`${year}.${month}.${day}. ${hour}:${minute}`}</span>
              </div>
            </li>
          );
        })
      ) : (
        <Alert>댓글이 없습니다.</Alert>
      )}
    </ul>
  );
};

export default Comments;
