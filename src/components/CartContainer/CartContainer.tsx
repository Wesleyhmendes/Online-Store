import { CartType } from '../../types/types';
import Product from '../Product/Product';

type CartContainerProps = {
  cart: CartType[];
};

function CartContainer({ cart }: CartContainerProps) {
  const total = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  return (
    <section className="cart-products-container">
      { cart && cart.map((product) => (
        <div key={ product.id } className="product-container">
          <Product
            thumbnail={ product.thumbnail }
            title={ product.title }
            price={ product.price }
          />
        </div>
      )) }
      <span>
        {`Total: R$${total.toFixed(2).replace('.', ',')}`}
      </span>
    </section>
  );
}
export default CartContainer;
