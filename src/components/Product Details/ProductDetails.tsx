import { useParams } from 'react-router-dom';
import { ProductType } from '../../types/types';
import Product from '../Product/Product';

interface DetailsProps {
  products: ProductType[];
}

function ProductDetails({ products }: DetailsProps) {
  const { idProduct } = useParams<{ idProduct: string }>();
  const searchedProduct = products.find((product) => product.id === idProduct);

  if (!searchedProduct) {
    return <h3>Produto não encontrado</h3>;
  }

  const { title, price, thumbnail, id } = searchedProduct;
  const modifiedThumbnail = `${thumbnail.slice(0, -5)}W${thumbnail.slice(-4)}`;

  return (
    <Product
      key={ id }
      id={ id }
      price={ price }
      thumbnail={ modifiedThumbnail }
      title={ title }
    />
  );
}

export default ProductDetails;
