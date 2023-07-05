import React from 'react'
import useForm from '../../hooks/useForm'
import './styles.scss'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const Profile = ({ handleLogout, handleUpdateProfile }) => {
  const user = React.useContext(CurrentUserContext)
  const [isEditable, setIsEditable] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [serverError, setServerError] = React.useState('');
  const { values, errors, handleChange, isValid } = useForm({ text: user.name, email: user.email });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    setIsSubmitting(true);
    await handleUpdateProfile(values.text, values.email, setServerError, setIsEditable);
    setIsSubmitting(false);
  }

  return (
    <section className='profile'>
      <h2 className="profile__title">Привет, {user.name}!</h2>
      <form onSubmit={handleSubmit} id="profile" action="#" className="profile__form">
        <div className="profile__input-area">
          <div className="profile__input-row">
            <label htmlFor='name' className="profile__label">Имя</label>
            <input
              id='text'
              name='text'
              type='text'
              className="profile__input"
              value={values.text}
              onChange={handleChange}
              required
              disabled={(isSubmitting) ? true : false}
              readOnly={isEditable ? false : true} />
            <span className="profile__input-error">{errors.text}</span>
          </div>
          <div className="profile__input-row">
            <label htmlFor='email' className="profile__label">E-mail</label>
            <input
              id='email'
              name='email'
              type='email'
              className="profile__input"
              value={values.email}
              onChange={handleChange}
              required
              disabled={(isSubmitting) ? true : false}
              readOnly={isEditable ? false : true} />
            <span className="profile__input-error">{errors.email}</span>
          </div>
        </div>
        {!isEditable ? (
          <div className="profile__button-area">
            <button onClick={() => setIsEditable(true)} className="profile__edit-btn">Редактировать</button>
            <button onClick={handleLogout} className="profile__logout-btn">Выйти из аккаунта</button>
          </div>
        ) : (
          <div className="profile__button-area">
            <span className="profile__error">{serverError}</span>
            <button
              type='submit'
              form='profile'
              className="profile__save-btn"
              disabled={(!isValid || isSubmitting || ((values.text === user.name) && (values.email === user.email))) ? true : false}>{isSubmitting ? 'Сохранение...' : 'Сохранить'}</button>
          </div>
        )}
      </form>
    </section>
  )
}

export default Profile
