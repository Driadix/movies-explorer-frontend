import React from 'react'
import './styles.scss'

const AuthBody = ({isRegister=false, children}) => {
  return (
    <form id={`${isRegister ? 'register-form' : 'login-form'}`} action="#" className="auth-form">
      {children}
    </form>
  )
}

export default AuthBody
