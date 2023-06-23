import React from 'react'
import './styles.scss'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className="portfolio__title">Портфолио</h2>
      <nav portfolio__links>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/Driadix/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__item-link">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/Driadix/russian-travel" target="_blank" rel="noreferrer" className="portfolio__item-link">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/Driadix/react-mesto-api-full-gha" target="_blank" rel="noreferrer" className="portfolio__item-link">Одностраничное приложение</a>
        </li>
      </ul>
      </nav>
    </section>
  )
}

export default Portfolio
