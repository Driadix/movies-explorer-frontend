import React from 'react';
import logo from '../../images/logo.svg'
import Container from '../Container';
import './styles.scss'

const Header = () => {
  return (
    <Container>
    <header className="header">
      <img src={logo} alt="Site logo" className="header__logo" />
      <div className="header__content">
        {true && 
        (<>
        <button className="header__register-button">Регистрация</button>
        <button className="header__login-button">Войти</button>
        </>
        )
        }
      </div>
    </header>
    </Container>
  )
}

export default Header
