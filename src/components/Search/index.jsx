import React from 'react'
import { useLocation } from 'react-router-dom'
import FilterCheckbox from '../FilterCheckbox'
import searchIcon from '../../images/search-icon-min.svg'
import useForm from '../../hooks/useForm'
import { filterSearchSubmit } from '../../utils/filter'
import './styles.scss'

const Search = ({ setSearchedMovies, handleSearchSubmit, setIsLoading, setIsSubmitted, allMovies = [], setAllMovies, isSubmitted, isSaved = false }) => {
  const [isSmallMovies, setIsSmallMovies] = React.useState(false)
  const [localQuery, setLocalQuery] = React.useState((state) => {
    return state = (localStorage.getItem('movie') && !isSaved) ? JSON.parse(localStorage.getItem('movie')).queryText : '';
  })
  const [isSearchDisabled, setIsSearchDisabled] = React.useState(true)
  const { values, errors, handleChange, isValid } = useForm({ search: localQuery })
  const location = useLocation();

  React.useEffect(() => {
    if (!isSaved) {
      if (allMovies && allMovies.length > 0 && isSubmitted) {
        const filteredMovies = filterSearchSubmit(values.search, allMovies, isSmallMovies)
        setSearchedMovies(filteredMovies);
        localStorage.setItem('movie', JSON.stringify({
          ...JSON.parse(localStorage.getItem('movie')),
          movies: filteredMovies,
          isSmall: isSmallMovies,
        }));
      }
    }
    else {
      if (allMovies && allMovies.length > 0) {
        setIsSubmitted(true)
        const filteredMovies = filterSearchSubmit(values.search, allMovies, isSmallMovies)
        setSearchedMovies(filteredMovies)
      }
    }
    // eslint-disable-next-line
  }, [isSmallMovies])

  React.useEffect(() => {
    if (isSaved) {
      setSearchedMovies(state => {
        const allMoviesIds = allMovies.map(item => item.movieId);
        return state.filter(item => allMoviesIds.includes(item.movieId))
      })
    }
    // eslint-disable-next-line
  }, [allMovies])

  React.useEffect(() => {
    setIsSearchDisabled(!isValid ? true : false);
  }, [isValid])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsLoading(true);
    setTimeout(async () => {
      const movies = await handleSearchSubmit();
      if (movies && movies.length > 0) {
        const filteredMovies = filterSearchSubmit(values.search, movies, isSmallMovies)
        setSearchedMovies(filteredMovies);
        if (!isSaved) {
          localStorage.setItem('movie', JSON.stringify({
            queryText: values.search,
            movies: filteredMovies,
            isSmall: isSmallMovies,
            isDisabled: isSearchDisabled,
          }));
        }
      }
      setIsLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    if (localStorage.getItem(`movie`) && location.pathname === '/movies') {
      setAllMovies(async (state) => await handleSearchSubmit());
      const movieObject = JSON.parse(localStorage.getItem('movie'));
      setIsSmallMovies(movieObject.isSmall);
      setSearchedMovies(movieObject.movies);
      setLocalQuery(movieObject.queryText);
      setIsSearchDisabled(movieObject.isDisabled)
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
              placeholder='Фильмы'
              className="search__input"
              name='search'
              value={values.search}
              autoComplete='off'
              onChange={handleChange}
              required />
          </div>
          <button type="submit" className="search__input-button" disabled={isSearchDisabled}></button>
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
