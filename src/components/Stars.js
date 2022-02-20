
import React from "react";
import { useState } from "react";


const Stars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="stars">
      {[...Array(5)].map((star, index) => {
        index = index + 1;
        return (
          <button type="button" id="star-button" key={index} className={index <= rating ? "on" : "off"}
          onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)}>
          <span className="star">&#9733;</span>  
          </button>
        );
      })}
    </div>
  );
};

export default Stars;










