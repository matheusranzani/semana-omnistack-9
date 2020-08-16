import axios from 'axios';

const api = axios.create({
  // baseURL: 'htpp://localhost:3333'
  baseURL: 'http://192.168.0.22:3333'
});

export default api;