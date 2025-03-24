import {useAuthStore} from '@/store/useAuthStore';
import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=639928ce&',
});

http.interceptors.request.use(config => {
  const {token} = useAuthStore.getState();

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});