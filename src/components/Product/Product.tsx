type ProductProps = {
  id?: string;
  thumbnail: string;
  title: string;
  price: number;
};

function Product({ thumbnail, title, price }: ProductProps) {
  return (
    <div data-testid="product" className="productCard">
      <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
      <h4 data-testid="product-detail-name">{ title }</h4>
      <p data-testid="product-detail-price">{ price }</p>
    </div>
  );
}
export default Product;
