import { GetCategory, ProductType } from '../../types/types';

type HomeProps = {
  products?: ProductType[];
  categories?: GetCategory[];
  isStart: boolean;
};

function Home({ products = [], categories = [], isStart } : HomeProps) {
  return (
    <>
      <div>
        {isStart && (
          <h1 className="title" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>)}
        {products.length > 0 && categories.map((category) => (
          <label
            data-testid="category"
            id={ `category-${category.id}` }
            key={ category.id }
            htmlFor={ category.id }
          >
            <input
              name="category"
              id={ category.id }
              type="radio"
            />
            { category.name }
          </label>
        )) }
      </div>
      {(products.length === 0 && !isStart) && (
        <h1>
          Nenhum produto foi encontrado
        </h1>
      )}
      { products.length > 0 && products.map((product) => (
        <div className="productCard" key={ product.id }>
          <img src={ product.thumbnail } alt={ product.title } />
          <h4>{ product.title }</h4>
          <p>{ product.price }</p>
        </div>
      ))}
    </>
  );
}
export default Home;
