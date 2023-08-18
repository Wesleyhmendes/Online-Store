import { useState } from 'react';
import { CartType } from '../../types/types';
import useLocalStorage from '../../hooks/useLocalStorage';

 type CarrinhoProps = {
   cart: CartType[];
   setCart: (cart: CartType[]) => void;
 };
function Carrinho({ cart, setCart }: CarrinhoProps) {
  const [isThereProduct, setIsthereProduct] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState<number>(0);

  const {
    readLocalStorage, deleteLocalStorage,
    saveLocalStorage, deleteItemLocalStorage } = useLocalStorage();
  const itens: CartType[] = readLocalStorage('cartProducts');
  console.log(itens);
  // if (itens.length > 0) setIsthereProduct(true);

  // const handleQuantityMore = () => {
  //   setQuantityProduct((prev) => quantityProduct - 1);
  // };

  // const handleQuantityLess = () => {
  //   setQuantityProduct((prev) => quantityProduct + 1);
  // };
  const handleQuantityMore = (id) => {
    const getProduct = cart.find((product) => product.id === id);
    setQuantityProduct((prev) => prev - 1);
  };

  const handleQuantityLess = () => {
    setQuantityProduct((prev) => prev + 1);
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    deleteItemLocalStorage('cartProducts', id);
    // const newItensList = itens.filter((item) => item.id !== id);
    // deleteLocalStorage('cartProducts');
    // saveLocalStorage('cartProducts', newItensList);
  };
  return (
    <>
      {
        itens.length === 0 && (
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        )
      }

      <section>
        <label htmlFor="voltar">
          <button>
            <img
              src="src/utils/goBack.png"
              alt="voltar"
              style={
                { width: 10 }
              }
            />
          </button>
          { ' ' }
          Voltar
        </label>
        <h2>Carrinho de Compras</h2>
        { itens.map((item) => (
          <div key={ item.id }>
            <h4 data-testid="shopping-cart-product-name">
              {item.title}

            </h4>
            <p data-testid="shopping-cart-product-quantity">
              { item.quantity }
            </p>
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
              onClick={ () => handleQuantityMore(item.id) }
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
    </>
  );
}
export default Carrinho;
