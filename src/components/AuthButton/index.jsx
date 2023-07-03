import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const AuthButton = ({ buttonName, text, actionLink, errors, isSubmitting, submitError, isRegister = false }) => {
  const navigate = useNavigate()

  return (
    <div className="auth-button">
      <button
        className="auth-button__submit"
        type='submit'
        disabled={(errors.text || errors.email || isSubmitting) ? true : false}
        form={`${isRegister ? 'register-form' : 'login-form'}`}
      >{isSubmitting ? 'Сохранение...' : buttonName}
      </button>
      <span className="auth-button__error">{submitError}</span>
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
