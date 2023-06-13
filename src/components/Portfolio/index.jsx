import React from 'react'
import './styles.scss'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="portfolio__item-name">Статичный сайт</p>
          <a href="https://github.com/Driadix/how-to-learn" target="_blank" className="portfolio__item-link"></a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__item-name">Адаптивный сайт</p>
          <a href="https://github.com/Driadix/russian-travel" target="_blank" className="portfolio__item-link"></a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__item-name">Одностраничное приложение</p>
          <a href="https://github.com/Driadix/react-mesto-api-full-gha" target="_blank" className="portfolio__item-link"></a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
