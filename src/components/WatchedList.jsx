import React from "react";
import WatchedItem from "./WatchedItem";

const WatchedList = ({ watched, onDelete }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedItem key={movie.imdbID} movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default WatchedList;
