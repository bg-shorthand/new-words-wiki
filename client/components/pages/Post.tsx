import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import IconButton from '@atoms/iconButton/IconButton';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import { getServerSideProps } from '@pages/community/post/[id]';
import MainLayout from '@templates/mainLayout/MainLayout';
import addPrefix0 from 'modules/addPrefix0';
import generateTierImage from 'modules/generateTierImage';
import isSignin from 'modules/isSignin';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Post = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, content, author, score, time, comment } = post;

  const [isAuthor, setIsAuthor] = useState(false);

  const date = new Date(time);
  const year = date.getFullYear();
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
              <IconButton icon="fas fa-highlighter" />
              <IconButton icon="far fa-trash-alt" />
            </>
          ) : null}{' '}
          | {`${year}.${month}.${day}. ${hour}:${minute}`}
        </span>
      </Content>
      <Content>
        <Paragraph>{content}</Paragraph>
      </Content>
      <Content>{comment.length ? <h1>asdf</h1> : <Alert>댓글이 없습니다.</Alert>}</Content>
      <Content>
        <LabelTextArea id="comment" label="댓글" />
        <Button>등록</Button>
      </Content>
    </MainLayout>
  );
};

export default Post;
