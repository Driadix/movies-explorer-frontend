import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import './styles.scss'

const HeaderList = ({ isBurger, setIsBurger }) => {
  const navigate = useNavigate();

  return (
    <ul className={`header__list${isBurger ? ' header__list_burger' : ''}`}>
      <div className={`header__movies-links${isBurger ? ' header__movies-links_burger' : ''}`}>
        <li className="header__item header__item_burger"><Link to='/' onClick={() => setIsBurger(false)} className="header__main-button">Главная</Link></li>
        <li className="header__item"><NavLink to='/movies' onClick={() => setIsBurger(false)} className={({isActive}) => (isActive ? "header__movies-button_active" : "header__movies-button")}>Фильмы</NavLink></li>
        <li className="header__item"><NavLink to='/saved-movies' onClick={() => setIsBurger(false)} className={({isActive}) => (isActive ? "header__movies-button_active" : "header__movies-button")}>Сохранённые фильмы</NavLink></li>
      </div>
      <li onClick={() => { navigate('/profile'); setIsBurger(false) }} className="header__item header__item_account">
        <button className="header__profile-button">Аккаунт</button>
        <div className="header__profile-icon" />
      </li>
    </ul>
  )
}

export default HeaderList
