import React from 'react'
import './styles.scss'

const MoviesCard = ({movie, isSaved}) => {
  const {image, nameRU, duration, isLiked} = movie;
  const [isCardLiked, setIsCardLiked] = React.useState(isLiked);
  const formattedDuration = duration < 60 ? `${duration}м` : `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  return (
    <div className='movies__card'>
      <img src={`https://api.nomoreparties.co/${image.url}`} alt={nameRU} className="movies__card-image" />
      <div className="movies__card-content">
        <div className="movies__card-text-area">
          <h4 className="movies__card-title">{nameRU}</h4>
          <p className="movies__card-text">{formattedDuration}</p>
        </div>
        {!isSaved ?
        (<button onClick={() => setIsCardLiked(!isCardLiked)} className={`movies__card-like-button${isCardLiked ? ' movies__card-like-button_active' : ''}`}/>)
        :
        (<button className='movies__card-delete-button'/>)}
      </div>
    </div>
  )
}

export default MoviesCard
