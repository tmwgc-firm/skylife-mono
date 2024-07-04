"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [isClick, setIsClick] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  const [data, setData] = useState<any[]>([]);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const handleClickUpload = (): void => {
    setData([]);
    setIsUploaded(true);
  };

  useEffect(() => {
    const scrollButton = document.getElementById("scrollButton");

    const scrollToFormPage = () => {
      const formPage = document.getElementById("formPage")?.offsetTop;

      window.scrollTo({
        top: formPage,
        behavior: "smooth",
      });
    };

    if (scrollButton) {
      scrollButton.addEventListener("click", scrollToFormPage);
      return () => {
        scrollButton.removeEventListener("click", scrollToFormPage);
      };
    }
  }, []);

  return (
    <div className={styles.top_header}>
      <div className={styles.sub_header}>
        <div className={styles.header}>
          <div className={styles.header_image}>
            <Link href="/">
              <Image src="/logo.svg" alt="headerlogo" width={152} height={32} />
            </Link>
          </div>
          <div className={styles.header_pages}>
            <Link href="/">
              {" "}
              <p>Home</p>
            </Link>
            <p>About us</p>
            <Link href="/Blog">
              <p>Blog</p>
            </Link>
          </div>
          <div className={styles.header_button}>
            <button className={styles.scroll} id="scrollButton">
              Get in touch
            </button>
            <button className={styles.toggle} onClick={toggleNavbar}>
              {isClick ? (
                <Image
                  src={"/Icons/Close.svg"}
                  alt="close"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src={"/Icons/menu.svg"}
                  alt="open"
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
        </div>
        {isClick && (
          <div
            className={`${styles.mobile_menu} ${isClick ? styles.active : ""}`}
          >
            <div className={styles.mobile_grid}>
              <div className={styles.menus}>
                <div className={styles.home}>
                  <Image
                    src={"Icons/home.svg"}
                    alt="home"
                    width={20}
                    height={20}
                  />
                  <Link href="/">Home</Link>
                </div>

                <div className={styles.home_blog}>
                  <Link href="/Blog">
                    <Image
                      src={"Icons/blog.svg"}
                      alt="home"
                      width={20}
                      height={20}
                    />
                    <p>Blog</p>
                  </Link>
                </div>
              </div>
              <div className={styles.header_footer}>
                <div className={styles.mobile_rights}>
                  <p>
                    © 2024 SKY FINANCIAL, New York, NY. All Rights Reserved.
                  </p>
                </div>
                <div className={styles.mobile_terms_policie}>
                  <p>Terms of use</p>
                  <p>Privacy & Other policies</p>
                </div>
                <div className={styles.mobile_getintouch}>
                  <button>Get in touch</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className={styles.header_line}></div> */}
      </div>
    </div>
  );
}
