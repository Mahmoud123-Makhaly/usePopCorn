import React from "react";

const WatchedItem = ({ movie, onDelete }) => {
  return (
    <li>
      <div>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie?.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie?.runtime} min</span>
          </p>
        </div>
        <button className="btn-delete" onClick={() => onDelete(movie.imdbID)}>
          {" "}
          x
        </button>
      </div>
    </li>
  );
};

export default WatchedItem;
