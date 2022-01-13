import Alert from '@atoms/alert/Alert';
import Input from '@atoms/input/Input';
import Label from '@atoms/label/Label';
import LabelInputContainer from '@containers/labelInputContainer/LabelInputContainer';
import { InputHTMLAttributes } from 'react';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  validations?: { isAlert: boolean; alert: string }[];
}

const LabelInput = ({ id, label, validations, disabled, type, ...props }: LabelInputProps) => {
  return (
    <LabelInputContainer disabled={disabled} type={type}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} disabled={disabled} type={type} {...props} />
      {validations?.map(({ isAlert, alert }) => {
        return isAlert && <Alert key={alert}>{alert}</Alert>;
      })}
    </LabelInputContainer>
  );
};

export default LabelInput;
