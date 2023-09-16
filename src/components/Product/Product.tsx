import './product.modules.css';

type ProductProps = {
  thumbnail: string;
  title: string;
  price: number;
};

function Product(
  { thumbnail, title, price }: ProductProps,
) {
  const modifiedThumbnail = `${thumbnail.slice(0, -5)}W${thumbnail.slice(-4)}`;
  const slicedTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title;
  return (
    <div data-testid="product" className="productCard">
      <img
        className="homeImg"
        data-testid="product-detail-image"
        src={ modifiedThumbnail }
        alt={ slicedTitle }
      />
      <h4
        className="productName"
        data-testid="product-detail-name"
      >
        { slicedTitle }
      </h4>
      <p className="productPrice" data-testid="product-detail-price">
        <span className="cifrão">R$ </span>
        { (price.toFixed(2)) }
      </p>
    </div>
  );
}
export default Product;
