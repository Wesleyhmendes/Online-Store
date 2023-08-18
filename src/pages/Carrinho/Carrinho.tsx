import { useState } from 'react';
import Product from '../../components/Product/Product';
import useLocalStorage from './hooks/useLocalStorage';

function Carrinho() {
  const [isThereProduct, setIsthereProduct] = useState(false);
  const [qunatiyProduct, setQuantityProduct] = useState<number>(0);

  const { readLocalStorage } = useLocalStorage('cartProducts');
  const item = readLocalStorage;

  if (item) setIsthereProduct(true);

  const handleQuantityMore = () => {
    setQuantityProduct((prev) => qunatiyProduct - 1);
  };

  const handleQuantityLess = () => {
    setQuantityProduct((prev) => qunatiyProduct + 1);
  };

  return (
    <>
      {
        !isThereProduct && (
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        )
      }
      {
        isThereProduct && (
          <section>
            <label htmlFor="voltar">
              <button>
                <img
                  src="src/utils/goBack.png"
                  alt="voltar"
                />
              </button>
              { ' ' }
              Voltar
            </label>
            <h2>Carrinho de Compras</h2>
            <div>
              <button>❌</button>
              <Product
                id={ readLocalStorage.id }
                thumbnail={ readLocalStorage.thumbnail }
                title={ readLocalStorage.title }
                price={ readLocalStorage.price }
              />
              <button onClick={ handleQuantityMore }>+</button>
              <p>{ qunatiyProduct }</p>
              <button onClick={ handleQuantityLess }>-</button>
            </div>
          </section>
        )
      }
    </>
  );
}
export default Carrinho;
