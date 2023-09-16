import { useNavigate, useParams } from 'react-router-dom';
import { CartType } from '../../types/types';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import ReviewForm from '../EvaluateForm/EvaluateForm';
import './productDeatils.modules.css';
import goBack from '../../assets/backIcon.svg';

interface DetailsProps {
  products: CartType[];
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
}

function ProductDetails({ products, cart, setCart }: DetailsProps) {
  const { idProduct } = useParams<{ idProduct: string; }>();
  const navigate = useNavigate();

  const searchedProduct = products
    .find((product) => product.id === idProduct);

  if (!searchedProduct) {
    return <h3>Produto não encontrado</h3>;
  }

  const {
    title, price, thumbnail, condition, quantity, totalPrice,
  } = searchedProduct;
  const modifiedThumbnail = `${thumbnail.slice(0, -5)}W${thumbnail.slice(-4)}`;

  const handleGetBack = () => {
    navigate('/');
  };

  return (
    <section>
      <div className="backClass">
        <button className="backButton" onClick={ handleGetBack }>
          <img className="backIcon" src={ goBack } alt="voltar" />
        </button>
        <p className="voltar">Voltar</p>
      </div>
      <div data-testid="product" className="deatilProductCard">
        <img
          className="deatilImg"
          data-testid="product-detail-image"
          src={ modifiedThumbnail }
          alt={ title }
        />
        <div className="detailTitleNprice">
          <h4
            className="detailProductName"
            data-testid="product-detail-name"
          >
            { title }
          </h4>
          <ul className="productDetailDescription">
            <li>{ condition === 'new' ? 'Novo' : condition }</li>
            <li>
              { `Vendidos: ${searchedProduct.sold_quantity}` }
            </li>
            <li>
              { `Estoque: ${quantity === undefined ? 150 : quantity}` }
            </li>
          </ul>
          <p className="detailProductPrice" data-testid="product-detail-price">
            <span className="cifrão">R$ </span>
            { (price.toFixed(2)) }
          </p>
          <p className="parcelamento">Até 12x sem juros</p>
          <AddToCartButton
            cart={ cart }
            setCart={ setCart }
            product={ searchedProduct }
            testId="product-detail-add-to-cart"
          />
        </div>
      </div>
      <ReviewForm />
    </section>
  );
}

export default ProductDetails;
