import { ChangeEvent } from 'react';
import { SelectedCategoryType } from '../../types/types';
import Input from '../Input/Input';

type CategoryProps = {
  id: string;
  name: string;
  selectedCategory: SelectedCategoryType;
  handleCategory: (event: ChangeEvent<HTMLInputElement>) => void;
};
function Category(
  { id,
    name,
    selectedCategory,
    handleCategory,
  }: CategoryProps,
) {
  return (
    <Input
      testId="category"
      id={ `category-${id}` }
      type="radio"
      value={ id }
      onChange={ (event) => handleCategory(event) }
      checked={ selectedCategory.id === id }
    >
      { name }
    </Input>
  );
}
export default Category;
