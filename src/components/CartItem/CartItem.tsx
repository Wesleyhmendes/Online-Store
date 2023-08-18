import { BsFillCartDashFill } from 'react-icons/bs';
import { ProductProps } from '../../types/types';

function CartItem({ thumbnail, title, price }:ProductProps) {
  return (
    <div>
      <img src={ thumbnail } alt={ title } />
      <h4>{ title }</h4>
      <p>{ price }</p>
      <button>
        <BsFillCartDashFill />
      </button>
    </div>
  );
}

export default CartItem;
