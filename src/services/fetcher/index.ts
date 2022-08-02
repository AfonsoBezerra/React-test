import axios from 'axios';
import { getCookie } from '@services/cookie';

function instance() {
  const token = getCookie(import.meta.env.VITE_AUTH_COOKIE);

  const instanceAxios = axios.create({
    baseURL: import.meta.env.VITE_HOST,
  });

  instanceAxios.interceptors.request.use((config) => {
    if (config.headers)
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });

  return instanceAxios;
}

export const fetcher = {
  get: async (url: string) => {
    return instance()
      .get(url)
      .then((res) => res.data);
  },
  post: async (url: string, data: any) => {
    return instance()
      .post(url, data)
      .then((res) => res.data);
  },
  put: async (url: string, data: any) => {
    return instance()
      .put(url, data)
      .then((res) => res.data);
  },
  delete: async (url: string) => {
    return instance()
      .delete(url)
      .then((res) => res.data);
  },
};
