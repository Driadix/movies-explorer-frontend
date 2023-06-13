import React from 'react'
import profilePicture from '../../images/photo.jpeg'
import './styles.scss'

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info-box">
        <div className="about-me__info-text-area">
            <h3 className="about-me__info-title">Кирилл</h3>
            <p className="about-me__info-subtitle">Фронтенд-разработчик, 24 года</p>
            <p className="about-me__info-text">Я родился и живу в Великих Луках.
              Закончил колледж по направлению программирование в компьютерных системах.
              В данный момент обучаюсь на втором курсе профильного университета. Работаю системным администратором.
              Стремлюсь перейти в сферу веб-разработки.</p>
          </div>
          <a href="https://github.com/Driadix" target='blank' className="about-me__info-link">Github</a>
        </div>
        <img src={profilePicture} alt="my image" className="about-me__image" />
      </div>
    </section>
  )
}

export default AboutMe
