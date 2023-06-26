import React from 'react'
import { getMovies } from '../../utils/MoviesApi'
import Container from '../Container'
import Search from '../Search'
import MoviesCardList from '../MoviesCardList'
import Preloader from '../Preloader'
import './styles.scss'

const Movies = ({isLoading, setIsLoading}) => {
  const [searchedMvoies, setSearchedMvoies] = React.useState([])
  const [resultPlaceholder, setResultPlaceholder] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSearchSubmit = async () => {
    try {
    const movies = await getMovies();
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
          setSearchedMvoies={setSearchedMvoies}
          handleSearchSubmit={handleSearchSubmit}
          setIsLoading={setIsLoading}
          setIsSubmitted={setIsSubmitted}
          />
          {isSubmitted && (isLoading ? (<Preloader/>) : 
          ((searchedMvoies && searchedMvoies.length>0) 
          ? (<MoviesCardList movies={searchedMvoies}/>) 
          : (<h1 className='movies__result-placeholder'>{resultPlaceholder ? resultPlaceholder : 'Ничего не найдено'}</h1>)))}
        {isSubmitted && !isLoading && <button className="movies__button">Ещё</button>}
      </Container>
    </section>
  )
}

export default Movies
