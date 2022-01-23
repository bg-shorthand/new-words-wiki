import Alert from '@atoms/alert/Alert';
import Button from '@atoms/button/Button';
import Heading from '@atoms/heading/Heading';
import LabelInput from '@molecules/labelInput/LabelInput';
import { alertContentState, dialogsState } from '@recoil/modalDialog';
import reportApi from 'api/report';
import setToken from 'modules/setToken';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Report = () => {
  const [reportPage, setReportPage] = useState('');
  const [isSame, setIsSame] = useState(false);

  const setDialogs = useSetRecoilState(dialogsState);
  const setAlert = useSetRecoilState(alertContentState);

  const router = useRouter();
  const title = decodeURI(router.asPath.split('/')[2]);

  return (
    <>
      <Heading level={1}>페이지 신고</Heading>
      <Alert>'{title}' 페이지를 신고하시겠습니까?</Alert>
      <Alert>신고된 페이지는 확인 후 삭제 됩니다.</Alert>
      <Alert>신조어가 아닌 경우에만 신고해야 하며,</Alert>
      <Alert>다른 사유는 삭제 처리 되지 않습니다.</Alert>
      <Alert>
        아래 입력란에 <b>'{title} 신고'</b>를 입력해주세요.
      </Alert>
      <LabelInput
        id="reportPage"
        label={title + ' 신고'}
        hidden
        value={reportPage}
        onChange={(e) => {
          setReportPage(e.currentTarget.value);
          setIsSame(title + ' 신고' === e.currentTarget.value);
        }}
        validations={[{ isAlert: !isSame, alert: `'${title} 신고'를 입력해주세요` }]}
      />
      <Button
        disabled={!isSame}
        onClick={async () => {
          const { access, refresh } = setToken.get();
          if (!access || !refresh)
            return setDialogs((pre) => ({ ...pre, report: false, needSignin: true }));
          const { data } = await reportApi.post(title, access, refresh);
          if (data.success) {
            setAlert((pre) => ({ ...pre, message: '신고되었습니다.' }));
            setDialogs((pre) => ({ ...pre, report: false, alert: true }));
          }
        }}
      >
        신고
      </Button>
    </>
  );
};

export default Report;
