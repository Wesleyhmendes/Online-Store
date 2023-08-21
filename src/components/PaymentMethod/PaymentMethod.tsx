type PaymentMethodProps = {
  selectedOption: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function PaymentMethod({ selectedOption, handleChange }: PaymentMethodProps) {
  return (
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
  );
}
export default PaymentMethod;
