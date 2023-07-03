import React from 'react'
import Container from '../Container'
import './styles.scss'

const Techs = () => {
  return (
    <section className="techs">
      <Container >
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__container">
          <div className="techs__info-box">
            <h3 className="techs__info-title">7 технологий</h3>
            <p className="techs__info-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
          <ul className="techs__list">
            <li className="techs__item">
              <p className="techs__item-text">HTML</p>
            </li>
            <li className="techs__item">
              <p className="techs__item-text">CSS</p>
            </li>
            <li className="techs__item">
              <p className="techs__item-text">JS</p>
            </li>
            <li className="techs__item">
              <p className="techs__item-text">React</p>
            </li>
            <li className="techs__item">
              <p className="techs__item-text">Git</p>
            </li>
            <li className="techs__item">
              <p className="techs__item-text">Express.js</p>
            </li>
            <li className="techs__item">
              <p className="techs__item-text">mongoDB</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Techs
