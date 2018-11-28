import React from 'react';
import 'views/assets/stylesheets/Image.css';

export const Image = ({image, selectedImageUrl, handleClick}) => {
  const selectedClass =
    selectedImageUrl && selectedImageUrl === image.url ? 'Image selected' : 'Image';
  return (
    <div
      className={`${selectedClass}`}
      onClick={e => handleClick(image, e)}>
      <span>{image.name}</span>
      <img src={image.url} alt="nice meme" />
    </div>
  );
};
