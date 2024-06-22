import React from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.slide}>
        <div className={styles.imageContainer}>
          <Image src="/group45.svg" alt="Image 1" layout="fill" className={styles.image} />
        </div>
      </div>
      <div className={styles.slide}>
        <div className={styles.imageContainer}>
          <Image src="/group46.svg" alt="Image 2" layout="fill" className={styles.image} />
        </div>
      </div>
      <div className={styles.slide}>
        <div className={styles.imageContainer}>
          <Image src="/group47.svg" alt="Image 3" layout="fill" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
