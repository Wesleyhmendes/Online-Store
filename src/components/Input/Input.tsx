import { InputHTMLAttributes, ReactNode } from 'react';

type InputProps = {
  children?: ReactNode;
  testId?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ children = null, id, testId = '', ...rest }: InputProps) {
  return (
    <label htmlFor={ id } data-testid={ testId }>
      <input
        { ...rest }
        id={ id }
      />
      { children }
    </label>
  );
}
export default Input;
