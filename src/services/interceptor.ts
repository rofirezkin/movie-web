import {useAuthStore} from '@/store/useAuthStore';
import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://www.omdbapi.com/?apiKey=639928ce&',
});

http.interceptors.request.use(config => {
  const {token} = useAuthStore.getState();

  console.log('token ', token)

  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});