import { MOVIES_API_URL } from './constants';
import { makeRequest } from './apiUtils';

export const getMovies = () => {
  return makeRequest(MOVIES_API_URL, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}