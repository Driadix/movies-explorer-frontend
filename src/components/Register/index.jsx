import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContainer from '../AuthContainer'
import AuthHeader from '../AuthHeader'
import AuthBody from '../AuthBody'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'
import { register } from '../../utils/MainApi';
import useForm from '../../hooks/useForm'

const Register = ({ handleLogin }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState('')
  const { values, errors, handleChange, isValid } = useForm()
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setSubmitError('')
    setIsSubmitting(true)
    register(values.text, values.email, values.password)
      .then(async (res) => {
        await handleLogin(values.email, values.password, setSubmitError);
        navigate('/movies', { replace: true });
      })
      .catch(error => setSubmitError((error === 'Ошибка: 409') ? 'Данный email уже существует' : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
      .finally(() => setIsSubmitting(false))
  }

  return (
    <AuthContainer>
      <AuthHeader title='Добро пожаловать!' />
      <AuthBody isRegister={true} handleSubmit={handleRegister}>
        <AuthInput
          text="Имя"
          type="text"
          value={values.text}
          error={errors.text}
          handleChange={handleChange}
          isSubmitting={isSubmitting}
          min={2}
          max={30} />
        <AuthInput
          text="Email"
          type="email"
          value={values.email}
          error={errors.email}
          handleChange={handleChange}
          isSubmitting={isSubmitting} />
        <AuthInput
          text="Пароль"
          type="password"
          value={values.password}
          error={errors.password}
          handleChange={handleChange}
          isSubmitting={isSubmitting} />
      </AuthBody>
      <AuthButton
        buttonName='Зарегистрироваться'
        text='Уже зарегистрированы?'
        actionLink='Войти'
        isValid={isValid}
        isSubmitting={isSubmitting}
        submitError={submitError}
        isRegister={true} />
    </AuthContainer>
  )
}

export default Register
