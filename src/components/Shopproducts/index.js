import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import Detailproductcard from "../Detailproductcard/index";

//images
import P1 from "../../assets/images/p1.jpg";
import P2 from "../../assets/images/p2.jpg";
import P3 from "../../assets/images/p3.jpg";
import P4 from "../../assets/images/p4.jpg";
import P5 from "../../assets/images/p5.jpg";
import P6 from "../../assets/images/p6.jpg";
import P7 from "../../assets/images/p7.jpg";
import P8 from "../../assets/images/p8.jpg";
import P9 from "../../assets/images/p9.jpg";

import Menuicon from "../../assets/images/menu-icon.png";
import Closeicon from "../../assets/images/close-icon.png";
import Staricon from "../../assets/images/star.png";

const Shopproducts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleSidebarOpen = () => {
    setIsOpen(true);
  };
  const HandleSidebarClose = () => {
    setIsOpen(false);
  };

  const SidebarMenu = () => {
    return (
      <div className="sidebarmenu">
        <div className="heading">
          <div className="close-icon">
            <img
              src={Closeicon}
              alt="close-icon"
              onClick={HandleSidebarClose}
            />
          </div>
        </div>
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
              <Link to="/shop">ウォールナットベッド</Link>
            </div>
          </div>
        </div>

        <div className="product-filters">
          <hr />
          <div className="size-filter">
            <select defaultValue="All Sizes">
              <option>すべてのサイズ</option>
              <option>ショート</option>
              <option>セミシングル</option>
              <option>シングル</option>
              <option>セミダブル</option>
            </select>
          </div>
          <div className="order-filter">
            <select>
              <option>人気順</option>
              <option>新着順</option>
              <option>価格が安い順</option>
              <option>価格が高い順</option>
            </select>
          </div>
          <div className="condition-filter">
            <p>条件で絞り込み</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="shoppage-products">
      <div className="product-name-filters">
        <div className="hamburge-menu">
          <img src={Menuicon} alt="menu" onClick={HandleSidebarOpen} />
        </div>

        {/* sidebar section start */}
        {isOpen ? <SidebarMenu /> : ""}
        {/* sidebar section end */}

        <div className="product-name">
          <h2>ベッド</h2>
        </div>
        <div className="product-filters">
          <div className="size-filter">
            <select defaultValue="All Sizes">
              <option>すべてのサイズ</option>
              <option>ショート</option>
              <option>セミシングル</option>
              <option>シングル</option>
              <option>セミダブル</option>
            </select>
          </div>
          <div className="order-filter">
            <select>
              <option>人気順</option>
              <option>新着順</option>
              <option>価格が安い順</option>
              <option>価格が高い順</option>
            </select>
          </div>
          <div className="condition-filter">
            <p>条件で絞り込み</p>
          </div>
        </div>
      </div>
      <div className="divider">
        <hr />
      </div>
      <div className="products-best-selling">
        <div className="heading">
          <img src={Staricon} alt="star" />
          <h2>ベストセラーランキング</h2>
        </div>
        <div className="products-grid">
          <Detailproductcard
            image={P1}
            name="すのこベッド バノン セミダブル 木製ベッド マットレス付き ポケットコイルマットレス ふつう 組立簡単 ヘッドレス 一人暮らし 北欧"
            price="¥32,800"
          />
          <Detailproductcard
            image={P2}
            name="三つ折りすのこマット シングル すのこマットのみ 木製 桐 完成品 低ホルムアルデヒド 軽量 二分割可能 布団が干せる"
            price="¥6,990"
          />
          <Detailproductcard
            image={P3}
            name="ベッド 収納 シングルベッド マットレス付き 収納付き USBコンセント付き zesto ゼスト シングル 高密度バリューポケットコイルマットレス付き すのこベッド 引き出し付きベッド zesto 木製ベッド"
            price="¥28,300"
          />
          <Detailproductcard
          image={P4}
          name="ロフトベッド Ashley(アシュリー)高さ160.5cm ロフトベッド 木製ロフトベッド シングル 棚付き システムベッド 省スペースハシゴ  ナチュラル、ブラウン"
          price="¥39,900"
        />
        </div>
      </div>
      
      <div className="product-grid-heading">
        <h2>リレット商品</h2>
      </div>
      <div className="divider">
        <hr />
      </div>
      <div className="products-grid">
        <Detailproductcard
          image={P1}
          name="すのこベッド バノン セミダブル 木製ベッド マットレス付き ポケットコイルマットレス ふつう 組立簡単 ヘッドレス 一人暮らし 北欧"
          price="¥32,800"
        />
        <Detailproductcard
          image={P2}
          name="三つ折りすのこマット シングル すのこマットのみ 木製 桐 完成品 低ホルムアルデヒド 軽量 二分割可能 布団が干せる"
          price="¥6,990"
        />
        <Detailproductcard
          image={P3}
          name="ベッド 収納 シングルベッド マットレス付き 収納付き USBコンセント付き zesto ゼスト シングル 高密度バリューポケットコイルマットレス付き すのこベッド 引き出し付きベッド zesto 木製ベッド"
          price="¥28,300"
        />
        <Detailproductcard
          image={P4}
          name="ロフトベッド Ashley(アシュリー)高さ160.5cm ロフトベッド 木製ロフトベッド シングル 棚付き システムベッド 省スペースハシゴ  ナチュラル、ブラウン"
          price="¥39,900"
        />
        <Detailproductcard
          image={P5}
          name="すのこベッド シングル 木製ベッド マットレス…"
          price="¥26,300"
        />
        <Detailproductcard
          image={P6}
          name="木製 ロフトベッド Ashby(アシュビー)  シングル  シンプルデザイン オープンシェルフ 棚付き。ベッド下スペース有効活用 2段ベッド風 ブラウン ナチュラル 階段付き"
          price="¥46,900"
        />
        <Detailproductcard
          image={P7}
          name="すのこベッド クイーン 木製ベッド フレームのみ ベッドフレーム ローベッド 高さ調整 組立簡単 ヘッドレス 一人暮らし 北欧"
          price="¥27,900"
        />
        <Detailproductcard
          image={P8}
          name="すのこベッド シングル 木製ベッド フレームのみ ベッドフレーム ローベッド 高さ調整 組立簡単 ヘッドレス 一人暮らし 北欧"
          price="¥15,900"
        />
        <Detailproductcard
          image={P9}
          name="すのこベッド セミダブル 木製ベッド フレームのみ ベッドフレーム ローベッド 高さ調整 組立簡単 ヘッドレス 一人暮らし 北欧"
          price="¥19,400"
        />
      </div>
    </div>
  );
};

export default Shopproducts;
