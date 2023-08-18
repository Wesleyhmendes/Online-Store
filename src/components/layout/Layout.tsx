import { Outlet } from 'react-router-dom';
import { ChangeEvent } from 'react';
import Header from '../Header/Header';
import { ProductType } from '../../types/types';

type LayoutProps = {
  search: string;
  products: ProductType[];
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  submitSearch: () => void;
};

function Layout({ search, products, handleSearch, submitSearch }: LayoutProps) {
  return (
    <>
      <Header
        search={ search }
        products={ products }
        handleSearch={ handleSearch }
        submitSearch={ submitSearch }
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
