import Button from '../Button/Button';
import { CartType } from '../../types/types';
import AddToTheCart from '../../utils/addToTheCard';
import './addToCartButton.modules.css';

type CartButtonProps = {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
  product: CartType;
  testId:string;
};
export function AddToCartButton({ cart, setCart, product, testId }: CartButtonProps) {
  const handleClick = () => {
    AddToTheCart(cart, setCart, product, 'cartProducts');
  };
  return (
    <Button
      className="addToCartButton"
      testId={ testId }
      onClick={ () => handleClick() }
    >
      Adicionar ao Carrinho
    </Button>
  );
}
export default AddToCartButton;
