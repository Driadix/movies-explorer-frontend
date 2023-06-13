import React from 'react'
import Container from '../Container';
import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <nav className="footer__links">
          <ul className="footer__links-list">
            <li className="footer__item">
              <a href="https://practicum.yandex.ru" target="_blank" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/Driadix" target="_blank" className="footer__link">Github</a>
            </li>
          </ul>
        </nav>
      </div>
      </Container>
    </footer>
  )
}

export default Footer
