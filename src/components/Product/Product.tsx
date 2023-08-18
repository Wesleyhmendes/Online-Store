import { Link } from 'react-router-dom';
import { ProductProps } from '../../types/types';
import useLocalStorage from '../../hooks/useLocalStorage';

function Product({ thumbnail, title, price, id }: ProductProps) {
  const data:any = [thumbnail, title, price, id];
  const { saveLocalStorage } = useLocalStorage();
  const handleClick = () => {
    saveLocalStorage('cartProduct', data);
  };
  return (
    <div data-testid="product" className="productCard">
      <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
      <h4 data-testid="product-detail-name">{ title }</h4>
      <p data-testid="product-detail-price">{ price }</p>
      <button data-testid="product-detail-add-to-cart" onClick={ handleClick }>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
export default Product;
