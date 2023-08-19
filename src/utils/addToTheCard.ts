import useLocalStorage from '../hooks/useLocalStorage';
import { CartType } from '../types/types';

const AddToTheCart = (
  state: CartType[],
  setState: (state: CartType[]) => void,
  product: CartType | undefined,
  key: string,
) => {
  const { saveLocalStorage } = useLocalStorage();
  if (product) {
    const cartItem = {
      ...product,
      quantity: Number.isNaN(product) ? product.quantity + 1 : 1,
      totalPrice: product.price,
    };
    setState([
      ...state,
      cartItem,
    ]);
    saveLocalStorage(key, [...state, cartItem]);
  }
};

export default AddToTheCart;
