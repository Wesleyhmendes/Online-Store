import { useParams } from 'react-router-dom';
import { CartType } from '../../types/types';
import Product from '../Product/Product';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

interface DetailsProps {
  products: CartType[];
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
}

function ProductDetails({ products, cart, setCart }: DetailsProps) {
  const { idProduct } = useParams<{ idProduct: string; }>();
  // const { saveLocalStorage } = useLocalStorage();
  const searchedProduct = products
    .find((product) => product.id === idProduct);

  if (!searchedProduct) {
    return <h3>Produto não encontrado</h3>;
  }

  const { title, price, thumbnail } = searchedProduct;
  const modifiedThumbnail = `${thumbnail.slice(0, -5)}W${thumbnail.slice(-4)}`;

  // const addToTheCart = () => {
  //   setCart([...cart, {
  //     ...searchedProduct,
  //     quantity: 1,
  //     totalPrice: price,
  //   },
  //   ]);
  //   saveLocalStorage('cartProducts', cart);
  // };

  return (
    <>
      <Product
        price={ price }
        thumbnail={ modifiedThumbnail }
        title={ title }
      />
      <AddToCartButton
        cart={ cart }
        setCart={ setCart }
        product={ searchedProduct }
        testId="product-detail-add-to-cart"
      />
    </>

  );
}

export default ProductDetails;
