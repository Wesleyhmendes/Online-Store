import { Link } from 'react-router-dom';

type ProductProps = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
};

function Product({ thumbnail, title, price, id }: ProductProps) {
  return (
    <Link to={ `/details/${id}` } data-testid="product-detail-link">
      <div data-testid="product" className="productCard">
        <img src={ thumbnail } alt={ title } />
        <h4>{ title }</h4>
        <p>{ price }</p>
      </div>
    </Link>

  );
}
export default Product;
