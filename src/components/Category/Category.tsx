import Input from '../Input/Input';

type CategoryProps = {
  id: string;
  name: string;
};
function Category({ id, name }: CategoryProps) {
  return (
    <Input
      testId="category"
      key={ id }
      id={ `category-${id}` }
      type="radio"
    >
      {name }
    </Input>
  );
}
export default Category;
