import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ChangeEvent, useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import { getCategories, getProductsByQuery } from './services/api';
import { GetCategory } from './types/types';

function App() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<GetCategory[]>([]);

  const [isStart, setIsStart] = useState(true);

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const submitSearch = async () => {
    const fetchedProducts = await getProductsByQuery(search);
    setProducts(fetchedProducts.results);
    setIsStart(false);
  };

  useEffect(() => {
    const fetchedCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };

    fetchedCategories();
  });

  return (
    <Routes>
      <Route
        path="/"
        element={ <Layout
          search={ search }
          handleSearch={ handleSearch }
          submitSearch={ submitSearch }
        /> }
      >
        <Route
          index
          path="/"
          element={ <Home
            products={ products }
            categories={ categories }
            isStart={ isStart }
          /> }
        />
        <Route path="/carrinho" element={ <Carrinho /> } />
      </Route>
    </Routes>
  );
}

export default App;
