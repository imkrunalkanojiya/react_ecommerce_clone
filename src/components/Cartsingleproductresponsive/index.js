import React,{useState} from "react";

//images
// import Deleteicon from "../../assets/images/close-icon.png";
import Plusicon from "../../assets/images/plus.png";
import Minusicon from "../../assets/images/minus.png";

const Cartsingleproductresponsive = (props) => {
  const [productCount, setProductCount] = useState(1);

  const HandleProductCountPlus = () => {
    setProductCount(productCount + 1);
  };

  const HandleProductCountMinus = () => {
    setProductCount(productCount - 1);
  };

  return (
    <div className="single-product-responsive">
      <div className="row-heading">
        <div className="product-heading">
          <p>製品詳細</p>
        </div>
        <div className="product-image-name">
          <img src={props.image} alt="product" />
          <p>{props.name}</p>
        </div>
      </div>
      <div className="row-unit-price">
        <div className="product-unit-price-heading">
          <p>単価</p>
        </div>
        <div className="product-unit-price">
          <p>¥{props.price}</p>
        </div>
      </div>
      <div className="row-quantity">
        <div className="product-quantity-heading">
          <p>量</p>
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
      </div>
      <div className="row-price">
        <div className="row-price-heading">
          <p>価格</p>
        </div>
        <div className="product-price">
          <p>¥{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Cartsingleproductresponsive;
