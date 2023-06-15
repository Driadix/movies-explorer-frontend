import React from 'react'
import './styles.scss'

const AuthInput = ({text, type}) => {
  return (
    <div className="auth-input">
    <label htmlFor={type} className="auth-input__label">{text}</label>
    <input id={type} name={type} type={type} className="auth-input__field" placeholder={`Введите ${text}`} required/>
    <span className="auth-input__error"></span>
    </div>
  )
}

export default AuthInput
