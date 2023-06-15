import React from 'react'
import FilterCheckbox from '../FilterCheckbox'
import searchIcon from '../../images/search-icon-min.svg';
import './styles.scss'

const Search = () => {
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__main">
          <div className="search__input-container">
            <img src={searchIcon} alt="input icon" className="search__input-icon" />
            <input type="text" placeholder='Фильмы' className="search__input" />
          </div>
          <button className="search__input-button"></button>
        </div>
        <div className="search__toggle">
          <FilterCheckbox />
          <p className="search__toggle-name">Короткометражки</p>
        </div>
      </div>
    </div>
  )
}

export default Search
