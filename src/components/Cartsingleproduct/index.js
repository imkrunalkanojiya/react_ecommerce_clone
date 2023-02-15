import React, { useState } from "react";

//images
import Deleteicon from "../../assets/images/close-icon.png";
import Plusicon from "../../assets/images/plus.png";
import Minusicon from "../../assets/images/minus.png";

const Cartsingleproduct = (props) => {
  const [productCount, setProductCount] = useState(1);

  const HandleProductCountPlus = () => {
    setProductCount(productCount + 1);
  };

  const HandleProductCountMinus = () => {
    setProductCount(productCount - 1);
  };

  return (
    <>
      <div className="single-product">
        <div className="product-image-name">
          <img src={props.image} alt="product" />
          <p>{props.name}</p>
        </div>
        <div className="product-unit-price">
          <p>¥{props.price}</p>
        </div>
        <div className="product-quantity">
          <div className="counter">
            <img
              src={Minusicon}
              alt="minus"
              onClick={HandleProductCountMinus}
            />
            <p>{productCount}</p>
            <img src={Plusicon} alt="plus" onClick={HandleProductCountPlus} />
          </div>
        </div>
        <div className="product-price">
          <p>¥{props.price}</p>
        </div>
        <div className="product-delete">
          <img src={Deleteicon} alt="product-delete" />
        </div>
      </div>

    </>
  );
};

export default Cartsingleproduct;
