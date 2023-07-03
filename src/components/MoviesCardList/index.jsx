import React from 'react'
import MoviesCard from '../MoviesCard'
import './styles.scss'

const MoviesCardList = ({movies, savedMovies, setSavedMovies, isSubmitted, isLoading, isSaved=false}) => {
  const [initialSize, setInitialSize] = React.useState(0);
  const [addMoviesCount, setAddMoviesCount] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const shownMovies = movies.slice(0, initialSize);

  const handleMoreMovies = () => {
    setInitialSize(initialSize + addMoviesCount)
  }

  React.useEffect(() => {
    if (windowWidth < 481) {
      setInitialSize(5);
      setAddMoviesCount(2);
    }
    else if (windowWidth < 769) {
      setInitialSize(8);
      setAddMoviesCount(2);
    }
    else {
      setInitialSize(12);
      setAddMoviesCount(3);
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
        {movies.map((movie) => <MoviesCard key={movie._id} setSavedMovies={setSavedMovies} movie={movie} isSaved={true}/>)}
      </div>
  ) : (
    <>
    <div className="movies__container">
      {shownMovies.map((movie) => <MoviesCard key={movie.id} savedMovies={savedMovies} setSavedMovies={setSavedMovies} movie={movie} isSaved={false}/>)}
    </div>
    {isSubmitted && !isLoading && <button
      className={`movies__button ${(shownMovies.length === movies.length)?'movies__button_hidden':''}`}
      onClick={handleMoreMovies}
      >Ещё</button>}
      </>)
  )
}




export default MoviesCardList
