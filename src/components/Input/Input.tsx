import { InputHTMLAttributes, ReactNode } from 'react';

type InputProps = {
  children?: ReactNode;
  testId?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ children = null, id, testId = '', ...rest }: InputProps) {
  return (
    <label htmlFor={ id } data-testid={ testId }>
      { children }
      <input
        { ...rest }
        id={ id }
      />
    </label>
  );
}
export default Input;
