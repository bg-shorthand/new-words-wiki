import Button from '@atoms/button/Button';
import Content from '@containers/content/Content';
import ImageUploader from '@molecules/imageUploader/ImageUploader';
import LabelInput from '@molecules/labelInput/LabelInput';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import MainLayout from '@templates/mainLayout/MainLayout';
import { wordApi } from 'api/word';
import { useState } from 'react';

const Write = () => {
  const [title, setTitle] = useState('');
  const [definition, setDefinition] = useState('');
  const [history, setHistory] = useState('');
  const [images, setImages] = useState<string[]>([]);

  return (
    <MainLayout>
      <Content fitContent>
        <LabelInput
          id="title"
          label="신조어"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          validations={[{ isAlert: !title.length, alert: '필수 입력란입니다.' }]}
        />
      </Content>
      <Content>
        <LabelTextArea
          id="definition"
          label="정의"
          cols={10000}
          rows={5}
          value={definition}
          onChange={(e) => setDefinition(e.currentTarget.value)}
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
          onChange={(e) => setHistory(e.currentTarget.value)}
        />
      </Content>
      <Content>
        <ImageUploader images={images} setImages={setImages} />
      </Content>

      <Content fitContent>
        <Button
          onClick={async (e) => {
            const res = await wordApi.post({ title, definition, history, images });
          }}
          disabled={!title.length && !definition.length}
        >
          등록
        </Button>
      </Content>
    </MainLayout>
  );
};

export default Write;
