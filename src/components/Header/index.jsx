import React from 'react';
import logo from '../../images/logo.svg'
import Container from '../Container';
import './styles.scss'

const Header = ({isIntroPage = false}) => {
  return (
    
    <header className={`header ${isIntroPage && 'header_theme_gray'}`}>
      <Container>
      <div className="header__flex-container">
      <img src={logo} alt="Site logo" className="header__logo" />
      <div className="header__content">
        {isIntroPage && 
          (<>
          <button className="header__register-button">Регистрация</button>
          <button className="header__login-button">Войти</button>
          </>
          )
        }
        </div>
      </div>
      </Container>
    </header>
  )
}

export default Header
