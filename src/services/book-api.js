import tokenService from './tokenService';

const BASE_URL = '/api/books';

export function getAll() {
  return fetch(BASE_URL, {
    headers: {
             'Authorization': 'Bearer ' + tokenService.getToken()
           }
  })
  .then(res => res.json());
}

export function create(book) {
  console.log(book, 'BOOK')
  return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(book)
  }).then(res => res.json());
}

export function update(book) {
  console.log(book, 'BOOK')
  return fetch(`${BASE_URL}/${book._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(book)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
               'Authorization': 'Bearer ' + tokenService.getToken()
             }
  }).then(res => res.json());
}


