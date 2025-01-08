import { useState } from "react";
import StarRating from "./StarRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRating} />
      <p>you have rating {movieRating} numbers </p>
    </div>
  );
};
export default Test;
