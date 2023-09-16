import './paymentmethod.modules.css';

type PaymentMethodProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  payment: string;
};

function PaymentMethod({ handleChange, payment }: PaymentMethodProps) {
  return (
    <section className="paymentMainSection">
      <h3>
        Método de pagamento:
      </h3>
      <div className="methodsDiv">
        <div>
          <label className="label-container" htmlFor="Boleto">
            <input
              onChange={ (event) => handleChange(event) }
              data-testid="ticket-payment"
              type="radio"
              id="Boleto"
              value="Boleto"
              checked={ payment === 'Boleto' }
            />
            <img src="src/assets/boleto.svg" alt="boleto" />
          </label>
        </div>
        <div>
          <label className="label-container" htmlFor="Visa">
            <input
              onChange={ (event) => handleChange(event) }
              data-testid="visa-payment"
              type="radio"
              id="Visa"
              value="Visa"
              checked={ payment === 'Visa' }
            />
            <img src="src/assets/visa.svg" alt="visa" />
          </label>
        </div>
        <div>
          <label className="label-container" htmlFor="MasterCard">
            <input
              onChange={ (event) => handleChange(event) }
              data-testid="master-payment"
              type="radio"
              id="MasterCard"
              value="MasterCard"
              checked={ payment === 'MasterCard' }
            />
            <img src="src/assets/masterCard.svg" alt="MasterCard" />
          </label>
        </div>
        <div>
          <label className="label-container" htmlFor="Elo">
            <input
              onChange={ (event) => handleChange(event) }
              data-testid="elo-payment"
              type="radio"
              id="Elo"
              value="Elo"
              checked={ payment === 'Elo' }
            />
            <img src="src/assets/elo.svg" alt="Elo" />
          </label>
        </div>
      </div>
    </section>
  );
}
export default PaymentMethod;
