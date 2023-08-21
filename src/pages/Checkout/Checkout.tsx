import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartType } from '../../types/types';
import CartContainer from '../../components/CartContainer/CartContainer';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';

type CheckoutProps = {
  cart: CartType[];
};

function Checkout({ cart }: CheckoutProps) {
  const [selectedOption, setSelectedOption] = useState('');
  const [validateForm, setValidateForm] = useState(false);
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
    setSelectedOption(value);
    setKeepInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
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
    ) {
      navigate('/');
      // Remover os produtos do local Storage
    } else {
      setValidateForm(true);
    }
  };

  return (
    <>
      <CartContainer cart={ cart } />
      <section>
        <form onSubmit={ (event) => handleSubmit(event) }>
          <label data-testid="checkout-fullname" htmlFor="name">
            Nome completo:
            <input
              onChange={ (event) => handleChange(event) }
              name="name"
              id="name"
              type="text"
            />
          </label>
          <label data-testid="checkout-email" htmlFor="email">
            E-mail:
            <input
              onChange={ (event) => handleChange(event) }
              name="email"
              id="email"
              data-testid="checkout-cpf"
              type="text"
            />
          </label>
          <label data-testid="checkout-cpf" htmlFor="cpf">
            CPF:
            <input
              onChange={ (event) => handleChange(event) }
              name="cpf"
              id="cpf"
              data-testid="checkout-cep"
              type="text"
            />
          </label>
          <label data-testid="checkout-phone" htmlFor="telefone">
            Telefone:
            <input
              onChange={ (event) => handleChange(event) }
              name="telefone"
              id="telefone"
              type="text"
            />
          </label>
          <label data-testid="checkout-cep" htmlFor="cep">
            CEP:
            <input
              onChange={ (event) => handleChange(event) }
              name="cep"
              id="cep"
              type="text"
            />
          </label>
          <label data-testid="checkout-address" htmlFor="address">
            Endereço:
            <input
              onChange={ (event) => handleChange(event) }
              name="address"
              id="address"
              type="text"
            />
          </label>
          <PaymentMethod
            selectedOption={ selectedOption }
            handleChange={ handleChange }
          />
          <button data-testid="checkout-btn">Finalizar Compra</button>
        </form>
        { validateForm && (
          <h2>Campos inválidos</h2>
        ) }
      </section>
    </>
  );
}

export default Checkout;
