import Button from '../Button/Button';
import { CartType, ProductType } from '../../types/types';
import AddToTheCart from '../../utils/addToTheCard';

type CartButtonProps = {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
  product: CartType;
  testId:string;
};

export function AddToCartButton({ cart, setCart, product, testId }: CartButtonProps) {
  const handleClick = (id:string) => {
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
      onClick={ () => handleClick(product.id) }
    >
      Adicionar ao Carrinho
    </Button>
  );
}
export default AddToCartButton;
