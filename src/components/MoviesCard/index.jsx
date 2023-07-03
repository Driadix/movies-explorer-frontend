import React from 'react'
import { addMyMovie, deleteMyMovie } from '../../utils/MainApi';
import './styles.scss'

const MoviesCard = ({ savedMovies, setSavedMovies, movie, isSaved }) => {
  const savedMovie = (savedMovies && savedMovies.length > 0) ? savedMovies.find((savedMovie) => savedMovie.movieId === movie.id) : false;
  const { image, nameRU, duration } = movie;
  const [isCardLiked, setIsCardLiked] = React.useState(savedMovie);
  const formattedDuration = duration < 60 ? `${duration}м` : `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  const handleCardLike = () => {
    if (isCardLiked) {
      deleteMyMovie(savedMovie._id)
        .then(res => {
          setIsCardLiked(false);
          setSavedMovies((state) => state.filter((item) => item._id !== savedMovie._id));
        })
        .catch(error => console.log(error))
    }

    else {
      addMyMovie(movie)
        .then(res => {
          setIsCardLiked(true);
          setSavedMovies([res, ...savedMovies])
        })
        .catch(error => console.log(error))
    }
  }

  const handleCardDelete = () => {
    deleteMyMovie(movie._id)
      .then(res => {
        setIsCardLiked(false);
        setSavedMovies((state) => state.filter((item) => item._id !== movie._id));
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='movies__card'>
      <img src={isSaved ? image : `https://api.nomoreparties.co/${image.url}`} alt={nameRU} className="movies__card-image" />
      <div className="movies__card-content">
        <div className="movies__card-text-area">
          <h4 className="movies__card-title">{nameRU}</h4>
          <p className="movies__card-text">{formattedDuration}</p>
        </div>
        {!isSaved ?
          (<button onClick={handleCardLike} className={`movies__card-like-button${isCardLiked ? ' movies__card-like-button_active' : ''}`} />)
          :
          (<button onClick={handleCardDelete} className='movies__card-delete-button' />)}
      </div>
    </div>
  )
}

export default MoviesCard
