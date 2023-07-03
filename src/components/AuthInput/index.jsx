import React from 'react'
import './styles.scss'

const AuthInput = ({ text, type, value, error, handleChange, min = 1, max = null }) => {

  return (
    <div className="auth-input">
      <label htmlFor={type} className="auth-input__label">{text}</label>
      <input
        id={type}
        name={type}
        type={type}
        minLength={min}
        maxLength={max}
        className="auth-input__field"
        placeholder={`Введите ${text}`}
        value={value || ''}
        onChange={handleChange}
        required />
      <span className="auth-input__error">{error}</span>
    </div>
  )
}

export default AuthInput
