import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({
  maxLength = 10,
  size = 48,
  color = "#fcbb00",
  defaultRating = 0,
  message = [],
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const handleRating = (i) => {
    setRating(i + 1);
    onSetRating(i + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Array.from({ length: maxLength }, (_, i) => (
          <Star
            key={i}
            onClick={() => handleRating(i)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => {
              setTempRating(i + 1);
            }}
            onHoverOut={() => {
              setTempRating(0);
            }}
            size={size}
            color={color}
          />
        ))}
      </div>
      <p style={{ fontSize: `${size / 1.5}px`, color: color }}>
        {message.length === maxLength
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

export default StarRating;
