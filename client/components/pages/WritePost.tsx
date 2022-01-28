import Button from '@atoms/button/Button';
import Content from '@containers/content/Content';
import useOpenAlertDialog from '@hooks/useOpenAlertDialog';
import LabelInput from '@molecules/labelInput/LabelInput';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import MainLayout from '@templates/mainLayout/MainLayout';
import communityApi from 'api/community';
import generateTierImage from 'modules/generateTierImage';
import isSignin from 'modules/isSignin';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const WritePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('???');
  const [score, setScore] = useState(0);
  const [isTitle, setIsTitle] = useState(false);
  const [isContent, setIsContent] = useState(false);

  const openAlertDialog = useOpenAlertDialog();

  const router = useRouter();

  useEffect(() => {
    if (!!isSignin()) {
      setAuthor(isSignin()!.nickname);
      setScore(isSignin()!.score);
    }
  }, []);

  return (
    <MainLayout>
      <Content fitContent>
        <LabelInput
          id="title"
          label="제목"
          value={title}
          onChange={(e) => {
            setIsTitle(!!e.currentTarget.value.length);
            setTitle(e.currentTarget.value);
          }}
          validations={[{ isAlert: !isTitle, alert: '필수 입력란입니다.' }]}
        />
      </Content>
      <Content>
        <LabelTextArea
          id="content"
          label="내용"
          rows={10}
          value={content}
          onChange={(e) => {
            setIsContent(!!e.currentTarget.value.length);
            setContent(e.currentTarget.value);
          }}
          validations={[{ isAlert: !isContent, alert: '필수 입력란입니다.' }]}
        />
      </Content>
      <Content fitContent alignSelf="flex-end">
        <span>
          작성: {author} <Image src={generateTierImage(score)} width={12} height={12}></Image>
        </span>
      </Content>
      <Content fitContent alignSelf="flex-end">
        <Button
          disabled={!isTitle || !isContent}
          onClick={async () => {
            const time = new Date().valueOf();
            const { data } = await communityApi.post({
              title,
              content,
              time,
              author,
              score,
              number: 0,
              comment: [],
              id: '',
            });
            if (data.success) router.push('/community/post/' + data.data._id);
            else openAlertDialog('등록에 실패했습니다.');
          }}
        >
          등록
        </Button>
      </Content>
    </MainLayout>
  );
};

export default WritePost;
