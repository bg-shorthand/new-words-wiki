import Content from '@containers/content/Content';
import LabelInput from '@molecules/labelInput/LabelInput';
import MainLayout from '@templates/mainLayout/MainLayout';
import { useState } from 'react';

const Write = () => {
  const [title, setTitle] = useState('');

  return (
    <MainLayout>
      <Content>
        <LabelInput
          id="title"
          label="신조어"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </Content>
    </MainLayout>
  );
};

export default Write;
