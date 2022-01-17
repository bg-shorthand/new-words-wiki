import Alert from '@atoms/alert/Alert';
import Label from '@atoms/label/Label';
import TextArea from '@atoms/textArea/TextArea';
import LabelInputContainer from '@containers/labelInputContainer/LabelInputContainer';
import { TextareaHTMLAttributes } from 'react';

interface LabelTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  validations?: { isAlert: boolean; alert: string }[];
}

const LabelTextArea = ({ id, label, validations, disabled, ...props }: LabelTextAreaProps) => {
  return (
    <LabelInputContainer disabled={disabled}>
      <Label htmlFor={id}>{label}</Label>
      <TextArea id={id} disabled={disabled} {...props} />
      {validations?.map(({ isAlert, alert }) => {
        return isAlert && <Alert key={alert}>{alert}</Alert>;
      })}
    </LabelInputContainer>
  );
};

export default LabelTextArea;
