import React from "react";
import {Link} from "react-router-dom"

//productcard
import Productcard from "../../components/Productcard/index";
import Productcardslider from "../../components/Productcardslider/index"

//images
import Bed1 from "../../assets/images/bed1.jpg";
import Bed2 from "../../assets/images/bed2.jpg";
import Bed3 from "../../assets/images/bed3.jpg";
import Bed4 from "../../assets/images/bed4.jpg";
import Bed5 from "../../assets/images/bed5.jpg";
import Bed6 from "../../assets/images/bed6.jpg";
import Bed7 from "../../assets/images/bed7.jpg";
import Bed8 from "../../assets/images/bed8.jpg";

import Matt1 from "../../assets/images/matt1.jpg"
import Matt2 from "../../assets/images/matt2.jpg"
import Matt3 from "../../assets/images/matt3.jpg"
import Matt4 from "../../assets/images/matt4.jpg"
import Matt5 from "../../assets/images/matt5.jpg"
import Matt6 from "../../assets/images/matt6.jpg"
import Matt7 from "../../assets/images/matt7.jpg"
import Matt8 from "../../assets/images/matt8.jpg"

const index = () => {

  return (
    <>
      <div id="homepage">
        <div id="hero-section">
          <div className="hero-section-container">
            <div className="hero-heading">
              <h1>ネルコ家具へようこそ</h1>
              <Link to="/shop">続きを見る</Link>
            </div>
          </div>
        </div>
        <div id="products-section-bed">
          <div className="products-section-container">
            <div className="product-section-name">
              <h2>Bed</h2>
              <hr />
            </div>
            <div className="products-grid">
              <Productcard image={Bed1} name="ローベッド" />
              <Productcard image={Bed2} name="棚付きベッド" />
              <Productcard image={Bed3} name="収納ベッド" />
              <Productcard image={Bed4} name="すのこベッド" />
              <Productcard image={Bed5} name="折りたたみベッド" />
              <Productcard image={Bed6} name="跳ね上げベッド" />
              <Productcard image={Bed7} name="ロフトベッド" />
              <Productcard image={Bed8} name="畳ベッド" />
            </div>
            <div className="product-more-btn">
              <Link to="/shop">もっとベッドを見る</Link>
            </div>
          </div>
        </div>
        <div id="products-section-bedding">
          <div className="products-section-container">
            <div className="product-section-name">
              <h2>Bedding</h2>
              <hr />
            </div>
            <div className="product-grid-slider">
              <Productcardslider />
            </div>
            <div className="product-more-btn">
              <Link to="/shop">もっと寝具を見る</Link>
            </div>
          </div>
        </div>
        <div id="products-section-mattres">
          <div className="products-section-container">
            <div className="product-section-name">
              <h2>Mattress</h2>
              <hr />
            </div>
            <div className="products-grid">
              <Productcard image={Matt1} name="高反発マットレス" />
              <Productcard image={Matt2} name="折りたたみマットレス" />
              <Productcard image={Matt3} name="薄型マットレス" />
              <Productcard image={Matt4} name="セミシングルマットレス" />
              <Productcard image={Matt5} name="高密度スプリングマットレス" />
              <Productcard image={Matt6} name="ボンネルコイルマットレス" />
              <Productcard image={Matt7} name="ポケットコイルマットレス" />
              <Productcard image={Matt8} name="シングルマットレス" />
            </div>
            <div className="product-more-btn">
              <Link to="/shop">もっとマットレスを見る</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;