import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles.scss'

const HeaderList = ({isBurger}) => {
  const navigate = useNavigate();

  return (
    <ul className={`header__list${isBurger ? ' header__list_burger' : ''}`}>
      <div className={`header__movies-links${isBurger ? ' header__movies-links_burger' : ''}`}>
        <li className="header__item header__item_burger"><Link to='/' className="header__main-button">Главная</Link></li>
        <li className="header__item"><Link to='/movies' className="header__movies-button">Фильмы</Link></li>
        <li className="header__item"><Link to='/saved-movies' className="header__saved-movies-button">Сохранённые фильмы</Link></li>
      </div>
      <li onClick={() => navigate('/profile')} className="header__item header__item_account">
        <button className="header__profile-button">Аккаунт</button>
        <div className="header__profile-icon" />
      </li>
    </ul>
  )
}

export default HeaderList
