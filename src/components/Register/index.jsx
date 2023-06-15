import React from 'react'
import AuthContainer from '../AuthContainer'
import AuthHeader from '../AuthHeader'
import AuthBody from '../AuthBody'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'

const Register = () => {
  return (
    <AuthContainer>
      <AuthHeader title='Добро пожаловать!'/>
      <AuthBody isRegister={true}>
        <AuthInput text="Имя" type="text"/>
        <AuthInput text="Email" type="email"/>
        <AuthInput text="Пароль" type="password"/>
      </AuthBody>
      <AuthButton buttonName='Зарегистрироваться' text='Уже зарегистрированы?' actionLink='Войти' isRegister={true}/>
    </AuthContainer>
  )
}

export default Register
