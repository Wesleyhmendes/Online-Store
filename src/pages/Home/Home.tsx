import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/Category/Category';
import Heading from '../../components/Heading/Heading';
import Product from '../../components/Product/Product';
import {
  CartType, GetCategory, ProductType,
  SelectedCategoryType,
} from '../../types/types';
import useLocalStorage from '../../hooks/useLocalStorage';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';

type HomeProps = {
  products: CartType[];
  categories?: GetCategory[];
  isStart: boolean;
  selectedCategory: SelectedCategoryType;
  handleCategory: (event: ChangeEvent<HTMLInputElement>) => void;
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
};

function Home({

  products = [],
  categories = [],
  isStart,
  selectedCategory,
  handleCategory,
  cart,
  setCart,
}: HomeProps) {
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

      {(products.length === 0 && !isStart) && (
        <Heading>
          Nenhum produto foi encontrado
        </Heading>
      )}

      {
        products.length > 0 && products.map((product) => (
          <>
            <Link
              key={ product.id }
              to={ `/details/${product.id}` }
              data-testid="product-detail-link"
            >
              <Product
                testId="proctAAA"
                product={ product }
                key={ product.id }
                price={ product.price }
                thumbnail={ product.thumbnail }
                title={ product.title }
                cart={ cart }
                setCart={ setCart }
              />
            </Link>
            <AddToCartButton
              cart={ cart }
              setCart={ setCart }
              product={ product }
              testId="product-add-to-cart"
            />
          </>

        ))
      }
    </>
  );
}
export default Home;
