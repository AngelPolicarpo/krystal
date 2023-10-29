'use client';
import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusDivs = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <div>
      <div className="carouselImages" style={{ display: 'block' }}>
        {images[slideIndex]}
      </div>
      <button id='prevBtn' onClick={() => plusDivs(-1)}>&#10094;</button>
      <button id='nextBtn' onClick={() => plusDivs(1)}>&#10095;</button>
    </div>
  );
}
