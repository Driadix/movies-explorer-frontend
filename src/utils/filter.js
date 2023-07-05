import { SMALL_DURATION } from './constants'

const filterByQuery = (query, movies) => {
  return movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()))
}

const filterByShort = (movies) => movies.filter(movie => movie.duration <= SMALL_DURATION);

export const filterSearchSubmit = (queryText ,movies, isSmallMovies) => {
  const filteredByShort = isSmallMovies ? filterByShort(movies) : false;
  const filtered =  filteredByShort ? filterByQuery(queryText, filteredByShort)
  : filterByQuery(queryText, movies)
  if(filtered && filtered.length>0) return filtered;
  return [];
}