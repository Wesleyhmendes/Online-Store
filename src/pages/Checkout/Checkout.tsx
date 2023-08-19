import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
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
    // Adicionar as informações do produto (pelo menos o nome).
    <section>
      <form onSubmit={ (event) => handleSubmit(event) }>
        <label data-testid="checkout-fullname" htmlFor="">
          Nome completo:
          <input
            onChange={ (event) => handleChange(event) }
            name="name"
            id="name"
            type="text"
          />
        </label>
        <label data-testid="checkout-email" htmlFor="">
          E-mail:
          <input
            onChange={ (event) => handleChange(event) }
            name="email"
            id="email"
            data-testid="checkout-cpf"
            type="text"
          />
        </label>
        <label data-testid="checkout-cpf" htmlFor="">
          CPF:
          <input
            onChange={ (event) => handleChange(event) }
            name="cpf"
            id="cpf"
            data-testid="checkout-cep"
            type="text"
          />
        </label>
        <label data-testid="checkout-phone" htmlFor="">
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
        <label data-testid="checkout-address" htmlFor="Endereço">
          Endereço:
          <input
            onChange={ (event) => handleChange(event) }
            name="endereço"
            id="Endereço"
            type="text"
          />
        </label>
        <fieldset>
          <legend>Método de pagamento:</legend>
          <div>
            <input
              onChange={ (event) => handleChange(event) }
              data-testid="ticket-payment"
              type="radio"
              id="Boleto"
              value="Boleto"
              checked={ selectedOption === 'Boleto' }
            />
            <label htmlFor="Boleto">Boleto</label>
          </div>
          <div>
            <input
              onChange={ (event) => handleChange(event) }
              data-testid="visa-payment"
              type="radio"
              id="Visa"
              value="Visa"
              checked={ selectedOption === 'Visa' }
            />
            <label htmlFor="Visa">Visa</label>
          </div>
          <div>
            <input
              onChange={ (event) => handleChange(event) }
              data-testid="master-payment"
              type="radio"
              id="MasterCard"
              value="MasterCard"
              checked={ selectedOption === 'MasterCard' }
            />
            <label htmlFor="MasterCard">MasterCard</label>
          </div>
          <div>
            <input
              onChange={ (event) => handleChange(event) }
              data-testid="elo-payment"
              type="radio"
              id="Elo"
              value="Elo"
              checked={ selectedOption === 'Elo' }
            />
            <label htmlFor="Elo">Elo</label>
          </div>
        </fieldset>
        <button data-testid="checkout-btn">Finalizar Compra</button>
      </form>
      { validateForm && (
        <h2>Campos inválidos</h2>
      ) }
    </section>
  );
}

export default Checkout;
