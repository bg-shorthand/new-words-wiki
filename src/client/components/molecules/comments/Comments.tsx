import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import IconButton from '@atoms/iconButton/IconButton';
import Paragraph from '@atoms/paragraph/Paragraph';
import WriteComment from '@containers/writeComment/WriteComment';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import { isSigninState } from '@recoil/isSignin';
import communityApi from 'api/community';
import { Comment } from 'const/types';
import addPrefix0 from 'modules/addPrefix0';
import generateTierImage from 'modules/generateTierImage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRecoilValue } from 'recoil';
import style from './Comments.module.scss';

interface CommentsProps {
  comments: Comment[];
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

const Comments = ({ comments, setComments }: CommentsProps) => {
  const [modifyNumber, setModifyNumber] = useState(0);
  const [newComment, setNewComment] = useState('');

  const isSignin = useRecoilValue(isSigninState);

  const router = useRouter();
  const { id } = router.query as { id: string };

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
            <li key={item.number}>
              {modifyNumber === item.number ? (
                <WriteComment>
                  <LabelTextArea
                    id="modifyComment"
                    label="λκΈ μμ "
                    value={newComment}
                    onChange={(e) => setNewComment(e.currentTarget.value)}
                    validations={[{ isAlert: !newComment.length, alert: 'νμ μλ ₯λμλλ€.' }]}
                  />
                  <Button
                    disabled={!newComment.length}
                    onClick={async (e) => {
                      e.preventDefault();
                      const { data } = await communityApi.updateComment(id, {
                        ...item,
                        content: newComment,
                      });
                      if (data.success) {
                        setComments(data.data);
                        setModifyNumber(0);
                      }
                    }}
                  >
                    μμ 
                  </Button>
                </WriteComment>
              ) : (
                <Paragraph>{item.number + '. ' + item.content}</Paragraph>
              )}
              <div>
                <span>
                  {item.author.nickname}{' '}
                  <Image
                    src={generateTierImage(item.author.score)}
                    width={12}
                    height={12}
                    alt="νμ λ±κΈ"
                  />
                </span>
                <span>
                  <i aria-hidden className="far fa-calendar-alt"></i>{' '}
                  {`${year}.${month}.${day}. ${hour}:${minute}`}
                </span>
              </div>
              {item.author.nickname === isSignin?.nickname ? (
                <div className={style.buttons}>
                  {modifyNumber === item.number ? (
                    <IconButton
                      icon="fab fa-readme"
                      aria-label="λκΈ μ½κΈ° λͺ¨λ"
                      title="λκΈ μ½κΈ° λͺ¨λ"
                      onClick={() => setModifyNumber(0)}
                    />
                  ) : (
                    <IconButton
                      icon="fas fa-highlighter"
                      aria-label="λκΈ μμ  λͺ¨λ"
                      title="λκΈ μμ  λͺ¨λ"
                      onClick={() => {
                        setNewComment(item.content);
                        setModifyNumber(item.number);
                      }}
                    />
                  )}
                  <IconButton
                    icon="far fa-trash-alt"
                    aria-label="λκΈ μ­μ "
                    title="λκΈ μ­μ "
                    onClick={async () => {
                      const { data } = await communityApi.deleteComment(id, item.number);
                      if (data.success) setComments(data.data);
                    }}
                  />
                </div>
              ) : null}
            </li>
          );
        })
      ) : (
        <Alert>λκΈμ΄ μμ΅λλ€.</Alert>
      )}
    </ul>
  );
};

export default Comments;
