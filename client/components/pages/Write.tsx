import Button from '@atoms/button/Button';
import Content from '@containers/content/Content';
import useOpenAlertDialog from '@hooks/useOpenAlertDialog';
import ImageUploader from '@molecules/imageUploader/ImageUploader';
import LabelInput from '@molecules/labelInput/LabelInput';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import { isSigninState } from '@recoil/isSignin';
import { dialogsState } from '@recoil/modalDialog';
import { wordState } from '@recoil/word';
import MainLayout from '@templates/mainLayout/MainLayout';
import { wordApi } from 'api/word';
import isSignin from 'modules/isSignin';
import setToken from 'modules/setToken';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

const Write = () => {
  const [isTitle, setIsTitle] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const resetWord = useResetRecoilState(wordState);
  const [word, setWord] = useRecoilState(wordState);
  const { title, definition, history } = word;
  const setIsSignin = useSetRecoilState(isSigninState);

  const openAlertDialog = useOpenAlertDialog();
  const setDialogs = useSetRecoilState(dialogsState);

  const router = useRouter();

  useEffect(() => {
    setWord((pre) => ({ ...pre, images: [...pre.images, ...images] }));
  }, [images]);

  useEffect(() => {
    setIsTitle(!!title.length);
    setIsModify(!!definition.length);
    setImages((pre) => [...pre, ...word.images]);

    return () => resetWord();
  }, []);

  return (
    <MainLayout>
      <Content fitContent>
        <LabelInput
          id="title"
          label="신조어"
          value={title}
          onChange={(e) => setWord((pre) => ({ ...pre, title: e.currentTarget.value }))}
          validations={[{ isAlert: !title.length, alert: '필수 입력란입니다.' }]}
          disabled={isTitle}
        />
      </Content>
      <Content>
        <LabelTextArea
          id="definition"
          label="정의"
          cols={10000}
          rows={5}
          value={definition}
          onChange={(e) => setWord((pre) => ({ ...pre, definition: e.currentTarget.value }))}
          validations={[{ isAlert: !definition.length, alert: '필수 입력란입니다.' }]}
        />
      </Content>
      <Content>
        <LabelTextArea
          id="history"
          label="유례"
          cols={10000}
          rows={10}
          value={history}
          onChange={(e) => setWord((pre) => ({ ...pre, history: e.currentTarget.value }))}
        />
      </Content>
      <Content>
        <ImageUploader images={images} setImages={setImages} />
      </Content>

      <Content fitContent alignSelf="flex-end">
        <Button
          onClick={async (e) => {
            const payload = { title, definition, history, images };
            const { access, refresh, keepSignin } = setToken.get();
            if (!access || !refresh) return setDialogs((pre) => ({ ...pre, needSignin: true }));
            const api = isModify ? wordApi.put : wordApi.post;
            const { data } = await api(payload, access, refresh);
            if (!data.success) {
              if (data.errMsg) return openAlertDialog(data.errMsg);
            } else {
              if (data.data.accessToken) {
                setToken.set(data.data.accessToken, refresh, keepSignin);
                setIsSignin(isSignin());
              }
              openAlertDialog(isModify ? '수정되었습니다.' : '등록되었습니다.', () =>
                router.replace('/words/' + title),
              );
            }
          }}
          disabled={!title.length || !definition.length}
        >
          {isModify ? '수정' : '등록'}
        </Button>
      </Content>
    </MainLayout>
  );
};

export default Write;
