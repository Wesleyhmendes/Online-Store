import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartType, KeepInfoType } from '../../types/types';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import useLocalStorage from '../../hooks/useLocalStorage';
import CheckoutProducts from './checkoutProducts';
import './checkout.modules.css';
import StateSelect from './states';

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
    complement: '',
    number: '',
    city: '',
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
    const {
      name, email, cpf, telefone, cep, address, payment, number, city,
    } = info;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return !!(
      name
      && regexEmail.test(email)
      && cpf
      && telefone
      && cep
      && address
      && payment
      && number
      && city
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
    <section className="checkoutMainSec">
      <CheckoutProducts cart={ cart } />
      <form
        className="checkoutMainForm"
        onSubmit={ (event) => handleSubmit(event) }
      >
        <h2 className="clientInfoTitle">Informações do comprador</h2>
        { validateForm && (
          <h3 className="invalidAddress" data-testid="error-msg">Campos inválidos</h3>
        ) }
        <div className="clientAdressDiv">
          <label htmlFor="name">
            <input
              className="clientInfoInput clientInfoName"
              placeholder=" Nome completo"
              data-testid="checkout-fullname"
              onChange={ (event) => handleChange(event) }
              name="name"
              id="name"
              type="text"
              value={ keepInfo.name }
            />
          </label>
          <label htmlFor="email">
            <input
              className="clientInfoInput clientInfoEmail"
              placeholder=" Email"
              data-testid="checkout-email"
              onChange={ (event) => handleChange(event) }
              name="email"
              id="email"
              type="text"
              value={ keepInfo.email }
            />
          </label>
          <label htmlFor="cpf">
            <input
              className="clientInfoInput clientInfoCPF"
              placeholder=" CPF"
              data-testid="checkout-cpf"
              onChange={ (event) => handleChange(event) }
              name="cpf"
              id="cpf"
              type="text"
              value={ keepInfo.cpf }
            />
          </label>
          <label htmlFor="telefone">
            <input
              className="clientInfoInput clientInfoPhone"
              placeholder=" Telefone"
              data-testid="checkout-phone"
              onChange={ (event) => handleChange(event) }
              name="telefone"
              id="telefone"
              type="text"
              value={ keepInfo.telefone }
            />
          </label>
          <label htmlFor="cep">
            <input
              className="clientInfoInput clientInfoCEP"
              placeholder=" CEP"
              data-testid="checkout-cep"
              onChange={ (event) => handleChange(event) }
              name="cep"
              id="cep"
              type="text"
              value={ keepInfo.cep }
            />
          </label>
          <label htmlFor="address">
            <input
              className="clientInfoInput clientInfoAddress"
              placeholder=" Endereço"
              data-testid="checkout-address"
              onChange={ (event) => handleChange(event) }
              name="address"
              id="address"
              type="text"
              value={ keepInfo.address }
            />
          </label>
          <label htmlFor="complement">
            <input
              className="clientInfoInput clientInfoComplement"
              placeholder=" Complemento (opcional)"
              data-testid="checkout-complement"
              onChange={ (event) => handleChange(event) }
              name="complement"
              id="complement"
              type="text"
              value={ keepInfo.complement }
            />
          </label>
          <label htmlFor="number">
            <input
              className="clientInfoInput clientInfoNumber"
              placeholder=" Número"
              data-testid="checkout-number"
              onChange={ (event) => handleChange(event) }
              name="number"
              id="number"
              type="text"
              value={ keepInfo.number }
            />
          </label>
          <label htmlFor="city">
            <input
              className="clientInfoInput clientInfoCity"
              placeholder=" Cidade"
              data-testid="checkout-city"
              onChange={ (event) => handleChange(event) }
              name="city"
              id="city"
              type="text"
              value={ keepInfo.city }
            />
          </label>
          <StateSelect />
        </div>
        <PaymentMethod
          handleChange={ handleChange }
          payment={ keepInfo.payment }
        />
        <div className="finishPurchaseDiv">
          <button
            className="finishPurchase"
            data-testid="checkout-btn"
          >
            Finalizar Compra
          </button>
        </div>
      </form>
    </section>
  );
}

export default Checkout;
