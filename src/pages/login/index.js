import React from "react";
import { Link } from "react-router-dom";

//images
import Usericon from "../../assets/images/user.png"

const index = () => {
  return (
    <div id="loginpage">
      <div className="loginpage">
        <div className="loginpage-container">
          <div className="login-heading">
            <h1>ログイン</h1>
          </div>
          <hr />
          <div className="login-register-row">
            <div className="login-col">
              <div className="heading-subtext">
                <h4>いらっしゃいませ！</h4>
                <p>いつもご利用ありがとうございます。</p>
              </div>
              <div className="login-form">
                <div className="form">
                  <input type="text" placeholder="会員ID" />
                  <input type="password" placeholder="パスワード" />
                  <Link to="/">ログイン</Link>
                </div>
              </div>
            </div>
            <div className="register-col">
                <div className="user-icon">
                    <img src={Usericon} alt="user" />
                </div>
                <div className="register-btn">
                <Link to="/register">登録</Link>
                </div>
                <div className="heading-text">
                    <ul>
                        <li>会員になりますとお買い物の際に、住所を入力する手間がかかりません。 ぜひご登録ください！</li>
                        <li>新規会員登録時の500ポイントを利用される場合は、ご注文の際に忘れずにご入力ください。恐れ入りますがご注文後の訂正はお受けできません。</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
