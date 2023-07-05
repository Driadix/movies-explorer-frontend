import { MAIN_API_URL } from './constants';
import { makeRequest } from './apiUtils';

export const getMyMovies = () => {
  return makeRequest(`${MAIN_API_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  })
}

export const addMyMovie = (movie) => {
  return makeRequest(`${MAIN_API_URL}/movies`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co` + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co` + movie.thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
  })
}

export const deleteMyMovie = (myMovieId) => {
  return makeRequest(`${MAIN_API_URL}/movies/${myMovieId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  })
}

export const getMyUser = () => {
  return makeRequest(`${MAIN_API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  })
}

export const updateProfile = (name, email) => {
  return makeRequest(`${MAIN_API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
    })
  })
}

export const register = (name, email, password) => {
  return makeRequest(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
}

export const login = (email, password) => {
  return makeRequest(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
}