import React from 'react';
import '../styles/Gallery.css';

import ct1 from '../assets/gallery/ct1.jpg'
import ct2 from '../assets/gallery/ct2.jpg'
import ct3 from '../assets/gallery/ct3.jpg'
import ct4 from '../assets/gallery/ct4.jpg'
import ct5 from '../assets/gallery/ct5.jpeg'
import ct6 from '../assets/gallery/ct6.jpg'
import ct7 from '../assets/gallery/ct7.jpg'
import ct8 from '../assets/gallery/ct8.webp'
import ct9 from '../assets/gallery/ct9.jpg'
import ct10 from '../assets/gallery/ct10.jpg'




const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-slider">
        <img src={ct1} alt="Image 1" className="gallery-image" />
        <img src={ct2} alt="Image 2" className="gallery-image" />
        <img src={ct3} alt="Image 3" className="gallery-image" />
        <img src={ct4} alt="Image 4" className="gallery-image" />
        <img src={ct5} alt="Image 5" className="gallery-image" />
        <img src={ct6} alt="Image 6" className="gallery-image" />
        <img src={ct7} alt="Image 7" className="gallery-image" />
        <img src={ct8} alt="Image 8" className="gallery-image" />
        <img src={ct9} alt="Image 9" className="gallery-image" />
        <img src={ct10} alt="Image 10" className="gallery-image" />
       
      </div>
    </div>
  );
};

export default Gallery;