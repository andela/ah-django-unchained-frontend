import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const httpWithToken = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'authorization': `token ${localStorage.getItem('token')}`,
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
  }
});
