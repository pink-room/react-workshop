import React from 'react';
import {Image} from 'views/components/Image';

export const ImageWrapper = ({images, handleClick, selectedImageUrl}) => {
  return (
    <div className="ImageWrapper">
      {images.map(image => (
        <Image
          key={image.url}
          handleClick={handleClick}
          image={image}
          selectedImageUrl={selectedImageUrl}
        />
      ))}
    </div>
  );
};
