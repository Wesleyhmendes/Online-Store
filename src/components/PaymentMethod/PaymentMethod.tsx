type PaymentMethodProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  payment: string;
};

function PaymentMethod({ handleChange, payment }: PaymentMethodProps) {
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
          checked={ payment === 'Boleto' }
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
          checked={ payment === 'Visa' }
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
          checked={ payment === 'MasterCard' }
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
          checked={ payment === 'Elo' }
        />
        <label htmlFor="Elo">Elo</label>
      </div>
    </fieldset>
  );
}
export default PaymentMethod;
