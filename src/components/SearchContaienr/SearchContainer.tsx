import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchContainer() {
  return (
    <div className="searchContainer">
      <Input id="searchInput" />
      <Button type="button" text="Pesquisar" />
    </div>
  );
}
export default SearchContainer;
