import sendRequest from './send-request';
const BASE_URL = '/api/books';

export function fetchBooks(word) {
  return sendRequest(`${BASE_URL}/${word}`);
}
  
export function getBook(id){
  return sendRequest(`${BASE_URL}/${id}` );
}

export function addToShelf(book){
  return sendRequest(`${BASE_URL}/addbook`, 'POST', book);
}




