import Button from '@atoms/button/Button';
import Content from '@containers/content/Content';
import useOpenAlertDialog from '@hooks/useOpenAlertDialog';
import LabelInput from '@molecules/labelInput/LabelInput';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import { postState } from '@recoil/post';
import MainLayout from '@templates/mainLayout/MainLayout';
import communityApi from 'api/community';
import generateTierImage from 'modules/generateTierImage';
import isSignin from 'modules/isSignin';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

const WritePost = () => {
  const [author, setAuthor] = useState('???');
  const [score, setScore] = useState(0);
  const [isTitle, setIsTitle] = useState(false);
  const [isContent, setIsContent] = useState(false);
  const [isModify, setIsModify] = useState(false);

  const [{ title, content, id }, setPostState] = useRecoilState(postState);
  const resetPostState = useResetRecoilState(postState);

  const openAlertDialog = useOpenAlertDialog();

  const router = useRouter();

  useEffect(() => {
    setIsTitle(!!title.length);
    setIsContent(!!content.length);

    if (!!isSignin()) {
      setAuthor(isSignin()!.nickname);
      setScore(isSignin()!.score);
    }
    if (title.length && content.length) setIsModify(true);

    return () => {
      resetPostState();
    };
  }, []);

  useEffect(() => {
    setIsTitle(!!title.length);
    setIsContent(!!content.length);
  }, [title, content]);

  return (
    <MainLayout>
      <Content fitContent>
        <LabelInput
          id="title"
          label="제목"
          value={title}
          onChange={(e) => {
            setPostState((pre) => ({ ...pre, title: e.currentTarget.value }));
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
            setPostState((pre) => ({ ...pre, content: e.currentTarget.value }));
          }}
          validations={[{ isAlert: !isContent, alert: '필수 입력란입니다.' }]}
        />
      </Content>
      <Content fitContent alignSelf="flex-end">
        <span>
          작성: {author}{' '}
          <Image src={generateTierImage(score)} width={12} height={12} alt="회원 등급"></Image>
        </span>
      </Content>
      <Content fitContent alignSelf="flex-end">
        <Button
          disabled={!isTitle || !isContent}
          onClick={async () => {
            if (isModify) {
              const { data } = await communityApi.updatePost(id, { title, content });
              if (data.success) router.push('/community/post/' + id);
              else openAlertDialog('수정에 실패했습니다.');
            } else {
              const time = new Date().valueOf();
              const { data } = await communityApi.post({
                title,
                content,
                time,
                author,
                score,
                number: 0,
                comments: [],
                id: '',
              });
              if (data.success) router.push('/community/post/' + data.data._id);
              else openAlertDialog('등록에 실패했습니다.');
            }
          }}
        >
          {isModify ? '수정' : '등록'}
        </Button>
      </Content>
    </MainLayout>
  );
};

export default WritePost;
