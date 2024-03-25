import axios from 'axios';

const apiUrl = 'https://logiclike.com/docs/courses.json';

export const baseUrl = axios.create({
  baseURL: apiUrl,
});
