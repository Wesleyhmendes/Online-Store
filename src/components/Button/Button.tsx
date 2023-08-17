import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  text?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ text = '', children = '', ...rest }: ButtonProps) {
  return (
    <button
      { ...rest }
    >
      { children || text }
    </button>
  );
}
export default Button;
