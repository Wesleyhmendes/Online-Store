import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CartType } from '../../types/types';
import Button from '../../components/Button/Button';
import goBack from '../../assets/backIcon.svg';
import './cart.modules.css';
import increase from '../../assets/increaseIcon.svg';
import decrease from '../../assets/decreaseIcon.svg';
import elipse from '../../assets/Ellipse.svg';
import RemoveButton from './RemoveButton';
import emptyBag from '../../assets/emptyBag.png';

type CartProps = {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
};

function Cart({ cart, setCart }: CartProps) {
  const { saveLocalStorage } = useLocalStorage();
  const handleQuantityMore = (item: CartType) => {
    const updatedCart = cart.map((product) => (
      product.id === item.id ? {
        ...product,
        quantity: product.quantity + 1,
      } : product));
    setCart(updatedCart);
    saveLocalStorage('cartProducts', updatedCart);
  };

  const handleQuantityLess = (item: CartType) => {
    const updatedCart = cart.map((product) => (
      product.id === item.id ? {
        ...product,
        quantity: product.quantity === 1 ? 1 : product.quantity - 1,
      } : product
    ));
    setCart(updatedCart);
    saveLocalStorage('cartProducts', updatedCart);
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    saveLocalStorage('cartProducts', updatedCart);
  };

  const calculateTotalPrice = (cartProduct: CartType[]) => {
    return cartProduct.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const total = calculateTotalPrice(cart);

  const navigate = useNavigate();
  const handleGetBack = () => {
    navigate('/');
  };

  return (
    <>
      <div className="backClass">
        <button className="backButton" onClick={ handleGetBack }>
          <img className="backIcon" src={ goBack } alt="voltar" />
        </button>
        <p className="voltar">Voltar</p>
      </div>
      <section className="cartMainSection">
        <section className="cartProductSection">
          <div className="cartTitleDiv">
            <h2 className="cartTitle">Carrinho de Compras</h2>
            {
              !cart.length && (
                <div className="emptyMessageImg">
                  <p
                    className="emptyCartMessage"
                    data-testid="shopping-cart-empty-message"
                  >
                    Monte um carrinho de compras!
                  </p>
                  <p
                    className="emptyCartMessage2"
                  >
                    Adicione produtos e tenha frete grátis.
                  </p>
                  <img
                    className="emptyBagImg"
                    src={ emptyBag }
                    alt="empty bag"
                  />
                </div>
              )
            }
          </div>
          { cart.map((item) => (
            <div className="cartProductDiv" key={ item.id }>
              <div className="removeProductDiv">
                <RemoveButton
                  itemId={ item.id }
                  onRemove={ (event: any) => handleRemove(event) }
                />
              </div>
              <div className="cartImgNamePriceDiv">
                <img className="cartImg" src={ item.thumbnail } alt={ item.title } />
                <h4
                  className="cartProductName"
                  data-testid="shopping-cart-product-name"
                >
                  { item.title.length > 50 ? `${item.title
                    .slice(0, 50)}...` : item.title }
                </h4>
                <div className="quantityDiv">
                  <button
                    className="cartDecreaseBtn"
                    data-testid="product-decrease-quantity"
                    onClick={ () => handleQuantityLess(item) }
                  >
                    <img className="decreaseImg" src={ decrease } alt="" />
                  </button>
                  <p
                    className="cartProductQntd"
                    data-testid="shopping-cart-product-quantity"
                  >
                    { item.quantity }
                    <img className="elipse" src={ elipse } alt="elipse" />
                  </p>
                  <button
                    className="cartIncreaseBtn"
                    data-testid="product-increase-quantity"
                    onClick={ () => handleQuantityMore(item) }
                  >
                    <img className="increaseImg" src={ increase } alt="" />
                  </button>
                </div>
                <p className="cartProductPrice">
                  R$
                  { ' ' }
                  { item.price.toFixed(2) }
                </p>
              </div>
            </div>
          )) }
        </section>
        <section className="cartFinishSection">
          <img className="finishSecLogo" src="src/assets/logo.png" alt="" />
          <h2 className="finishTitle">
            Valor total da compra:
          </h2>
          <h2>
            R$
            { ' ' }
            { total.toFixed(2) }
          </h2>
          <Link to="/checkout" data-testid="checkout-products">
            <Button
              disabled={ cart.length === 0 }
              className="finishPurchase"
            >
              Finalizar Compras
            </Button>
          </Link>
        </section>
      </section>
    </>
  );
}
export default Cart;
