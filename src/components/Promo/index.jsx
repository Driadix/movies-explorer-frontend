import React from 'react'
import logo from '../../images/landing-logo-min.svg'
import Container from '../Container'
import './styles.scss'

const Promo = () => {
  return (
    <section className="promo">
      <Container>
        <div className="promo__container">
          <div className="promo__text-container">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <img src={logo} alt="intro logo" className="promo__logo" />
        </div>
        <a href='#about-project' className="promo__about-button">Узнать больше</a>
      </Container>
    </section>
  )
}

export default Promo
