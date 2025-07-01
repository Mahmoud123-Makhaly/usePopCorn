import WatchedItem from "./WatchedItem";

const WatchedList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};
export default WatchedList;
