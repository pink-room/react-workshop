import React from 'react';
import 'views/assets/stylesheets/Image.css';

export const Image = ({image, selected, handleClick}) => {
  const selectedClass = selected && selected === image.url ? 'selected' : '';
  return (
    <div
      className={`Image ${selectedClass}`}
      onClick={e => handleClick(image, e)}>
      <span>{image.name}</span>
      <img src={image.url} alt="nice meme" />
    </div>
  );
};
