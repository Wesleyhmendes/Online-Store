import Button from '../Button/Button';
import { CartType, ProductType } from '../../types/types';
import AddToTheCart from '../../utils/addToTheCard';

type CartButtonProps = {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
  product: ProductType;
  testId:string;

};
export function AddToCartButton({ cart, setCart, product, testId }: CartButtonProps) {
  const handleClick = () => {
    AddToTheCart(cart, setCart, product, 'cartProducts');
  };
  return (
    <Button
      testId={ testId }
      onClick={ handleClick }
    >
      Adicionar ao Carrinho
    </Button>
  );
}
export default AddToCartButton;
