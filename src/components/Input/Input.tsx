import { InputHTMLAttributes, ReactNode } from 'react';

type InputProps = {
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ children = null, id, ...rest }: InputProps) {
  return (
    <label htmlFor={ id }>
      { children }
      <input
        { ...rest }
        id={ id }
      />
    </label>
  );
}
export default Input;
