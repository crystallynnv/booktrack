import tokenService from './tokenService';

const BASE_URL = '/api/books/';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(book) {
  return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(book)
  }).then(res => res.json());
}

// export function index() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     }
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }

// export function create(score) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       // Add this header - don't forget the space after Bearer
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(score)
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }
