import React from "react";

//rating
import Rating from "react-star-rating-lite"

const index = (props) => {
  return (
    <>
      <div className="headings">
        <h4>{props.name}</h4>
        <p>{props.date}</p>
      </div>
      <div className="rating">
        <Rating value={props.rating} readonly />
      </div>
      <div className="review-desc">
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default index;
