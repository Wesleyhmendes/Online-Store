import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ChangeEvent, useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { CartType, GetCategory, SelectedCategoryType } from './types/types';
import ProductDetails from './components/Product Details/ProductDetails';
import useLocalStorage from './hooks/useLocalStorage';
import Checkout from './pages/Checkout/Checkout';
import ReviewForm from './components/EvaluateForm/EvaluateForm';
import {
  getCategories, getProductsByQuery,
  getProductsFromCategoryAndQuery,
} from './services/api';

function App() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<GetCategory[]>([]);

  const { readLocalStorage, saveLocalStorage } = useLocalStorage();

  const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryType>({
    id: '',
    isChecked: false,
  });

  const [cart, setCart] = useState<CartType[]>(readLocalStorage('cartProducts') || []);

  useEffect(() => {
    saveLocalStorage('cartProducts', cart);
    setCart(readLocalStorage('cartProducts'));
  }, []);

  const [isStart, setIsStart] = useState(true);

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const submitSearch = async () => {
    const fetchedProducts = await getProductsByQuery(search);
    setProducts(fetchedProducts.results);
    setIsStart(false);
  };

  const handleCategory = async (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value;
    const fetchedProducts = await getProductsFromCategoryAndQuery(search, id);
    setProducts(fetchedProducts.results);
    setSelectedCategory({
      id: event.target.value,
      isChecked: event.target.checked,
    });
  };

  useEffect(() => {
    const fetchedCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };
    fetchedCategories();
  }, []);

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
            handleCategory={ handleCategory }
            selectedCategory={ selectedCategory }
            cart={ cart }
            setCart={ setCart }
          /> }
        />
        <Route
          path="/carrinho"
          element={ <Cart
            cart={ cart }
            setCart={ setCart }
          /> }
        />
        <Route
          path="/checkout"
          element={ <Checkout
            cart={ cart }
            setCart={ setCart }
          /> }
        />
        <Route
          path="/details/:idProduct"
          element={ <ProductDetails
            products={ products }
            cart={ cart }
            setCart={ setCart }
          /> }
        />
        <Route
          path="/checkout"
          element={ <Checkout
            cart={ cart }
            setCart={ setCart }
          /> }
        />
      </Route>
      <Route path="/review" element={ <ReviewForm /> } />
    </Routes>
  );
}

export default App;
