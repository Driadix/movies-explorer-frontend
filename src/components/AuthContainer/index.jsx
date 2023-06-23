import React from 'react'
import './styles.scss'

const AuthContainer = ({children}) => {
  return (
    <div className="auth-container">
      {children}
    </div>
  )
}

export default AuthContainer
