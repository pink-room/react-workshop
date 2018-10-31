import React from 'react';
import 'views/assets/stylesheets/Image.css';

export const Image = ({ name, url, selected }) => {
  const selectedClass = selected ? 'selected' : '';
  return (
    <div className={`Image ${selectedClass}`}>
      <span>{name}</span>
      <img src={url} alt='nice meme' />
    </div>
  );
};
