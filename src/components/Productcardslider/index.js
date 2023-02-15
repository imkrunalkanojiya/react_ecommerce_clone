import React from "react";
import Slider from "react-slick";

//productcardview
import Productcard from "../Productcard/index"

//slickslider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import Bedding1 from "../../assets/images/bedding1.jpg";
import Bedding2 from "../../assets/images/bedding2.jpg";
import Bedding3 from "../../assets/images/bedding3.jpg";
import Bedding4 from "../../assets/images/bedding4.jpg";
import Bedding5 from "../../assets/images/bedding5.jpg";
import Bedding6 from "../../assets/images/bedding6.jpg";

const index = () => {
  
//slider settings
const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows:true,
    autoplay:true,
    autoplaySpeed:4000,
    lazyLoad:true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="product-slider-container">
      <div className="single-product">
        <Productcard image={Bedding1} name="布団セット" />
      </div>
      <div className="single-product">
        <Productcard image={Bedding2} name="掛け布団カバー" />
      </div>
      <div className="single-product">
        <Productcard image={Bedding3} name="布団カバーセット" />
      </div>
      <div className="single-product">
        <Productcard image={Bedding4} name="寝具セット" />
      </div>
      <div className="single-product">
        <Productcard image={Bedding5} name="ベッドパッド" />
      </div>
      <div className="single-product">
        <Productcard image={Bedding6} name="シーツ" />
      </div>
    </Slider>
  );
};

export default index;
