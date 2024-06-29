import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.top_header}>
      <div className={styles.sub_header}>
        <div className={styles.header}>
          <div className={styles.header_image}>
            <Image src="/logo.svg" alt="headerlogo" width={152} height={32} />
          </div>
          <div className={styles.header_button}>
            <button>Get in touch</button>
          </div>
        </div>
        <div className={styles.header_line}></div>
      </div>
    </div>
  );
}
