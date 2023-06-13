import React from 'react'
import profilePicture from '../../images/photo.png'
import './styles.scss'

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info-box">
        <div className="about-me__info-text-area">
            <h3 className="about-me__info-title">Виталий</h3>
            <p className="about-me__info-subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__info-text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
             Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
             После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <a href="https://github.com/Driadix" target='blank' className="about-me__info-link">Github</a>
        </div>
        <img src={profilePicture} alt="my image" className="about-me__image" />
      </div>
    </section>
  )
}

export default AboutMe
