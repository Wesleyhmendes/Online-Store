import { Link } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CartType } from '../../types/types';
import Button from '../../components/Button/Button';

type CartProps = {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
};
function Cart({ cart, setCart }: CartProps) {
  // const { readLocalStorage } = useLocalStorage();
  // const itens: CartType[] = readLocalStorage('cartProducts');
  const { saveLocalStorage } = useLocalStorage();
  const handleQuantityMore = (item: CartType) => {
    const updatedCart = cart.map((product) => (
      product.id === item.id
        ? {
          ...product,
          quantity: product.quantity + 1,
          totalPrice: product.totalPrice + product.price,
        }
        : product
    ));
    setCart(
      updatedCart,
    );
    saveLocalStorage('cartProducts', updatedCart);
  };
  const handleQuantityLess = (item: CartType) => {
    const updatedCart = cart.map((product) => (
      product.id === item.id
        ? {
          ...product,
          quantity: product.quantity === 1 ? 1 : product.quantity - 1,
          totalPrice: product.totalPrice + product.price,
        }
        : product
    ));
    setCart(
      updatedCart,
    );
    saveLocalStorage('cartProducts', updatedCart);
  };
  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    saveLocalStorage('cartProducts', updatedCart);
  };
  return (
    <>
      {
        !cart.length && (
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        )
      }
      <section>
        <Link to="/">
          <img
            src="src/utils/goBack.png"
            alt="voltar"
            style={
              { width: 10 }
            }
          />
          Voltar
        </Link>
        <h2>Carrinho de Compras</h2>
        <Link to="/checkout" data-testid="checkout-products">
          <Button>Finalizar Compras</Button>
        </Link>
        { cart.map((item) => (
          <div key={ item.id }>
            <button
              id={ item.id }
              data-testid="remove-product"
              onClick={ (event) => handleRemove(event) }
            >
              :x_vermelho:
            </button>
            <div>
              <img src={ item.thumbnail } alt={ item.title } />
              <h4 data-testid="shopping-cart-product-name">{ item.title }</h4>
              <p>{ item.price }</p>
            </div>
            <button
              data-testid="product-increase-quantity"
              onClick={ () => handleQuantityMore(item) }
            >
              +
            </button>
            <p data-testid="shopping-cart-product-quantity">
              { item.quantity }
            </p>
            <button
              data-testid="product-decrease-quantity"
              onClick={ () => handleQuantityLess(item) }
            >
              -
            </button>
          </div>
        )) }
      </section>
    </>
  );
}
export default Cart;
