import React from 'react'
import FilterCheckbox from '../FilterCheckbox'
import searchIcon from '../../images/search-icon-min.svg'
import useForm from '../../hooks/useForm'
import { filterSearchSubmit } from '../../utils/filter'
import './styles.scss'

const Search = ({setSearchedMovies, handleSearchSubmit, setIsLoading, setIsSubmitted}) => {
  const [isSmallMovies, setIsSmallMovies] = React.useState(false)
  const {values, errors, handleChange } = useForm()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsLoading(true);
    setTimeout(async () => {
      const movies = await handleSearchSubmit();
      if(movies && movies.length > 0) setSearchedMovies(filterSearchSubmit(values.search, movies, isSmallMovies));
      setIsLoading(false);
    }, 1000);
  }
 
  React.useEffect(() => {
    if (localStorage.getItem(`isSmall`)) {
      setIsSmallMovies(true);
    } else {
      setIsSmallMovies(false);
    }
  }, []);

  return (
    <div className="search">
      <div className="search__container">
        <form onSubmit={handleSubmit} className="search__main">
          <div className="search__input-container">
            <img src={searchIcon} alt="input icon" className="search__input-icon"/>
            <input
            type="text"
            placeholder='Фильмы'
            className="search__input"
            name='search'
            value={values.search || ''}
            autoComplete='off'
            onChange={handleChange}
            required/>
          </div>
          <button type="submit" className="search__input-button"></button>
        </form>
        <div className="search__toggle">
          <FilterCheckbox isSmall={isSmallMovies} setIsSmall={setIsSmallMovies}/>
          <p className="search__toggle-name">Короткометражки</p>
        </div>
      </div>
      <span className="search__input-error">{errors.search}</span>
    </div>
  )
}

export default Search
