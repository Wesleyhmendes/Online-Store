import { useParams } from 'react-router-dom';
import { ProductType } from '../../types/types';

interface DetailsProps {
  products: ProductType[];
}

function ProductDetails({ products }: DetailsProps) {
  const { id } = useParams<{ id: string }>();
  const searchedProduct = products.find((product) => product.id === id);

  if (!searchedProduct) {
    return <h3>Produto não encontrado</h3>;
  }

  const { title, price, thumbnail } = searchedProduct;
  const modifiedThumbnail = `${thumbnail.slice(0, -5)}W${thumbnail.slice(-4)}`;

  return (
    <div>
      <img
        data-testid="product-detail-image"
        src={ modifiedThumbnail }
        alt={ title }
      />
      <h4 data-testid="product-detail-name">{ title }</h4>
      <p data-testid="product-detail-price">{ price }</p>
    </div>
  );
}

export default ProductDetails;
