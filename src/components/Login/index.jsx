import React from 'react'
import AuthContainer from '../AuthContainer'
import AuthHeader from '../AuthHeader'
import AuthBody from '../AuthBody'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'

const Login = () => {
  return (
    <AuthContainer>
      <AuthHeader title='Рады видеть!'/>
      <AuthBody>
        <AuthInput text="Email" type="email"/>
        <AuthInput text="Пароль" type="password"/>
      </AuthBody>
      <AuthButton buttonName='Войти' text='Ещё не зарегистрированы?' actionLink='Регистрация'/>
    </AuthContainer>
  )
}

export default Login
