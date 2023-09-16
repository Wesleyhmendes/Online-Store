import { ChangeEvent } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './searchContainer.modules.css';

type SearchProps = {
  search: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  submitSearch: () => void;
};

function SearchContainer({ search, handleSearch, submitSearch }: SearchProps) {
  return (
    <div className="searchContainer">
      <Input
        placeholder=" Produtos, marcas, vendedores..."
        className="searchInput"
        value={ search }
        onChange={ (event) => handleSearch(event) }
        id="searchInput"
        data-testid="query-input"
      >
        <Button
          className="searchButton teste"
          onClick={ () => submitSearch() }
          type="button"
          text="Pesquisar"
          data-testid="query-button"
        >
          <img src="src/assets/searchIcon.svg" alt="" />
        </Button>
      </Input>
    </div>

  );
}
export default SearchContainer;
