import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  text?: string;
  children?: ReactNode;
  testId?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ text = '', children = '', testId = '', ...rest }: ButtonProps) {
  console.log(testId);

  return (
    <button
      data-testid={ testId }
      { ...rest }
    >
      { children || text }
    </button>
  );
}
export default Button;
