import { useState } from "react";
import StarRating from "./StarRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} onSetRating={setMovieRating} />
      <p>your rating is: {movieRating} rating</p>
    </div>
  );
};
export default Test;
