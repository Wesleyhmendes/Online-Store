type ProductProps = {
  thumbnail: string;
  title: string;
  price: number;
};

function Product({ thumbnail, title, price }: ProductProps) {
  return (
    <div data-testid="product" className="productCard">
      <img src={ thumbnail } alt={ title } />
      <h4>{ title }</h4>
      <p>{ price }</p>
    </div>
  );
}
export default Product;
