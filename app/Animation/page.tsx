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
  const mobileimages = [
    { src: "/phoneone.svg", alt: "image4" },
    { src: "/phonetwo.svg", alt: "image5" },
    { src: "/phonethree.svg", alt: "image6" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2928);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % mobileimages.length);
    }, 2928);

    return () => clearInterval(interval);
  }, [mobileimages.length]);
  return (
    <>
      <div className="container">
        <div
          className={`image-container card ${
            currentImage === 0 ? "big" : "small"
          }`}
        >
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            width={446}
            height={371}
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
            width={446}
            height={371}
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
            width={446}
            height={371}
          />
        </div>
      </div>
      <div className="container-one">
        <div
          className={`image-container card ${
            currentImage === 0 ? "big" : "small"
          }`}
        >
          <Image
            src={mobileimages[currentImage].src}
            alt={mobileimages[currentImage].alt}
            width={446}
            height={371}
          />
        </div>

        <div
          className={`image-container card-two ${
            currentImage === 1 ? "big" : "small"
          }`}
        >
          <Image
            src={mobileimages[(currentImage + 1) % images.length].src}
            alt={mobileimages[(currentImage + 1) % images.length].alt}
            width={446}
            height={371}
          />
        </div>

        <div
          className={`image-container card-three ${
            currentImage === 2 ? "big" : "small"
          }`}
        >
          <Image
            src={mobileimages[(currentImage + 2) % images.length].src}
            alt={mobileimages[(currentImage + 2) % images.length].alt}
            width={446}
            height={371}
          />
        </div>
      </div>
    </>
  );
};
export default Animation;
