import React from 'react';
import 'views/assets/stylesheets/Image.css';

export const Image = ({image}) => {
  return (
    <div className="Image">
      <span>{image.name}</span>
      <img src={image.url} alt="nice meme" />
    </div>
  );
};
