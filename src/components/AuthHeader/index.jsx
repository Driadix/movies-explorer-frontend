import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo-min.svg'
import './styles.scss'

const AuthHeader = ({title}) => {
  const navigate = useNavigate();

  return (
    <div className="auth-header">
      <img onClick={() => navigate('/')} src={logo} alt="Site logo" className="auth-header__logo" />
      <h2 className="auth-header__title">{title}</h2>
    </div>
  )
}

export default AuthHeader
