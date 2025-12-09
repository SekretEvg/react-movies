import { API_KEY, API_URL } from "../constants";
import type { MoviesResponse, SearchType } from "../types";

export const getMoviesService = (
  query = "matrix",
  type: SearchType = "all"
) => {
  return fetch(
    `${API_URL}?apikey=${API_KEY}&s=${query}${
      type !== "all" ? `&type=${type}` : ""
    }`
  ).then((response) => response.json() as Promise<MoviesResponse>);
};
