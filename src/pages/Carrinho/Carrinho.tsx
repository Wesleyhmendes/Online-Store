import Button from '../../components/Button/Button';

function Carrinho() {
  return (
    <div>
      <h1 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
        <p>teste</p>
      </h1>
      <Button
        testId="product-detail-add-to-cart"
        onClick={ addToTheCart }
      >
        Adicionar ao Carrinho
      </Button>
    </div>
  );
}
export default Carrinho;
