import { HTMLAttributes, ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  testId?: string;
} & HTMLAttributes<HTMLHeadingElement>;
function Heading({ children, testId = '', ...rest }: HeadingProps) {
  return (
    <h1 className="testeee" data-testid={ testId } { ...rest }>
      {children}
    </h1>
  );
}
export default Heading;
