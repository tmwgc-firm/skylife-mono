"use client";
import "./animation.css";

import { useState, useEffect } from "react";

const Animation = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "/1.svg", alt: "image1" },
    { src: "/Group.svg", alt: "image2" },
    { src: "/groupone.svg", alt: "image3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2928);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div
        className={`image-container card ${
          currentImage === 0 ? "big" : "small"
        }`}
      >
        <img src={images[currentImage].src} alt={images[currentImage].alt} />
      </div>

      <div
        className={`image-container card-two ${
          currentImage === 1 ? "big" : "small"
        }`}
      >
        <img
          src={images[(currentImage + 1) % images.length].src}
          alt={images[(currentImage + 1) % images.length].alt}
        />
      </div>

      <div
        className={`image-container card-three ${
          currentImage === 2 ? "big" : "small"
        }`}
      >
        <img
          src={images[(currentImage + 2) % images.length].src}
          alt={images[(currentImage + 2) % images.length].alt}
        />
      </div>
    </div>
  );
};
export default Animation;
