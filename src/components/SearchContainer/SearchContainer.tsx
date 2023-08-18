import { ChangeEvent } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

type SearchProps = {
  search: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  submitSearch: () => void;
};

function SearchContainer({ search, handleSearch, submitSearch }: SearchProps) {
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
