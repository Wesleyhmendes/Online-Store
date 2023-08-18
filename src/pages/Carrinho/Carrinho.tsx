import CartItem from '../../components/CartItem/CartItem';

function Carrinho() {
  return (
    <>
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>

      <div>
        <CartItem id={''} thumbnail={''} title={''} price={0} />
      </div>
    </>
  );
}
export default Carrinho;
