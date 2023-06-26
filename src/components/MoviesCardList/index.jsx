import React from 'react'
import MoviesCard from '../MoviesCard'
import './styles.scss'

const MoviesCardList = ({movies, isSaved=false}) => {
  return (
    <div className="movies__container">
      {movies.map((movie) => <MoviesCard key={movie.id} movie={movie} isSaved={isSaved}/>)}
    </div>
  )
}

export default MoviesCardList
