import sendRequest from './send-request';
const BASE_URL = '/api/books';

export function fetchBooks(word) {
    return sendRequest(`${BASE_URL}/${word}`);
  }
  
export function displayBooks(){
    return sendRequest(`${BASE_URL}`);
}

export function getBook(id){
   return sendRequest(`${BASE_URL}/${id}`, 'POST', {id});
}

// export function addToShelf(id){
//   return sendRequest(`${BASE_URL}/add/${id}`);
// }