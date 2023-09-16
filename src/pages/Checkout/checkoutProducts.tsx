import { CartType } from '../../types/types';

type CartProps = {
  cart: CartType[];
};

function CheckoutProducts({ cart }: CartProps) {
  return (
    <section className="cartProductSection">
      <div className="cartTitleDiv">
        <h2 className="cartTitle">Revise seus produtos</h2>
      </div>
      { cart.map((item) => (
        <div className="cartProductDiv" key={ item.id }>
          <div className="cartImgNamePriceDiv">
            <img className="cartImg" src={ item.thumbnail } alt={ item.title } />
            <h4
              className="cartProductName"
              data-testid="shopping-cart-product-name"
            >
              { item.title.length > 50 ? `${item.title
                .slice(0, 50)}...` : item.title }
            </h4>
            <p className="cartProductPrice">
              R$
              { ' ' }
              { item.price.toFixed(2) }
            </p>
          </div>
        </div>
      )) }
    </section>
  );
}

export default CheckoutProducts;
