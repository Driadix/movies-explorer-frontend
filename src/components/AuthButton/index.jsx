import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const AuthButton = ({buttonName, text, actionLink, isRegister=false}) => {
  const navigate = useNavigate()

  return (
    <div className="auth-button">
      <button 
        className="auth-button__submit"
        type='submit'
        form={`${isRegister ? 'register-form' : 'login-form'}`}
        >{buttonName}
      </button>
      <p className="auth-button__text">{text}
        <span 
        onClick={() => navigate(`${isRegister ? '/signin' : '/signup'}`)} 
        className="auth-button__action-link">{actionLink}
        </span>
      </p>
    </div>
  )
}

export default AuthButton
