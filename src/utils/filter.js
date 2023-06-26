const filterByQuery = (query, movies) => {
  return movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()))
}

export const filterSearchSubmit = (queryText ,movies, isSmallMovies) => {
  const filteredByShort = isSmallMovies ? movies.filter(movie => movie.duration <= 40) : false;
  const filtered =  filteredByShort ? filterByQuery(queryText, filteredByShort)
  : filterByQuery(queryText, movies)
  if(filtered && filtered.length>0) return filtered;
  return [];
}