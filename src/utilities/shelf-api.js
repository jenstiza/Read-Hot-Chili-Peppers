import sendRequest from './send-request';
const BASE_URL = '/api/shelf';


export function getShelf(){
    return sendRequest(BASE_URL);
}

