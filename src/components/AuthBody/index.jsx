import React from 'react'
import './styles.scss'

const AuthBody = ({ isRegister = false, handleSubmit, isSubmitting, children }) => {
  return (
    <form
    id={`${isRegister ? 'register-form' : 'login-form'}`}
    onSubmit={handleSubmit}
    action="#"
    className="auth-form">
      {children}
    </form>
  )
}

export default AuthBody
