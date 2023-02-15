import React from "react";

//product gallery slider
import ImageGallery from 'react-image-gallery';

//product gallery slider css
import "react-image-gallery/styles/css/image-gallery.css";

//images
import Productimage from "../../assets/images/productimage.jpg";

const index = () => {

    const images = [
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
        {
            original: `${Productimage}`,
            thumbnail: `${Productimage}`,
        },
      ];


  return (
    <div className="product-img">
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showBullets={false} showNav={true} />
    </div>
  );
};

export default index;
