import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const Profile = () => {
  const [isEditable, setIsEditable] = React.useState(false)
  const navigate = useNavigate();

  return (
    <section className='profile'>
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form id="profile" action="#" className="profile__form">
          <div className="profile__input-area">
            <div className="profile__input-row">
              <label htmlFor='name' className="profile__label">Имя</label>
              <input 
              id='name' 
              name='name' 
              type='text' 
              className="profile__input" 
              value='Виталий' 
              required 
              readOnly={isEditable ? false : true}/>
            </div>
            <div className="profile__input-row">
              <label htmlFor='email' className="profile__label">E-mail</label>
              <input 
              id='email' 
              name='email' 
              type='email' 
              className="profile__input" 
              value='pochta@yandex.ru' 
              required 
              readOnly={isEditable ? false : true}/>
            </div>
          </div>
          {!isEditable ? (
            <div className="profile__button-area">
              <button onClick={() => setIsEditable(true)} className="profile__edit-btn">Редактировать</button>
              <button onClick={() => navigate('/')} className="profile__logout-btn">Выйти из аккаунта</button>
            </div>
          ) : (
            <div className="profile__button-area">
              <span className="profile__error">При обновлении профиля произошла ошибка.</span>
              <button button className="profile__save-btn">Сохранить</button>
            </div>
          )}
        </form>
    </section>
  )
}

export default Profile
