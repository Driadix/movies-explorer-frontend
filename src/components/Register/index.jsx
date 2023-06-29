import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContainer from '../AuthContainer'
import AuthHeader from '../AuthHeader'
import AuthBody from '../AuthBody'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'
import { register } from '../../utils/MainApi';
import useForm from '../../hooks/useForm'

const Register = ({handleAuthorize}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState('')
  const {values, errors, handleChange } = useForm()
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    register(values.text, values.email, values.password)
    .then((res) => {
      
    })
    .catch(error => setSubmitError((error === 'Ошибка: 409') ? 'Данный email уже существует' : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
    .finally(() => setIsSubmitting(false))
  }

  return (
    <AuthContainer>
      <AuthHeader title='Добро пожаловать!'/>
      <AuthBody isRegister={true} handleSubmit={handleRegister}>
        <AuthInput text="Имя" type="text" value={values.text} error={errors.text} handleChange={handleChange} min={2} max={30}/>
        <AuthInput text="Email" type="email" value={values.email} error={errors.email} handleChange={handleChange}/>
        <AuthInput text="Пароль" type="password" value={values.password} error={errors.password} handleChange={handleChange}/>
      </AuthBody>
      <AuthButton
        buttonName='Зарегистрироваться'
        text='Уже зарегистрированы?'
        actionLink='Войти'
        errors={errors}
        isSubmitting={isSubmitting}
        submitError={submitError}
        isRegister={true}/>
    </AuthContainer>
  )
}

export default Register
