import type { IMovie } from "../types";
import { Movie } from "./Movie";

interface Props {
  movies: IMovie[];
}

export const Movies: React.FC<Props> = ({ movies = [] }) => {
  if (!movies.length) {
    return <h3>Movies not found</h3>;
  }

  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};
