import { BsFillCartDashFill } from 'react-icons/bs';
import { CartType } from '../../types/types';

function CartItem({ thumbnail, title, price }:CartType) {
  return (
    <div>
      <img src={ thumbnail } alt={ title } />
      <h4>{ title }</h4>
      <p>{ price }</p>
      <button data-testid="shopping-cart-button">
        <BsFillCartDashFill />
      </button>
    </div>
  );
}

export default CartItem;
