import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartType, KeepInfoType } from '../../types/types';
import CartContainer from '../../components/CartContainer/CartContainer';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import useLocalStorage from '../../hooks/useLocalStorage';

type CheckoutProps = {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
};

function Checkout({ cart, setCart }: CheckoutProps) {
  const { clearLocalStorage } = useLocalStorage();
  const [validateForm, setValidateForm] = useState(false);
  const [keepInfo, setKeepInfo] = useState<KeepInfoType>({
    name: '',
    email: '',
    cpf: '',
    telefone: '',
    cep: '',
    address: '',
    payment: '',
  });
  useEffect(() => {
    setValidateForm(false);
  }, []);

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setKeepInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
      payment: event.target.type === 'radio' ? value : '',
    }));
  };

  const handleValidate = (info: KeepInfoType) => {
    const { name, email, cpf, telefone, cep, address, payment } = info;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return !!(name
      && regexEmail.test(email)
      && cpf
      && telefone
      && cep
      && address
      && payment
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = handleValidate(keepInfo);

    if (isValid) {
      setValidateForm(false);
      clearLocalStorage('cartProducts');
      setCart([]);
      navigate('/');
    } else {
      setValidateForm(true);
    }
    setValidateForm(true);
  };

  return (
    <>
      <CartContainer cart={ cart } />
      <section>
        <form onSubmit={ (event) => handleSubmit(event) }>
          <label htmlFor="name">
            Nome completo:
            <input
              data-testid="checkout-fullname"
              onChange={ (event) => handleChange(event) }
              name="name"
              id="name"
              type="text"
              value={ keepInfo.name }
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="checkout-email"
              onChange={ (event) => handleChange(event) }
              name="email"
              id="email"
              type="text"
              value={ keepInfo.email }
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              data-testid="checkout-cpf"
              onChange={ (event) => handleChange(event) }
              name="cpf"
              id="cpf"
              type="text"
              value={ keepInfo.cpf }
            />
          </label>
          <label htmlFor="telefone">
            Telefone:
            <input
              data-testid="checkout-phone"
              onChange={ (event) => handleChange(event) }
              name="telefone"
              id="telefone"
              type="text"
              value={ keepInfo.telefone }
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              data-testid="checkout-cep"
              onChange={ (event) => handleChange(event) }
              name="cep"
              id="cep"
              type="text"
              value={ keepInfo.cep }
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              data-testid="checkout-address"
              onChange={ (event) => handleChange(event) }
              name="address"
              id="address"
              type="text"
              value={ keepInfo.address }
            />
          </label>
          <PaymentMethod
            handleChange={ handleChange }
            payment={ keepInfo.payment }
          />
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
