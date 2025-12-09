import type { IMovie } from "../types";

interface Props extends IMovie {}

export const Movie: React.FC<Props> = (props) => {
  const {
    Poster: poster,
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
  } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={`https://placehold.co/300x400?text=${title}`}
          />
        ) : (
          <img className="activator" src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};
