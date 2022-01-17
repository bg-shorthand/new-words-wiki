import Button from '@atoms/button/Button';
import Content from '@containers/content/Content';
import LabelInput from '@molecules/labelInput/LabelInput';
import LabelTextArea from '@molecules/labelTextArea/LabelTextArea';
import MainLayout from '@templates/mainLayout/MainLayout';
import { useState } from 'react';

const Write = () => {
  const [title, setTitle] = useState('');

  return (
    <MainLayout>
      <Content fitContent>
        <LabelInput
          id="title"
          label="신조어"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </Content>
      <Content>
        <LabelTextArea id="definition" label="정의" cols={10000} rows={5} />
      </Content>
      <Content>
        <LabelTextArea id="history" label="유례" cols={10000} rows={10} />
      </Content>
      <input type="file" />
      <Content fitContent>
        <Button>등록</Button>
      </Content>
    </MainLayout>
  );
};

export default Write;
