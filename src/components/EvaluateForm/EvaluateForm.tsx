import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import useLocalStorage from '../../hooks/useLocalStorage';
import star1 from '../../assets/1-stars.png';
import star2 from '../../assets/2-stars.png';
import star3 from '../../assets/3-stars.png';
import star4 from '../../assets/4-stars.png';
import star5 from '../../assets/5-stars.png';

function ReviewForm() {
  const { saveLocalStorage, readLocalStorage } = useLocalStorage();
  const { idProduct } = useParams();

  const [email, setEmail] = useState('');
  const [renderError, setRenderError] = useState(false);
  const [isThereReview, setIsThereReview] = useState(false);
  const [starsQuantity, setStarsQuantity] = useState(1);
  const [storage, setStorage] = useState<object[]>(
    readLocalStorage(idProduct as string) || [],
  );
  const [keepReviewInfo, setKeepReviewInfo] = useState({
    email,
    textArea: '',
  });

  const [checkClickStar, setCheckClickStar] = useState(false);
  const [stars1, setStars1] = useState(false);
  const [stars2, setStars2] = useState(false);
  const [stars3, setStars3] = useState(false);
  const [stars4, setStars4] = useState(false);
  const [stars5, setStars5] = useState(false);

  let selectStar;

  const handleQuantity = () => {
    switch (starsQuantity) {
      case 1:
        selectStar = star1;
        return selectStar;
        break;
      case 2:
        selectStar = star2;
        return selectStar;
        break;
      case 3:
        selectStar = star3;
        return selectStar;
        break;
      case 4:
        selectStar = star4;
        return selectStar;
        break;
      case 5:
        selectStar = star5;
        return selectStar;
        break;
      default:
        break;
    }
  };

  const updateStars = (quantity: number) => {
    setStars1(quantity >= 1);
    setStars2(quantity >= 2);
    setStars3(quantity >= 3);
    setStars4(quantity >= 4);
    setStars5(quantity === 5);
  };

  const handleStar = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    switch (value) {
      case 'star1':
        setStars1(!stars1);
        setStarsQuantity(1);
        setCheckClickStar(true);
        updateStars(1);
        break;
      case 'star2':
        setStars2(!stars2);
        setStarsQuantity(2);
        setCheckClickStar(true);
        updateStars(2);
        break;
      case 'star3':
        setStars3(!stars3);
        setStarsQuantity(3);
        setCheckClickStar(true);
        updateStars(3);
        break;
      case 'star4':
        setStars4(!stars4);
        setStarsQuantity(4);
        setCheckClickStar(true);
        updateStars(4);
        break;
      case 'star5':
        setStars5(!stars5);
        setStarsQuantity(5);
        setCheckClickStar(true);
        updateStars(5);
        break;
      default:
        break;
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    const { value, name } = event.target;
    setKeepReviewInfo(
      (prevInfo) => (
        {
          ...prevInfo,
          [name]: value,
        }
      ),
    );
    if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    if (regexEmail.test(email) && checkClickStar) {
      setIsThereReview(true);
      setRenderError(false);
      saveLocalStorage((idProduct as string), keepReviewInfo);
      setStorage([...storage, keepReviewInfo]);
      setKeepReviewInfo({
        email: '',
        textArea: '',
      });
    } else {
      setRenderError(true);
    }
  };

  return (
    <>
      <form>
        <legend>Avaliações</legend>
        <label htmlFor="email">
          Email
          <input
            name="email"
            onChange={ (event) => handleChange(event) }
            value={ keepReviewInfo.email }
            placeholder="Email"
            data-testid="product-detail-email"
            type="text"
          />
        </label>
        <button
          value="star1"
          name="rating"
          onClick={ (event) => handleStar(event) }
          data-testid="1-rating"
        >
          { stars1 ? <AiFillStar /> : <AiOutlineStar /> }
        </button>
        <button
          value="star2"
          name="rating"
          onClick={ (event) => handleStar(event) }
          data-testid="2-rating"
        >
          { stars2 ? <AiFillStar /> : <AiOutlineStar /> }
        </button>

        <button
          value="star3"
          name="rating"
          onClick={ (event) => handleStar(event) }
          data-testid="3-rating"
        >
          { stars3 ? <AiFillStar /> : <AiOutlineStar /> }
        </button>

        <button
          value="star4"
          name="rating"
          onClick={ (event) => handleStar(event) }
          data-testid="4-rating"
        >
          { stars4 ? <AiFillStar /> : <AiOutlineStar /> }
        </button>

        <button
          value="star5"
          name="rating"
          onClick={ (event) => handleStar(event) }
          data-testid="5-rating"
        >
          { stars5 ? <AiFillStar /> : <AiOutlineStar /> }
        </button>
        <label htmlFor="detailReview">
          Avaliação
          <textarea
            name="textArea"
            onChange={ (event) => handleChange(event) }
            placeholder="Mensagem (opcional)"
            data-testid="product-detail-evaluation"
            value={ keepReviewInfo.textArea }
          />
        </label>
        <button
          onClick={ (event) => handleSubmit(event) }
          data-testid="submit-review-btn"
          type="button"
        >
          Avaliar
        </button>
      </form>
      { renderError && (
        <h3>Campos inválidos</h3>
      ) }
      { (isThereReview && !renderError) && (
        <>
          <h3>Avaliações:</h3>
          <section>
            { [storage].map((review: any, index: any) => (
              <div key={ index }>
                <p data-testid="review-card-email">{ review.email }</p>
                <img
                  data-testid="review-card-rating"
                  src={ handleQuantity() }
                  alt="stars"
                />
                <p data-testid="review-card-evaluation">{ keepReviewInfo.textArea }</p>
              </div>
            )) }
          </section>
        </>
      ) }
    </>
  );
}
export default ReviewForm;
