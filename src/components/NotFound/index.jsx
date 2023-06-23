import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '../Container';
import './styles.scss'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button onClick={() => navigate(-1)} className="not-found__button">Назад</button>
    </div>
    </Container>
  )
}

export default NotFound
