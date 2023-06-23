const validateResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const makeRequest = (url, options) => {
  return fetch(url, options).then(res => validateResponse(res));
}