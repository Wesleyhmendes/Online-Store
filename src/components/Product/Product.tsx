type ProductProps = {
  key: string;
  thumbnail: string;
  title: string;
  price: number;
};

function Product({ key, thumbnail, title, price }: ProductProps) {
  return (
    <div data-testid="product" key={ key } className="productCard">
      <img src={ thumbnail } alt={ title } />
      <h4>{ title }</h4>
      <p>{ price }</p>
    </div>
  );
}
export default Product;
