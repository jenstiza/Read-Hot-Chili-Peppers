import sendRequest from './send-request';
const BASE_URL = '/api/books';

export function fetchBooks(word) {
  console.log(word, 'word');
    return sendRequest(`${BASE_URL}/${word}`);
  }
  
export function getShelf(){
    return sendRequest(`${BASE_URL}`);
}

export function getBook(id){
   return sendRequest(`${BASE_URL}/${id}` );
}

export function addToShelf(book){
  console.log(book, 'bookapi');
  return sendRequest(`${BASE_URL}/addbook`, 'POST', book);
}