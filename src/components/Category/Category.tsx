import { ChangeEvent } from 'react';
import { SelectedCategoryType } from '../../types/types';
import Input from '../Input/Input';
import './category.modules.css';

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
    <div className="categoryAside">
      <label htmlFor={ `category-${id}` } className="categoryAside">
        <Input
          className="categoryInputRadio"
          testId="category"
          id={ `category-${id}` }
          type="radio"
          value={ id }
          onChange={ (event) => handleCategory(event) }
          checked={ selectedCategory.id === id }
        />
        { name }
      </label>
    </div>
  );
}
export default Category;
