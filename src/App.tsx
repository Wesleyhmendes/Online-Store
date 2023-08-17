import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchContainer from './components/SearchContainer/SearchContainer';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index path="/" element={ <Home /> } />
        <Route path="/carrinho" element={ <Carrinho /> } />
      </Route>
    </Routes>
  );
}

export default App;
