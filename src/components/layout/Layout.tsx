import { Outlet } from 'react-router-dom';
import { ChangeEvent } from 'react';
import Header from '../Header/Header';

type LayoutProps = {
  search: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  submitSearch: () => void;
};

function Layout({ search, handleSearch, submitSearch }: LayoutProps) {
  return (
    <>
      <Header
        search={ search }
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
