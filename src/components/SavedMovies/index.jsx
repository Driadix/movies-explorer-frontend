import React from 'react'
import Container from '../Container'
import Search from '../Search'
import card1 from '../../images/card-1.png'
import card2 from '../../images/card-2.png'
import MoviesCardList from '../MoviesCardList'
import './styles.scss'

const SavedMovies = () => {

  const movies = [
    {
      image: card1,
      title: 'Киноальманах «100 лет дизайна»',
      text: '1ч 3м',
      isLiked: false,
    },
    {
      image: card1,
      title: 'Дженис: Маленькая девочка грустит',
      text: '1ч 42м',
      isLiked: true,
    },
    {
      image: card2,
      title: 'Дженис: Маленькая девочка грустит',
      text: '1ч 42м',
      isLiked: false,
    },
    {
      image: card2,
      title: 'Дженис: Маленькая девочка грустит',
      text: '1ч 42м',
      isLiked: false,
    },
  ]

  return (
    <section className="saved-movies">
      <Container>
        <Search />
        <MoviesCardList movies={movies} isSaved={true}/>
      </Container>
    </section>
  )
}

export default SavedMovies
