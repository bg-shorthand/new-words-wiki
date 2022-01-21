import Button from '@atoms/button/Button';
import Content from '@containers/content/Content';
import useOpenAlertDialog from '@hooks/useOpenAlertDialog';
import ImageUploader from '@molecules/imageUploader/ImageUploader';
import LabelInput from '@molecules/labelInput/LabelInput';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import { dialogsState } from '@recoil/modalDialog';
import { wordState } from '@recoil/word';
import MainLayout from '@templates/mainLayout/MainLayout';
import { wordApi } from 'api/word';
import setToken from 'modules/setToken';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

const Write = () => {
  const [isTitle, setIsTitle] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const resetWord = useResetRecoilState(wordState);
  const [word, setWrod] = useRecoilState(wordState);
  const { title, definition, history } = word;

  const openAlertDialog = useOpenAlertDialog();
  const setDialogs = useSetRecoilState(dialogsState);

  const router = useRouter();

  useEffect(() => {
    setWrod((pre) => ({ ...pre, images: [...images] }));
  }, [images]);

  useEffect(() => {
    setIsTitle(!!title.length);
    setIsModify(!!definition.length);

    return () => resetWord();
  }, []);

  return (
    <MainLayout>
      <Content fitContent>
        <LabelInput
          id="title"
          label="신조어"
          value={title}
          onChange={(e) => setWrod((pre) => ({ ...pre, title: e.currentTarget.value }))}
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
          onChange={(e) => setWrod((pre) => ({ ...pre, definition: e.currentTarget.value }))}
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
          onChange={(e) => setWrod((pre) => ({ ...pre, history: e.currentTarget.value }))}
        />
      </Content>
      <Content>
        <ImageUploader images={images} setImages={setImages} />
      </Content>

      <Content fitContent>
        {isModify ? (
          <Button>수정</Button>
        ) : (
          <Button
            onClick={async (e) => {
              const payload = { title, definition, history, images };
              const { access, refresh } = setToken.get();
              if (!access || !refresh) return setDialogs((pre) => ({ ...pre, needSignin: true }));
              const { data } = await wordApi.post(payload, access, refresh);
              if (!data.success) {
                if (data.errMsg) return openAlertDialog(data.errMsg);
              } else openAlertDialog('등록되었습니다.', () => router.replace('/words/' + title));
            }}
            disabled={!title.length || !definition.length}
          >
            등록
          </Button>
        )}
      </Content>
    </MainLayout>
  );
};

export default Write;
