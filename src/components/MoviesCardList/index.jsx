import React from 'react'
import MoviesCard from '../MoviesCard'
import './styles.scss'

const MoviesCardList = ({movies, isSaved}) => {
  return (
    <div className="movies__container">
      {movies.map((movie, index) => <MoviesCard key={index} movie={movie} isSaved={isSaved}/>)}
    </div>
  )
}

export default MoviesCardList
