import Input from '@atoms/input/Input';
import Label from '@atoms/label/Label';
import LabelInputBox from '@containers/labelInputContainer/LabelInputContainer';
import { DefaultProps } from 'const/types';
import { ChangeEventHandler } from 'react';

interface LabelInputTextProps extends DefaultProps {
  id: string;
  label: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
}

const LabelInputText = ({ id, label, value, onChange, disabled }: LabelInputTextProps) => {
  return (
    <LabelInputBox>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={onChange} disabled={disabled} />
    </LabelInputBox>
  );
};

export default LabelInputText;
