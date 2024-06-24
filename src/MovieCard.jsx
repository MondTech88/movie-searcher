import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A" || movie.Poster === undefined
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string),
};
