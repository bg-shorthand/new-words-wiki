import { DefaultProps } from 'const/types';

interface InputProps extends DefaultProps {
  id: string;
  placeholder?: string;
}

const InputText = ({ id, placeholder }: InputProps) => {
  return <input type="text" id={id} placeholder={placeholder} />;
};

export default InputText;
