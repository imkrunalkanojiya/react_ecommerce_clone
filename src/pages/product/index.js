import React from "react";

//image
import Carticon from "../../assets/images/cart.png";
import Infoicon from "../../assets/images/information.png"

//components
import Productdetails from "../../components/Productdetails/index";
import Productdetailsimages from "../../components/Productdetailsimages/index";
import Productreviewsblock from "../../components/Productreviewsblock/index";
import Productinfoblock from "../../components/Productinfoblock/index";
import Productcardslider from "../../components/Productcardslider/index";
import Productnotesblock from "../../components/Productnotesblock/index"
import Productextrainfo from "../../components/Productextrainfo/index"

const index = () => {
  return (
    <div id="productpage">
      <div className="productpage">
        <div className="product-container">
          <div className="row">
            <Productdetailsimages />
            <Productdetails />
          </div>
        </div>
        <div className="product-info-container">
          <Productinfoblock />
        </div>
        <div className="product-notes-container">
          <div className="notes-heading">
            <img src={Infoicon} alt="note" />
            <h2>インフォメーション・注意事項</h2>
          </div>
          <hr />
          <Productnotesblock />
        </div>
        <div className="related-products-container">
          <div className="related-heading">
            <img src={Carticon} alt="info" />
            <h2>関連商品</h2>
          </div>
          <hr />
          <Productcardslider />
        </div>
        <div className="product-review-container">
          <Productreviewsblock />
          <hr />
        </div>
        <div className="product-extra-info">
          <Productextrainfo />
        </div>
      </div>
    </div>
  );
};

export default index;
