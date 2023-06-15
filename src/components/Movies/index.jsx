import React from 'react'
import card1 from '../../images/card-1.png'
import card2 from '../../images/card-2.png'
import Container from '../Container'
import Search from '../Search'
import MoviesCardList from '../MoviesCardList'
import './styles.scss'

const Movies = () => {

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
    <section className="movies">
      <Container>
        <Search />
        <MoviesCardList movies={movies}/>
        <button className="movies__button">Ещё</button>
      </Container>
    </section>
  )
}

export default Movies
