import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import SearchContainer from '../SearchContainer/SearchContainer';

function Header() {
  return (
    <header>
      <SearchContainer />
      <Link to="/carrinho" data-testid="shopping-cart-button">
        <button>
          <BsCart />
        </button>
      </Link>
    </header>
  );
}
export default Header;
