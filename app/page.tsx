import Image from "next/image";
import styles from "./page.module.css";
import Headerpage from "./Header/page";
import Sections from "./Sections/page";


export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        < Headerpage />
        {/* first section of hero page */}
        <div className={styles.mobilehero}>
          <Image src={'/mobile-fam.svg'} alt="family image" height={300} width={360} />
        </div>
        <div className={styles.first_section}>

          <p className={styles.specialheading}>WELCOME TO SKY FINANCIAL</p>

          <h1>Life&apos;s a Journey,&nbsp; Fly Confidently&nbsp; with our&nbsp; Protection<span className={styles.dot}>.</span></h1>


          <div className={styles.heropara}>
            <p>At Sky Financial, we specialize in providing comprehensive&nbsp; life insurance and annuity options tailored to meet the&nbsp; unique needs of individuals across all age groups and&nbsp; income levels. As a licensed provider in all 50 states, we&nbsp; are dedicated to helping clients nationwide secure their&nbsp; financial futures with innovative insurance solutions.</p>
            <p>Explore our website to learn more about our products and how we can help you achieve peace of mind and financial security.</p>
          </div>

          <p className={styles.getintouch}>Get in touch <Image src='/Arrow 1.svg' alt="arrow image" width={24} height={12} /></p>
        </div>
      </div>

      < Sections />
    </div>



  );
}
