import { ChangeEvent, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CartType } from '../../types/types';

function Carrinho() {
  const [isThereProduct, setIsthereProduct] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState<number>(0);

  const { readLocalStorage, deleteLocalStorage, saveLocalStorage } = useLocalStorage();
  const itens: CartType[] = readLocalStorage('cartProducts');

  if (itens.length > 0) setIsthereProduct(true);

  const handleQuantityMore = () => {
    setQuantityProduct((prev) => quantityProduct - 1);
  };

  const handleQuantityLess = () => {
    setQuantityProduct((prev) => quantityProduct + 1);
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    const newItensList = itens.filter((item) => item.id !== id);
    deleteLocalStorage('cartProducts');
    saveLocalStorage('cartProducts', newItensList);
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
            { itens.map((item) => (
              <div key={ item.id }>
                <button
                  id={ item.id }
                  data-testid="remove-product"
                  onClick={ (event) => handleRemove(event) }
                >
                  ❌
                </button>
                <div>
                  <img src={ item.thumbnail } alt={ item.title } />
                  <h4>{ item.title }</h4>
                  <p>{ item.price }</p>
                </div>
                <button
                  data-testid="product-increase-quantity"
                  onClick={ handleQuantityMore }
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">{ quantityProduct }</p>
                <button
                  data-testid="product-decrease-quantity"
                  onClick={ handleQuantityLess }
                >
                  -
                </button>
              </div>
            )) }
          </section>
        )
      }
    </>
  );
}
export default Carrinho;
