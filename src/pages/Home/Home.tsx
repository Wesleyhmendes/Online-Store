import Input from '../../components/Input/Input';
import { GetCategory, ProductType } from '../../types/types';

type HomeProps = {
  products?: ProductType[];
  categories?: GetCategory[];
  isStart: boolean;
};

function Home({ products = [], categories = [], isStart } : HomeProps) {
  console.log(categories);

  return (
    <>
      <div>
        {isStart && (
          <h1 className="title" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>)}
        {products && categories.map((category) => (
          <Input
            testId="category"
            key={ category.id }
            id={ `category-${category.id}` }
            type="radio"
          >
            {category.name}
          </Input>
        )) }
      </div>
      {(products.length === 0 && !isStart) && (
        <h1>
          Nenhum produto foi encontrado
        </h1>
      )}
      { products.length > 0 && products.map((product) => (
        <div data-testid="product" className="productCard" key={ product.id }>
          <img src={ product.thumbnail } alt={ product.title } />
          <h4>{ product.title }</h4>
          <p>{ product.price }</p>
        </div>
      ))}
    </>
  );
}
export default Home;
