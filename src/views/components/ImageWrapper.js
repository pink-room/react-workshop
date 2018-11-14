import React from 'react';
import {Image} from 'views/components/Image';

export const ImageWrapper = ({images}) => {
  return (
    <div className="ImageWrapper">
      {images.map(image => (
        <Image image={image} />
      ))}
    </div>
  );
};
