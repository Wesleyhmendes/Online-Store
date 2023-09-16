import { Link } from 'react-router-dom';
import { ChangeEvent } from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';
import Button from '../Button/Button';
import './header.modules.css';
import cartButton from '../../assets/cartButton.svg';
import headerLogo from '../../assets/header-logo.png';
import { CartType } from '../../types/types';
import useLocalStorage from '../../hooks/useLocalStorage';

type HeaderProps = {
  search: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  submitSearch: () => void;
};

function Header({ search, handleSearch, submitSearch }: HeaderProps) {
  const { readLocalStorage } = useLocalStorage();
  const cartQuantity = readLocalStorage('cartProducts');
  return (
    <header className="mainHeader">
      <Link to="/">
        <div className="headerTitle">
          <img className="headerLogo" src={ headerLogo } alt="logo" />
          <h1>Code Store</h1>
        </div>
      </Link>
      <SearchContainer
        search={ search }
        handleSearch={ handleSearch }
        submitSearch={ submitSearch }
      />
      <Link to="/carrinho" data-testid="shopping-cart-button">
        <Button className="cartButton">
          <img src={ cartButton } alt="Cart Button" />
          <div className="cartQuantityDiv">
            <img
              className="greenEllipse"
              src="src/assets/greenEllipse.svg"
              alt="green-elipse"
            />
            <p className="cartQuantity">{ cartQuantity.length }</p>
          </div>
        </Button>
      </Link>
    </header>
  );
}
export default Header;
