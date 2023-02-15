import React from "react";
import { Link } from "react-router-dom";

const index = (props) => {
  return (
    <Link to="/shop" className="product-card">
      <img src={props.image} alt="bed" />
      <p>{props.name}</p>
    </Link>
  );
};

export default index;
