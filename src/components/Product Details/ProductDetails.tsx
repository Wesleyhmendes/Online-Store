import { useParams } from 'react-router-dom';
import { CartType, ProductType } from '../../types/types';
import Product from '../Product/Product';
import Button from '../Button/Button';
import AddToTheCart from '../../utils/addToTheCard';

interface DetailsProps {
  products: ProductType[];
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

  const { title, price, thumbnail, id } = searchedProduct;
  const modifiedThumbnail = `${thumbnail.slice(0, -5)}W${thumbnail.slice(-4)}`;

  const handleClick = () => {
    AddToTheCart(cart, setCart, searchedProduct, 'cartProducts');
  };

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
        key={ id }
        price={ price }
        thumbnail={ modifiedThumbnail }
        title={ title }
      />
      <Button
        testId="product-detail-add-to-cart"
        onClick={ handleClick }
      >
        Adicionar ao Carrinho
      </Button>
    </>
  );
}

export default ProductDetails;
