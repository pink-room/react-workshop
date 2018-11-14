import React from 'react';
import {Image} from 'views/components/Image';

export const ImageWrapper = ({images, passOnClick, selectedImage}) => {
  return (
    <div className="ImageWrapper">
      {images.map(image => (
        <Image
          key={image.url}
          handleClick={passOnClick}
          image={image}
          selected={selectedImage}
        />
      ))}
    </div>
  );
};
