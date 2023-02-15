import React from "react";

//components
import Shopsidebar from "../../components/Shopsidebar/index";
import Shopproducts from "../../components/Shopproducts/index";
// import Breadcrumbs from "../../components/Breadcrumbs/index";

const index = () => {
  return (
    <div id="shoppage">
      <div className="shoppage">
        {/* <div className="breadcrumbs">
          <Breadcrumbs />
        </div> */}
        <div className="shoppage-container">
          <div className="shoppage-row">
            <div className="shoppage-left">
              <Shopsidebar />
            </div>
            <div className="shoppage-right">
              <Shopproducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
