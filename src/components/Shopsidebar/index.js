import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="sidebar-box">
      <div className="product-size">
        <div className="size-heading">
          <span>+</span>
          <h4>ベッドサイズ</h4>
        </div>
        <hr />
        <div className="size-row">
          <Link to="/shop">セミシングル</Link>
        </div>
        <div className="size-row">
          <Link to="/shop">シングル</Link>
        </div>
        <div className="size-row">
          <Link to="/shop">セミダブル</Link>
        </div>
      </div>
      <div className="product-type">
        <div className="type-heading">
          <span>+</span>
          <h4>ベッドの種類</h4>
        </div>
        <hr />
        <div className="type-row">
          <Link to="/shop">収納ベッド</Link>
        </div>
        <div className="type-row">
          <Link to="/shop">すのこベッド</Link>
        </div>
        <div className="type-row">
          <Link to="/shop">マットレス付き</Link>
        </div>
      </div>
      <div className="product-material">
        <div className="material-heading">
          <span>+</span>
          <h4>ベッドの素材</h4>
        </div>
        <hr />
        <div className="material-row">
          <Link to="/shop">畳ベッド</Link>
        </div>
        <div className="material-row">
          <Link to="/shop">檜ベッド</Link>
        </div>
        <div className="material-row">
          <Link to="/shop
          
          ">ウォールナットベッド</Link>
        </div>
      </div>
    </div>
  );
};

export default index;
