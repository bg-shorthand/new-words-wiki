import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import IconButton from '@atoms/iconButton/IconButton';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import WriteComment from '@containers/writeComment/WriteComment';
import Comments from '@molecules/comments/Comments';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import { getServerSideProps } from '@pages/community/post/[id]';
import { postState } from '@recoil/post';
import MainLayout from '@templates/mainLayout/MainLayout';
import communityApi from 'api/community';
import addPrefix0 from 'modules/addPrefix0';
import generateTierImage from 'modules/generateTierImage';
import isSignin from 'modules/isSignin';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Post = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, content, author, score, time, comments, _id } = post;

  const [isAuthor, setIsAuthor] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  const setPostState = useSetRecoilState(postState);

  const router = useRouter();

  const date = new Date(time);
  const year = date.getFullYear().toString().slice(2);
  const month = addPrefix0(date.getMonth() + 1);
  const day = addPrefix0(date.getDate());
  const hour = addPrefix0(date.getHours());
  const minute = addPrefix0(date.getMinutes());

  useEffect(() => {
    if (isSignin()) {
      setIsAuthor(author === isSignin()?.nickname);
    }
  });

  return (
    <MainLayout>
      <Content fitContent>
        <Heading level={1}>{title}</Heading>
      </Content>
      <Content fitContent alignSelf="flex-end" flexFlow="row">
        <span>
          {author} <Image src={generateTierImage(score)} width={12} height={12}></Image>
          {isAuthor ? (
            <>
              <IconButton
                icon="fas fa-highlighter"
                onClick={() => {
                  setPostState({ title, content, id: _id });
                  router.push('/community/writePost');
                }}
              />
              <IconButton
                icon="far fa-trash-alt"
                onClick={async () => {
                  const { data } = await communityApi.deletePost(_id);
                  if (data.success) router.replace('/community/1');
                }}
              />
            </>
          ) : null}{' '}
          | {`${year}.${month}.${day}. ${hour}:${minute}`}
        </span>
      </Content>
      <Content>
        <Paragraph>{content}</Paragraph>
      </Content>
      <Content>
        <Comments comments={comments} />
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
                  nickname: isSignin()?.nickname || '???',
                  score: isSignin()?.score || 0,
                },
                content: commentContent,
                time,
              });
              if (data.success) router.reload();
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
