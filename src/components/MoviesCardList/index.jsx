import React from 'react'
import MoviesCard from '../MoviesCard'
import { INITIAL_SIZES, ADD_MOVIES_COUNT, SCREEN_SIZEZ } from '../../utils/constants.js'
import './styles.scss'

const MoviesCardList = ({ movies, savedMovies, setSavedMovies, isSubmitted, isLoading, isSaved = false }) => {
  const [initialSize, setInitialSize] = React.useState(0);
  const [addMoviesCount, setAddMoviesCount] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const shownMovies = movies?.slice(0, initialSize);

  const handleMoreMovies = () => {
    setInitialSize(initialSize + addMoviesCount)
  }

  React.useEffect(() => {
    if (windowWidth < SCREEN_SIZEZ.SMALL) {
      setInitialSize(INITIAL_SIZES.SMALL);
      setAddMoviesCount(ADD_MOVIES_COUNT.SMALL);
    }
    else if (windowWidth < SCREEN_SIZEZ.MEDIUM) {
      setInitialSize(INITIAL_SIZES.MEDIUM);
      setAddMoviesCount(ADD_MOVIES_COUNT.SMALL);
    }
    else {
      setInitialSize(INITIAL_SIZES.LARGE);
      setAddMoviesCount(ADD_MOVIES_COUNT.MEDIUM);
    }
  }, [windowWidth])

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    isSaved ? (
      <div className="movies__container">
        {movies.map((movie) => <MoviesCard key={movie._id} setSavedMovies={setSavedMovies} movie={movie} isSaved={true} />)}
      </div>
    ) : (
      <>
        <div className="movies__container">
          {shownMovies.map((movie) => <MoviesCard key={movie.id} savedMovies={savedMovies} setSavedMovies={setSavedMovies} movie={movie} isSaved={false} />)}
        </div>
        {isSubmitted && !isLoading && <button
          className={`movies__button ${(shownMovies.length === movies.length) ? 'movies__button_hidden' : ''}`}
          onClick={handleMoreMovies}
        >Ещё</button>}
      </>)
  )
}




export default MoviesCardList
