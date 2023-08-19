import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useLocalStorage from '../../hooks/useLocalStorage';
import { CartProps, CartType } from '../../types/types';

function Checkout({ cart, setCart }: CartProps) {
  // const [selectedOption, setSelectedOption] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [validateForm, setValidateForm] = useState(false);
  // const { saveLocalStorage } = useLocalStorage();
  const [keepInfo, setKeepInfo] = useState({
    name: '',
    email: '',
    cpf: '',
    telefone: '',
    cep: '',
    endereço: '',
  });

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    // setSelectedOption(value);
    setKeepInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSelect = () => {
    setPaymentMethod(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      keepInfo.name
      && keepInfo.email
      && keepInfo.cpf
      && keepInfo.telefone
      && keepInfo.cep
      && keepInfo.endereço
      && paymentMethod
    ) {
      // Limpa o carrinho
      const updatedCart: CartType[] = [];
      setCart(updatedCart);
      localStorage.clear();

      // Leva de volta à página inicial
      navigate('/');
    }
    setValidateForm(true);
  };

  return (
    <>
      { cart.map((item) => (
        <div key={ item.id }>
          <div>
            <img src={ item.thumbnail } alt={ item.title } />
            <h4>{ item.title }</h4>
            <p>{ item.price }</p>
          </div>
          <p>
            { item.quantity }
          </p>
        </div>
      )) }
      <section>
        <form onSubmit={ (event) => handleSubmit(event) }>
          <label data-testid="checkout-fullname" htmlFor="">
            Nome completo:
            <input
              onChange={ (event) => handleChange(event) }
              name="name"
              id="name"
              type="text"
              required
            />
          </label>
          <label data-testid="checkout-email" htmlFor="">
            E-mail:
            <input
              onChange={ (event) => handleChange(event) }
              name="email"
              id="email"
              type="text"
              required
            />
          </label>
          <label data-testid="checkout-cpf" htmlFor="">
            CPF:
            <input
              onChange={ (event) => handleChange(event) }
              name="cpf"
              id="cpf"
              type="text"
              required
            />
          </label>
          <label data-testid="checkout-phone" htmlFor="">
            Telefone:
            <input
              onChange={ (event) => handleChange(event) }
              name="telefone"
              id="telefone"
              type="text"
              required
            />
          </label>
          <label data-testid="checkout-cep" htmlFor="cep">
            CEP:
            <input
              onChange={ (event) => handleChange(event) }
              name="cep"
              id="cep"
              type="text"
              required
            />
          </label>
          <label data-testid="checkout-address" htmlFor="Endereço">
            Endereço:
            <input
              onChange={ (event) => handleChange(event) }
              name="endereço"
              id="Endereço"
              type="text"
              required
            />
          </label>
          <input
            name="paymentMethod"
            onChange={ handleSelect }
            data-testid="ticket-payment"
            type="radio"
            id="Boleto"
            value="Boleto"
          />
          <label htmlFor="Boleto">Boleto</label>
          <input
            name="paymentMethod"
            onChange={ handleSelect }
            data-testid="visa-payment"
            type="radio"
            id="Visa"
            value="Visa"
          />
          <label htmlFor="Visa">Visa</label>
          <input
            name="paymentMethod"
            onChange={ handleSelect }
            data-testid="master-payment"
            type="radio"
            id="MasterCard"
            value="MasterCard"
          />
          <label htmlFor="MasterCard">MasterCard</label>
          <input
            name="paymentMethod"
            onChange={ handleSelect }
            data-testid="elo-payment"
            type="radio"
            id="Elo"
            value="Elo"
          />
          <label htmlFor="Elo">Elo</label>
          <button data-testid="checkout-btn">Finalizar Compra</button>
        </form>
        { validateForm && (
          <h2 data-testid="error-msg">Campos inválidos</h2>
        ) }
      </section>
    </>
  );
}

export default Checkout;
