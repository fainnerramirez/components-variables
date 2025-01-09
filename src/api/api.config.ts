import axios from "axios";

const API_POSTS = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
});

const API_DOGS = axios.create({
  baseURL: "https://dog.ceo/api/",
  timeout: 5000,
});

export { API_DOGS, API_POSTS };
