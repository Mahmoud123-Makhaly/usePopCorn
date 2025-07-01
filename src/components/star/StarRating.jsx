import { Fragment, useState } from "react";
import Star from "./Star";

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const handleRating = (rating) => {
    setRating(rating);
    onSetRating(rating);
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
      className={className}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {Array.from({ length: maxRating }, (_, i) => i + 1).map((i) => (
          <Star
            key={i}
            onRate={() => handleRating(i)}
            full={tempRating ? tempRating >= i : rating >= i}
            onHoverIn={() => setTempRating(i)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p
        style={{
          lineHeight: "1",
          margin: "0",
          color: color,
          fontSize: ` ${size / 1.5}px`,
        }}
      >
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};
export default StarRating;
