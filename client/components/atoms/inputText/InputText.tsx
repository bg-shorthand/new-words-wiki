import { DefaultProps } from 'const/types';

interface InputProps extends DefaultProps {
  id: string;
  placeholder?: string;
}

const Input = ({ id, placeholder }: InputProps) => {
  return <input type="text" id={id} placeholder={placeholder} />;
};

export default Input;
