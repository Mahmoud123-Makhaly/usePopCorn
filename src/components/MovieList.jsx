import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};
export default MovieList;
