import React from 'react'
import { getMovies } from '../../utils/MoviesApi'
import Container from '../Container'
import Search from '../Search'
import MoviesCardList from '../MoviesCardList'
import Preloader from '../Preloader'
import './styles.scss'

const Movies = ({isLoading, setIsLoading}) => {
  const [allMovies, setAllMovies] = React.useState([])
  const [searchedMovies, setSearchedMovies] = React.useState([])
  const [resultPlaceholder, setResultPlaceholder] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSearchSubmit = async () => {
    try {
    if (allMovies && allMovies.length > 0) return allMovies;
      const movies = await getMovies();
      setAllMovies(movies);
      return movies;
    }
    catch (error) {
      console.log(error);
      setResultPlaceholder('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    }
  }

  return (
    <section className="movies">
      <Container>
        <Search
          setSearchedMovies={setSearchedMovies}
          handleSearchSubmit={handleSearchSubmit}
          setIsLoading={setIsLoading}
          setIsSubmitted={setIsSubmitted}
          />
          {isSubmitted && (isLoading ? (<Preloader/>) : 
          ((searchedMovies && searchedMovies.length>0) 
          ? (<MoviesCardList
            movies={searchedMovies}
            isSubmitted={isSubmitted}
            isLoading={isLoading}/>)
          : (<h1 className='movies__result-placeholder'>{resultPlaceholder ? resultPlaceholder : 'Ничего не найдено'}</h1>)))}
      </Container>
    </section>
  )
}

export default Movies
