import React from 'react'
import logo from '../../images/landing-logo.svg'
import Container from '../Container';
import './styles.scss';

const Intro = () => {
  return (
    
    <section className="intro">
      
      <div className="greet">
      <Container>
        <div className="greet__container">
        <div className="greet__text-container">
          <h1 className="greet__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="greet__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img src={logo} alt="intro logo" className="greet__logo" />
        </div>
        <button className="greet__about-button">Узнать больше</button>
        </Container>
      </div>

      <div className="intro__about">
        <h2 className="intro__subtitle">О проекте</h2>

      </div>

      <div className="intro__techs">

      </div>

      <div className="intro__student">

      </div>
      
    </section>
   
  )
}

export default Intro
