import axios from "axios";

const baseUrl = "https://swapi.dev/api";

export const getPeople = (page) => () =>
  axios.get(`${baseUrl}/people/?page=${page}`);
