import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg'
import Container from '../Container';
import ProfilePicture from '../../images/profile-icon.svg'
import './styles.scss'

const Header = ({isIntroPage = false}) => {
  const navigate = useNavigate();

  return (
    
    <header className={`header ${isIntroPage && 'header_theme_gray'}`}>
      <Container>
      <div className="header__flex-container">
      <img src={logo} alt="Site logo" className="header__logo" />
      <nav className="header__content">
        {isIntroPage ?
          (
          <ul className="header__list">
            <li className="header__item"><Link to='signup' className="header__register-button">Регистрация</Link></li>
            <li className="header__item"><Link to='signin' className="header__login-button">Войти</Link></li>
          </ul>
          ):(
          <ul className="header__list">
            <div className="header__movies-links">
              <li className="header__item"><Link to='movies' className="header__movies-button">Фильмы</Link></li>
              <li className="header__item"><Link to='saved-movies' className="header__saved-movies-button">Сохранённые фильмы</Link></li>
            </div>
              <li onClick={() => navigate('/profile')} className="header__item header__item_account">
                <a href="#" className="header__profile-button">Аккаунт</a>
                <img src={ProfilePicture} alt="profile icon" className="header__profile-icon" />
              </li>
          </ul>
          )
        }
        </nav>
      </div>
      </Container>
    </header>
  )
}

export default Header
