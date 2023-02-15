import React from "react";
import { Link } from "react-router-dom";

// Images
import Topbarimage from "../../assets/images/point5up.png";
import Logo from "../../assets/images/logo-demo.png";
import Accountlogo from "../../assets/images/user.png";
import Cart from "../../assets/images/cart.png";
import Searchicon from "../../assets/images/search.png";
import Searchiconwhite from "../../assets/images/search-white.png";


//animation
import { Fade } from "react-awesome-reveal";

const index = () => {
  return (
    <Fade>
      <div id="header">
        <div className="topbar">
          <div
            className="topbar-container"
            style={{ backgroundImage: `url(${Topbarimage})` }}
          ></div>
        </div>
        <div className="middlebar">
          <div className="middlebar-container">
            <div className="row">
              <div className="logo-col">

                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="searchbar-col">
                <select>
                  <option>すべて</option>
                  <option disabled style={{backgroundColor:'#000',color:'#fff'}}>+ ベッドサイズから選ぶ</option>
                  <option>ベッド|セミシングル</option>
                  <option>ベッド|シングル</option>
                  <option>ベッド|セミダブル</option>
                  <option>ベッド|ダブル</option>
                  <option>ベッド|クイーンサイズ</option>
                  <option>ベッド|キングサイズ</option>
                  <option disabled style={{backgroundColor:'#000',color:'#fff'}}>+ ベッド種類から選ぶ</option>
                  <option>ベッド|収納ベッド</option>
                  <option>ベッド|すのこベッド</option>
                  <option>ベッド|棚付きベッド</option>
                  <option>ベッド|ローベッド</option>
                  <option>ベッド|2段ベッド</option>
                  <option>ベッド|折りたたみベッド</option>
                  <option>ベッド|ロフトベッド</option>
                  <option>ベッド|ソファベッド</option>
                  <option>ベッド|跳ね上げ式ベッド</option>
                  <option>ベッド|脚付きマットレスベッド</option>
                  <option>ベッド|パネル型ベッド</option>
                  <option>ベッド|電動ベッド</option>
                  <option disabled style={{backgroundColor:'#000',color:'#fff'}}>+ ベッド素材から選ぶ</option>
                  <option>ベッド|畳ベッド</option>
                  <option>ベッド|木製ベッド</option>
                  <option>ベッド|アイアンベッド</option>
                  <option>ベッド|レザーベッド</option>
                  <option disabled style={{backgroundColor:'#000',color:'#fff'}}>+ マットレスサイズから選ぶ</option>
                  <option>マットレス</option>
                  <option>マットレス|セミシングル</option>
                  <option>マットレス|シングル</option>
                  <option>マットレス|セミダブル</option>
                  <option>マットレス|ダブル</option>
                  <option>マットレス|クイーンサイズ</option>
                  <option>マットレス|キングサイズ</option>
                </select>
                <input type="text" placeholder="キーワードを入力してください" />
                <div className="search-icon">
                  <img src={Searchicon} alt="search" />
                </div>
              </div>
              <div className="cart-col">
                <Link to="/login" className="account-block">
                  <img src={Accountlogo} alt="user" />
                  <p>ログイン</p>
                </Link>
                <Link to="/cart" className="cart-block">
                  <img src={Cart} alt="cart" />
                  <p>カート</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="middlebar-tablet">
          <div className="middlebar-container-logo">
            <div className="logo-col">
              
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="cart-col">
              <Link to="/login" className="account-block">
                <img src={Accountlogo} alt="user" />
                <p>ログイン</p>
              </Link>
              <Link to="/cart" className="cart-block">
                <img src={Cart} alt="cart" />
                <p>カート</p>
              </Link>
              <Link className="search-icon">
                <img src={Searchiconwhite} alt="white-icon" />
                <p>探す</p>
              </Link>
            </div>
          </div>
          <div className="middlebar-container-search">
            <div className="searchbar">
              <select>
                <option>すべて</option>
              </select>
              <input type="text" placeholder="キーワードを入力してください" />
              <div className="search-icon">
                <img src={Searchicon} alt="search" />
              </div>
            </div>
          </div>
        </div>

        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/shop/product">Product</Link>
          </li>
        </ul> */}
      </div>
    </Fade>
  );
};

export default index;
