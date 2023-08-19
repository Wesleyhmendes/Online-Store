import Button from '../Button/Button';
import { CartButtonProps } from '../../types/types';
import AddToTheCart from '../../utils/addToTheCard';

export function AddToCartButton({ cart, setCart, product, testId }: CartButtonProps) {
  const handleClick = (/* id:string */) => {
    AddToTheCart(cart, setCart, product, 'cartProducts');
    // setCart(
    //   cart.map((cartItem) => (
    //     cartItem.id === id
    //       ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //       : cartItem
    //   )),
    // );
  };
  return (
    <Button
      testId={ testId }
      onClick={ /* () => */ handleClick/* (product.id) */ }
    >
      Adicionar ao Carrinho
    </Button>
  );
}
export default AddToCartButton;
