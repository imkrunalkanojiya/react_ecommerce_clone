import React from "react";
import { Link } from "react-router-dom";

//images
import Usericon from "../../assets/images/user.png";

const index = () => {
  return (
    <div id="registerpage">
      <div className="registerpage">
        <div className="registerpage-container">
          <div className="register-heading">
            <h1>登録</h1>
          </div>
          <hr />
          <div className="register-login-row">
            <div className="register-col">
              <div className="register-form">
                <div className="form">
                  <p>会員ID</p>
                  <input type="text" placeholder="会員ID" />
                  
                  <p>パスワード</p>
                  <input type="password" placeholder="パスワード" />
                  
                  <p>パスワード（確認）</p>
                  <input type="password" placeholder="パスワード（確認）" />

                  <p>メールアドレス</p>
                  <input type="email" placeholder="メールアドレス" />

                  <p>携帯アドレス（第2連絡先）</p>
                  <input type="number" placeholder="携帯アドレス（第2連絡先）" />

                  <p>お名前</p>
                  <input type="text" placeholder="お名前" />

                  <p>郵便番号</p>
                  <input type="text" placeholder="郵便番号" />

                  <p>都道府県</p>
                  <select>
                    <option>選択してください</option>
                  </select>

                  <p>市区郡</p>
                  <input type="text" placeholder="市区郡"/>
                  
                  <Link to="/">登録</Link>
                </div>
              </div>

              
            </div>
            <div className="login-col">
              <div className="user-icon">
                <img src={Usericon} alt="user" />
              </div>
              <div className="login-btn">
                <Link to="/login">ログイン</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
