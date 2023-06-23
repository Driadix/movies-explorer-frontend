import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo-min.svg'
import Container from '../Container';
import HeaderList from './HeaderList';
import './styles.scss'

const Header = ({isIntroPage = false}) => {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);
  
  const handleResize = () => {
    if (window.innerWidth > 769) {
      setIsBurgerOpened(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const navigate = useNavigate();

  return (
    
    <header className={`header${isIntroPage ? ' header_theme_gray' : ''}`}>
      <Container>
      <div className={`header__flex-container${isBurgerOpened ? ' header__flex-container-burger' : ''}`}>
      <img onClick={() => navigate('/')} src={logo} alt="Site logo" className="header__logo" />
      <nav className="header__content">
        {isIntroPage ?
          (
          <ul className="header__list-intro">
            <li className="header__item"><Link to='/signup' className="header__register-button">Регистрация</Link></li>
            <li className="header__item"><Link to='/signin' className="header__login-button">Войти</Link></li>
          </ul>
          ):(
            <>
              <button
              onClick={() => setIsBurgerOpened(true)}
              className={`header__burger-btn-open${isBurgerOpened ? ' header__burger-btn-open_non-visible' : ''}`}>
              </button>
              <div className={`header__burger${isBurgerOpened ? ' header__burger_opened' : ''}`}>
                <button
                onClick={() => setIsBurgerOpened(false)}
                className={`header__burger-btn-close${isBurgerOpened ? ' header__burger-btn-close_visible' : ''}`}>
                </button>
                <HeaderList isBurger={isBurgerOpened} setIsBurger={setIsBurgerOpened}/>
              </div>
              </>
          )
        }
        </nav>
      </div>
      </Container>
    </header>
  )
}

export default Header
