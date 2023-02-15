import React from "react";

//components
import Cartsingleproduct from "../../components/Cartsingleproduct/index";
import Cartsingleproductresponsive from "../../components/Cartsingleproductresponsive";

//images
import P1 from "../../assets/images/p1.jpg";
import P2 from "../../assets/images/p2.jpg";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div id="shopping-cart">
      <div className="shopping-cart">
        <div className="cart-container">
          <div className="heading">
            <h1>ショッピングカート</h1>
          </div>
          <div className="cart-products">
            <div className="cart-product-heading">
              <div className="product-name">
                <p>製品詳細</p>
              </div>
              <div className="product-unit-price">
                <p>単価</p>
              </div>
              <div className="product-quantity">
                <p>量</p>
              </div>
              <div className="product-price">
                <p>価格</p>
              </div>
              <div className="product-delete"></div>
            </div>
            <hr />
            <div className="cart-product-list">
              <Cartsingleproduct
                image={P1}
                name="すのこベッド 【ショートセミシングル】 長さ180cm 木製 ベッドフレーム 耐荷重350kg 組立簡単 高さ4段階"
                price="12,730"
                quantity="1"
              />
              <Cartsingleproduct
                image={P2}
                name="三つ折りすのこマット シングル すのこマットのみ 木製 桐 完成品 低ホルムアルデヒド 軽量 二分割可能 布団が干せる"
                price="6,990"
                quantity="1"
              />
            </div>
            <hr />
            <div className="cart-btns">
              <Link to="/shop">ショッピングを続ける</Link>
              <Link to="/">チェックアウト</Link>
            </div>
          </div>

          <div className="cart-products-responsive">
            <div className="cart-product-list">
              <Cartsingleproductresponsive
                image={P1}
                name="すのこベッド 【ショートセミシングル】 長さ180cm 木製 ベッドフレーム 耐荷重350kg 組立簡単 高さ4段階"
                price="12,730"
                quantity="1"
              />
              <Cartsingleproductresponsive
                image={P2}
                name="三つ折りすのこマット シングル すのこマットのみ 木製 桐 完成品 低ホルムアルデヒド 軽量 二分割可能 布団が干せる"
                price="6,990"
                quantity="1"
              />
            </div>
            <hr />
            <div className="cart-btns">
              <Link to="/shop">ショッピングを続ける</Link>
              <Link to="/">チェックアウト</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
