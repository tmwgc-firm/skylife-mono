"use client";
import "./animation.css";
import Image from "next/image";

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
  }, [images.length]);

  return (
    <div className="container">
      <div
        className={`image-container card ${
          currentImage === 0 ? "big" : "small"
        }`}
      >
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          width={500}
          height={300}
        />
      </div>

      <div
        className={`image-container card-two ${
          currentImage === 1 ? "big" : "small"
        }`}
      >
        <Image
          src={images[(currentImage + 1) % images.length].src}
          alt={images[(currentImage + 1) % images.length].alt}
        />
      </div>

      <div
        className={`image-container card-three ${
          currentImage === 2 ? "big" : "small"
        }`}
      >
        <Image
          src={images[(currentImage + 2) % images.length].src}
          alt={images[(currentImage + 2) % images.length].alt}
        />
      </div>
    </div>
  );
};
export default Animation;
