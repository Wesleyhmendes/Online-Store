import { ButtonHTMLAttributes, ReactNode } from 'react';
import { CartType } from '../../types/types';

type ButtonProps = {
  text?: string;
  children?: ReactNode;
  testId?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ text = '', children = '', testId = '', ...rest }: ButtonProps) {
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
