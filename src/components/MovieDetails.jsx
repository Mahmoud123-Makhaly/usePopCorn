import { useEffect, useState } from "react";
import Loader from "./Loader";
import StarRating from "./star/StarRating";

const KEY = "f84fc31d";
const MovieDetails = ({ selectedId, onClose, onAddToWatchedList, watched }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [rating, setRating] = useState("");
  const isWatched = watched.map((prev) => prev.imdbID).includes(selectedId);
 
  const {
    Director: director,
    Genre: genre,
    Plot: plot,
    imdbRating,
    Poster: poster,
    Title: title,
    Released: released,
    Runtime: runtime,
    Year: year,
    Actors: actors,
  } = movie;
  const getMovieDetails = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, [selectedId]);
  const handleAddToList = () => {
    const newItem = {
      imdbID: selectedId,
      Poster: poster,
      Title: title,
      Year: year,
      userRating: rating,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split("")[0]),
    };

    onAddToWatchedList(newItem);
    onClose();
  };

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onClose}>
              &#x2190;
            </button>
            <img src={poster} alt={title} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>😘</span>
                {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
            
                              {
                                  !isWatched ?     <StarRating maxLength={10} size={24} onSetRating={setRating} />
              {rating && (
                <button className="btn-add" onClick={handleAddToList}>
                  Add To List
                </button>
              )}: <p>you have been rating this film </p>
          }
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed By {director}</p>
          </section>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
