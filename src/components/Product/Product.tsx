import { CartType, ProductType } from '../../types/types';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

type ProductProps = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  product: ProductType;
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
  testId:string;
};

function Product(
  { thumbnail, title, price, product, cart, setCart, testId }: ProductProps,
) {
  return (
    <div data-testid="product" className="productCard">
      <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
      <h4 data-testid="product-detail-name">{title}</h4>
      <p data-testid="product-detail-price">{price}</p>
    </div>
  );
}
export default Product;
