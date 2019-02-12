import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://ah-the-unsullied-staging.herokuapp.com/',
    headers: { "Content-Type": "application/json" }
});


export default http
