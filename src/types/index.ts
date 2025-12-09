export interface MoviesResponse {
  Search: IMovie[];
  totalResults: string;
  Response: string;
}

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type SearchType = "all" | "movie" | "series";

export type SearchOption = {
  label: string;
  type: SearchType;
};