import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://us-central1-engaged-range-366812.cloudfunctions.net/english-word',
  withCredentials: false,
});

export default instanceAxios;
