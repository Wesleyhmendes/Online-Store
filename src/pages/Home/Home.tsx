import { ChangeEvent } from 'react';
import Category from '../../components/Category/Category';
import Heading from '../../components/Heading/Heading';
import Product from '../../components/Product/Product';
import { GetCategory, ProductType, SelectedCategoryType } from '../../types/types';

type HomeProps = {
  products?: ProductType[];
  categories?: GetCategory[];
  isStart: boolean;
  selectedCategory: SelectedCategoryType;
  handleCategory: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Home({
  products = [],
  categories = [],
  isStart,
  selectedCategory,
  handleCategory,
}: HomeProps) {
  console.log(selectedCategory);
  console.log(categories);
  return (
    <>
      {
        isStart && (
          <Heading className="title" testId="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </Heading>
        )
      }

      {
        products && categories.map((category) => (
          <Category
            key={ category.id }
            id={ category.id }
            name={ category.name }
            handleCategory={ handleCategory }
            selectedCategory={ selectedCategory }
          />
        ))
      }

      { (products.length === 0 && !isStart) && (
        <Heading>
          Nenhum produto foi encontrado
        </Heading>
      ) }

      {
        products.length > 0 && products.map((product) => (
          <Product
            key={ product.id }
            price={ product.price }
            thumbnail={ product.thumbnail }
            title={ product.title }
          />
        ))
      }
    </>
  );
}
export default Home;
