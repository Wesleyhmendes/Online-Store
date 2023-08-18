import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Home from '../../pages/Home/Home';
import { getProductsByQuery } from '../../services/api';
import { ProductType } from '../../types/types';

type SearchProps = {
  search: string;
  products: ProductType[];
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  submitSearch: () => void;
};

function SearchContainer({ search, products, handleSearch, submitSearch }: SearchProps) {
  return (
    <div className="searchContainer">
      <Input
        value={ search }
        onChange={ (event) => handleSearch(event) }
        id="searchInput"
        data-testid="query-input"
      />
      <Button
        onClick={ () => submitSearch() }
        type="button"
        text="Pesquisar"
        data-testid="query-button"
      />
    </div>

  );
}
export default SearchContainer;
