/* eslint-disable react/jsx-max-depth */
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import useLocalStorage from '../../hooks/useLocalStorage';
import './evaluateForm.modules.css';
import Footer from '../Footer/Footer';

type EvaluationType = {
  email: string;
  text: string;
  rating: number;
};

function EvaluateForm() {
  const { idProduct } = useParams();
  const { saveLocalStorage, readLocalStorage } = useLocalStorage();

  const storedInfo = readLocalStorage(idProduct as string);
  const [evaluation, setEvaluation] = useState<EvaluationType>({
    email: '',
    text: '',
    rating: 0,
  });
  const [storage, setStorage] = useState<EvaluationType[]>(storedInfo || []);
  const [isInvalid, setIsInvalid] = useState(false); // Estado para controlar a exibição da mensagem

  useEffect(() => {
    localStorage.setItem(idProduct as string, JSON.stringify(storage));
  }, [storage, idProduct]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement
    | HTMLTextAreaElement> | SyntheticEvent<Element, Event>,
  ) => {
    const { value, name } = event.target as HTMLInputElement;
    setEvaluation((prevInfo) => ({
      ...prevInfo,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Valide os campos e atualize o estado 'isInvalid' conforme necessário
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const validation1 = evaluation.rating > 0;
    const validation2 = regexEmail.test(evaluation.email);
    const validation3 = evaluation.text.length > 0;
    const isValid = validation1 && validation2 && validation3;

    if (!isValid) {
      setIsInvalid(true);
      return; // Não prossiga se os campos forem inválidos
    }

    setIsInvalid(false); // Se os campos forem válidos, limpe a mensagem de erro

    setStorage([...storage, evaluation]);
    saveLocalStorage(idProduct as string, storage);
    setEvaluation({
      email: '',
      text: '',
      rating: 0,
    });
  };
  return (
    <>
      <section className="mainReviewSection">
        <h1 className="avaliações"> Avaliações </h1>
        { isInvalid && <h3 className="invalidReview">Campos inválidos</h3> }
        <form onSubmit={ (event) => handleSubmit(event) }>
          <div className="emailNStars">
            <label htmlFor="email">
              <input
                placeholder=" Email"
                className="emailInput"
                id="email"
                type="text"
                data-testid="product-detail-email"
                name="email"
                value={ evaluation.email }
                onChange={ (event) => handleChange(event) }
              />
            </label>
            <Rating
              className="starsReviewInput"
              name="rating"
              size="large"
              value={ evaluation.rating }
              onChange={ (event) => handleChange(event) }
            />
          </div>
          <div className="textAreaNBtn">
            <label htmlFor="text">
              <textarea
                placeholder=" Comentário (opcional)"
                className="reviewTextArea"
                id="text"
                data-testid="product-detail-evaluation"
                cols={ 50 }
                rows={ 2 }
                name="text"
                value={ evaluation.text }
                onChange={ (event) => handleChange(event) }
              />
            </label>
            <Button className="submitReview" testId="submit-review-btn">Avaliar</Button>
          </div>
        </form>
      </section>
      { storage.map((item, index) => (
        <div className="userReviewsMainDiv" key={ index }>
          <div className="reviewsStarsAndEmail">
            <p data-testid="review-card-email" className="reviewEmail">
              { item.email }
            </p>
            <Rating data-testid="review-card-rating" value={ item.rating } readOnly />
          </div>
          <p className="reviewUserText">{ item.text }</p>
        </div>
      )) }
    </>
  );
}

export default EvaluateForm;
