import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContainer from '../AuthContainer'
import AuthHeader from '../AuthHeader'
import AuthBody from '../AuthBody'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'
import useForm from '../../hooks/useForm'

const Login = ({handleLogin}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState('')
  const { values, errors, handleChange } = useForm()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    await handleLogin(values.email, values.password, setSubmitError)
    setIsSubmitting(false)
    navigate('/movies', { replace: true })
  }

  return (
    <AuthContainer>
      <AuthHeader title='Рады видеть!' />
      <AuthBody handleSubmit={handleSubmit}>
        <AuthInput text="Email" type="email" value={values.email} error={errors.email} handleChange={handleChange} />
        <AuthInput text="Пароль" type="password" value={values.password} error={errors.password} handleChange={handleChange} />
      </AuthBody>
      <AuthButton
        buttonName='Войти'
        text='Ещё не зарегистрированы?'
        actionLink='Регистрация'
        errors={errors}
        isSubmitting={isSubmitting}
        submitError={submitError} />
    </AuthContainer>
  )
}

export default Login
