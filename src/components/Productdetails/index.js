import React, { useState } from "react";
import { Link } from "react-router-dom";

//rating
import Rating from "react-star-rating-lite";

//images
import Plusicon from "../../assets/images/plus.png";
import Minusicon from "../../assets/images/minus.png";

const Productdetails = () => {
  //states
  const [count, setCount] = useState(1);

  //handling rating count
  const HandleRating = (ratedVal) => {
    console.log("Selected Rating", ratedVal);
  };

  //handle count
  const HandleProductCountPlus = () => {
    setCount(count + 1);
  };

  const HandleProductCountMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="product-details">
      <div className="product-name">
        <h2>
          すのこベッド 【ショートセミシングル】 長さ180cm 木製 ベッドフレーム
          耐荷重350kg 組立簡単 高さ4段階
        </h2>
      </div>
      <div className="product-num-rating">
        <div className="row">
          <div className="rating">
            <Rating onClick={HandleRating} />
          </div>
          <div className="p-num">
            <p>商品番号 97000990</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="product-colors">
        <div className="heading">
          <h3>カラー</h3>
        </div>
        <div className="colors-row">
          <div className="color" style={{ backgroundColor: "#fadcb8" }}></div>
          <div className="color" style={{ backgroundColor: "#f5f3f3" }}></div>
          <div className="color" style={{ backgroundColor: "#824035" }}></div>
        </div>
      </div>
      <div className="product-prices">
        <div className="heading">
          <h3>価格</h3>
        </div>
        <span className="sell-price">¥12,730 (税込)</span>
        <span className="original-price">
          <del>¥13,400</del> (税込)
        </span>
      </div>
      <div className="product-tags">
        <p>送料無料</p>
      </div>
      <div className="product-del-area">
        <p>配送地域　※別途送料追加地域・配送不可地域がございます。</p>
        <select>
          <option>北海道・沖縄本島・離島以外</option>
          <option>北海道送料 +2,000円</option>
          <option>沖縄本島送料 +3,000円</option>
          <option>離島・遠隔地送料見積り</option>
        </select>
      </div>
      <div className="product-count">
        <div className="heading">
          <h3>数量</h3>
        </div>
        <div className="count">
          <img
            src={Minusicon}
            alt="icon"
            className="minus"
            onClick={HandleProductCountMinus}
          />
          <span className="num">{count}</span>
          <img
            src={Plusicon}
            alt="icon"
            className="plus"
            onClick={HandleProductCountPlus}
          />
        </div>
      </div>
      <div className="product-atc">
        <Link to="/cart">カートに入れる</Link>
      </div>
    </div>
  );
};

export default Productdetails;
