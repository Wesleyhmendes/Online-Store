import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { ChangeEvent } from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';
import Button from '../Button/Button';

type HeaderProps = {
  search: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  submitSearch: () => void;
};

function Header({ search, handleSearch, submitSearch }: HeaderProps) {
  return (
    <header>
      <SearchContainer
        search={ search }
        handleSearch={ handleSearch }
        submitSearch={ submitSearch }
      />
      <Link to="/carrinho" data-testid="shopping-cart-button">
        <Button>
          <BsCart />
        </Button>
      </Link>
    </header>
  );
}
export default Header;
