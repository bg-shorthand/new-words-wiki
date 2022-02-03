import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import IconButton from '@atoms/iconButton/IconButton';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import WriteComment from '@containers/writeComment/WriteComment';
import Comments from '@molecules/comments/Comments';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import { getServerSideProps } from '@pages/community/post/[id]';
import { isSigninState } from '@recoil/isSignin';
import { postState } from '@recoil/post';
import MainLayout from '@templates/mainLayout/MainLayout';
import communityApi from 'api/community';
import { Comment } from 'const/types';
import addPrefix0 from 'modules/addPrefix0';
import generateTierImage from 'modules/generateTierImage';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Post = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, content, author, score, time, comments, _id } = post;

  const [isAuthor, setIsAuthor] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [renderComments, setRenderComments] = useState<Comment[]>([]);

  const setPostState = useSetRecoilState(postState);
  const isSignin = useRecoilValue(isSigninState);

  const router = useRouter();

  const date = new Date(time);
  const year = date.getFullYear().toString().slice(2);
  const month = addPrefix0(date.getMonth() + 1);
  const day = addPrefix0(date.getDate());
  const hour = addPrefix0(date.getHours());
  const minute = addPrefix0(date.getMinutes());

  useEffect(() => {
    if (isSignin) {
      setIsAuthor(author === isSignin.nickname);
    }
  }, [isSignin]);

  useEffect(() => {
    setRenderComments(comments);
  }, []);

  return (
    <MainLayout>
      <Content fitContent>
        <Heading level={1}>{title}</Heading>
      </Content>
      <Content fitContent alignSelf="flex-end" flexFlow="row">
        <span>
          {author}{' '}
          <Image src={generateTierImage(score)} width={12} height={12} alt="회원 등급"></Image>
        </span>
        {isAuthor ? (
          <span>
            <IconButton
              icon="fas fa-highlighter"
              aria-label="수정"
              title="수정"
              onClick={() => {
                setPostState({ title, content, id: _id });
                router.push('/community/writePost');
              }}
            />
            <IconButton
              icon="far fa-trash-alt"
              aria-label="삭제"
              title="삭제"
              onClick={async () => {
                const { data } = await communityApi.deletePost(_id);
                if (data.success) router.replace('/community/1');
              }}
            />
          </span>
        ) : null}{' '}
        <span>|</span>
        <span>
          <i aria-hidden className="far fa-calendar-alt"></i>{' '}
          {`${year}.${month}.${day}. ${hour}:${minute}`}
        </span>
      </Content>
      <Content>
        <Paragraph>{content}</Paragraph>
      </Content>
      <Content>
        <Comments comments={renderComments} setComments={setRenderComments} />
      </Content>
      <Content>
        <WriteComment>
          <LabelTextArea
            id="comment"
            label="댓글"
            value={commentContent}
            onChange={(e) => setCommentContent(e.currentTarget.value)}
          />
          <Button
            type="submit"
            disabled={!commentContent.length}
            onClick={async (e) => {
              e.preventDefault();
              const time = new Date().valueOf();
              const { data } = await communityApi.postComment(_id, {
                author: {
                  nickname: isSignin?.nickname || '???',
                  score: isSignin?.score || 0,
                },
                content: commentContent,
                time,
                number: 0,
              });
              if (data.success) setRenderComments(data.data);
            }}
          >
            등록
          </Button>
        </WriteComment>
      </Content>
    </MainLayout>
  );
};

export default Post;
