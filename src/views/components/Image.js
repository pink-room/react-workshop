import React from 'react';
import 'views/assets/stylesheets/Image.css';

export const Image = ({image, selected, onClick}) => {
  const selectedClass = selected && selected === image.url ? 'selected' : '';
  return (
    <div className={`Image ${selectedClass}`} onClick={onClick}>
      <span>{image.name}</span>
      <img src={image.url} alt="nice meme" />
    </div>
  );
};
