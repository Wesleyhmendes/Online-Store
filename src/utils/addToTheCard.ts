import useLocalStorage from '../hooks/useLocalStorage';
import { CartType, ProductType } from '../types/types';

const AddToTheCart = (
  state: CartType[],
  setState: (state: CartType[]) => void,
  searchedProduct: ProductType | undefined,
  key: string,
) => {
  const { saveLocalStorage } = useLocalStorage();
  if (searchedProduct) {
    setState([
      ...state,
      {
        ...searchedProduct,
        quantity: 1,
        totalPrice: searchedProduct.price,
      },
    ]);
    saveLocalStorage(key, state);
  }
};

export default AddToTheCart;
