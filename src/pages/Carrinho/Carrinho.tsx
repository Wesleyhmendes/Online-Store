import { ChangeEvent, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../../components/Button/Button';
import Product from '../../components/Product/Product';
import { CartType } from '../../types/types';

function Carrinho() {
  const [isThereProduct, setIsthereProduct] = useState(false);

  const { readLocalStorage, deleteLocalStorage, saveLocalStorage } = useLocalStorage();
  const itens: CartType[] = readLocalStorage('cartProducts');

  if (itens.length > 0) setIsthereProduct(true);

  const handleQuantityMore = (item: CartType) => {
    return {
      ...item,
      quantity: item.quantity + 1,
    };
  };

  const handleQuantityLess = (item: CartType) => {
    return {
      ...item,
      quantity: item.quantity - 1,
    };
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
                  onClick={ () => handleQuantityMore(item) }
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">{ item.quantity }</p>
                <button
                  onClick={ () => handleQuantityLess(item) }
                  data-testid="product-decrease-quantity"
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
