import React from 'react'
import './styles.scss'

const AboutProject = () => {
  return (
    <section className="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__container">
          <div className="about-project__info-area">
          <div className="about-project__info-box">
            <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__info-box">
            <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
          </div>
          <div className="about-project__schedule">
              <div className="about-project__schedule-time">
                <p className="about-project__schedule-time-text">1 неделя</p>
                <p className="about-project__schedule-time-subtext">Back-end</p>
              </div>
              <div className="about-project__schedule-time about-project__schedule-time_connected">
                <p className="about-project__schedule-time-text about-project__schedule-time-text_theme_gray">4 недели</p>
                <p className="about-project__schedule-time-subtext">Front-end</p>
              </div>
          </div>
        </div>
      </section>
  )
}

export default AboutProject
