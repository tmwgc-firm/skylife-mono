import Image from "next/image";
import styles from "./page.module.css";
import Headerpage from "./Header/page";
import Sections from "./Sections/page";
import "./globals.css";

export default function Home() {
  return (
    <div className={styles.overall}>
      <div className={styles.wholepage}>
        <div className={styles.hero}>
          <Headerpage />
          {/* first section of hero page */}
          <div className={styles.mobilehero}>
            <Image
              src={"/mobile-fam.svg"}
              alt="family image"
              height={300}
              width={360}
            />
          </div>
          <div className={styles.desktop_color}>
            <div className={styles.left_grid}>
              <div className={styles.left_content_banner}>
                <div className={styles.left_line}>
                  <p>WELCOME TO SKY FINANCIAL</p>
                </div>
              </div>
              <div className={styles.left_container_roboto}>
                <h1>
                  Lifes a Journey, Fly Confidently with our Protection
                  <span className={styles.dot}>.</span>
                </h1>
              </div>

              <div className={styles.left_grid_para}>
                <p>
                  At Sky Financial, we specialize in providing comprehensive
                  life insurance and annuity options tailored to meet the unique
                  needs of individuals across all age groups and income levels.
                  As a licensed provider in all 50 states, we are dedicated to
                  helping clients nationwide secure their financial futures with
                  innovative insurance solutions.
                </p>
                <p>
                  Explore our website to learn more about our products and how
                  we can help you achieve peace of mind and financial security.
                </p>
              </div>
              <div className={styles.left_grid_get}>
                <p>Get in touch</p>
                <Image src={"/arrow.svg"} width={30} height={30} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tab_color}>
          <div className={styles.left_grid}>
            <div className={styles.left_content_banner}>
              <div className={styles.left_line}>
                <p>WELCOME TO SKY FINANCIAL</p>
              </div>
            </div>
            <div className={styles.left_container_roboto}>
              <h1>
                Lifes a Journey, Fly Confidently with our Protection
                <span className={styles.dot}>.</span>
              </h1>
            </div>

            <div className={styles.left_grid_para}>
              <p>
                At Sky Financial, we specialize in providing comprehensive life
                insurance and annuity options tailored to meet the unique needs
                of individuals across all age groups and income levels. As a
                licensed provider in all 50 states, we are dedicated to helping
                clients nationwide secure their financial futures with
                innovative insurance solutions.
              </p>
              <p>
                Explore our website to learn more about our products and how we
                can help you achieve peace of mind and financial security.
              </p>
            </div>
            <div className={styles.left_grid_get}>
              <p>Get in touch</p>

              <Image src={"/arrow.svg"} width={50} height={50} alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <Sections />
    </div>
  );
}
