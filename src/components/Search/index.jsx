import React from 'react'
import { useLocation } from 'react-router-dom'
import FilterCheckbox from '../FilterCheckbox'
import searchIcon from '../../images/search-icon-min.svg'
import useForm from '../../hooks/useForm'
import { filterSearchSubmit } from '../../utils/filter'
import './styles.scss'

const Search = ({ setSearchedMovies, handleSearchSubmit, setIsLoading, setIsSubmitted, isSaved = false }) => {
  const [isSmallMovies, setIsSmallMovies] = React.useState(false)
  const [localQuery, setLocalQuery] = React.useState('')
  const { values, errors, handleChange } = useForm()
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsLoading(true);
    setTimeout(async () => {
      const movies = await handleSearchSubmit();
      if (movies && movies.length > 0) {
        const filteredMovies = filterSearchSubmit(values.search, movies, isSmallMovies)
        setSearchedMovies(filteredMovies);
        if (isSaved) {
          localStorage.setItem('saved-movie', JSON.stringify({
            queryText: values.search,
            movies: filteredMovies,
            isSmall: isSmallMovies,
          }));
        }
        else {
          localStorage.setItem('movie', JSON.stringify({
            queryText: values.search,
            movies: filteredMovies,
            isSmall: isSmallMovies,
          }));
        }
      }
      setIsLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    if (localStorage.getItem(`movie`) && location.pathname === '/movies') {
      const movieObject = JSON.parse(localStorage.getItem('movie'));
      setIsSmallMovies(movieObject.isSmall);
      setSearchedMovies(movieObject.movies);
      setLocalQuery(movieObject.queryText);
      setIsSubmitted(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="search">
      <div className="search__container">
        <form onSubmit={handleSubmit} className="search__main">
          <div className="search__input-container">
            <img src={searchIcon} alt="input icon" className="search__input-icon" />
            <input
              type="text"
              placeholder={localQuery || 'Фильмы'}
              className="search__input"
              name='search'
              value={values.search || ''}
              autoComplete='off'
              onChange={handleChange}
              required />
          </div>
          <button type="submit" className="search__input-button" disabled={errors.search ? true : false}></button>
        </form>
        <div className="search__toggle">
          <FilterCheckbox isSmall={isSmallMovies} setIsSmall={setIsSmallMovies} />
          <p className="search__toggle-name">Короткометражки</p>
        </div>
      </div>
      <span className="search__input-error">{errors.search}</span>
    </div>
  )
}

export default Search
