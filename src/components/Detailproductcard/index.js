import React from "react";
import { Link } from "react-router-dom";

const index = (props) => {
  return (
      <Link to="/shop/product" className="product-card">
        <div className="image">
          <img src={props.image} alt="card" />
        </div>
        <div className="name">
          <p>{props.name} </p>
        </div>
        <div className="price">
          <h5>{props.price}</h5>
          <p>(税込)</p>
        </div>
      </Link>
  );
};

export default index;
