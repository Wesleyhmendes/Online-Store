import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/Category/Category';
import Heading from '../../components/Heading/Heading';
import Product from '../../components/Product/Product';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
import './Home.modules.css';
import {
  CartType, GetCategory,
  SelectedCategoryType,
} from '../../types/types';

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
    <section className="homeMainSection">
      <div className="titleNcategory">
        <aside className="homeAside">
          <h2 className="categoryTitle">Categorias</h2>
          <hr className="categoryDivider" />
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
        </aside>
        {
          (products.length === 0 && isStart) && (
            <Heading className="noSearchTitle" testId="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </Heading>
          )
        }
      </div>

      { (products.length === 0 && !isStart) && (
        <Heading>
          Nenhum produto foi encontrado
        </Heading>
      ) }
      <div className="productCards">
        {
          products.length > 0 && products.map((product) => (
            <div key={ product.id } className="InsideProductCard">
              <Link
                key={ product.id }
                to={ `/details/${product.id}` }
                data-testid="product-detail-link"
              >
                <Product
                  price={ product.price }
                  thumbnail={ product.thumbnail }
                  title={ product.title }
                />
              </Link>
              <AddToCartButton
                cart={ cart }
                setCart={ setCart }
                product={ product }
                testId="product-add-to-cart"
              />
            </div>
          ))
        }
      </div>
    </section>
  );
}
export default Home;
