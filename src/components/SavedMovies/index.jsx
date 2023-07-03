import React from 'react'
import Container from '../Container'
import Search from '../Search'
import MoviesCardList from '../MoviesCardList'
import Preloader from '../Preloader'
import './styles.scss'

const SavedMovies = ({ savedMovies, setSavedMovies, resultPlaceholder, handleFetchMovies, isLoading, setIsLoading }) => {
  const [searchedMovies, setSearchedMovies] = React.useState([])
  const [isSubmitted, setIsSubmitted] = React.useState(true);

  return (
    <section className="saved-movies">
      <Container>
        <Search
          setSearchedMovies={setSearchedMovies}
          handleSearchSubmit={handleFetchMovies}
          setIsLoading={setIsLoading}
          setIsSubmitted={setIsSubmitted}
          isSaved={true}
        />
        {isSubmitted && (isLoading ? (<Preloader />) :
          ((savedMovies && savedMovies.length > 0)
            ? (<MoviesCardList
              movies={(searchedMovies && searchedMovies.length > 0) ? searchedMovies : savedMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              isSubmitted={isSubmitted}
              isLoading={isLoading}
              isSaved={true} />)
            : (<h1 className='movies__result-placeholder'>{resultPlaceholder ? resultPlaceholder : 'Ничего не найдено'}</h1>)))}
      </Container>
    </section>
  )
}

export default SavedMovies
