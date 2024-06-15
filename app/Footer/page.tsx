import Image from "next/image";
import styles from "./footer.module.css";
import Link from 'next/link'

export default function Footerpage() {
    return (
        <div>
        <div className={styles.footer}>

          <Image src={'/footlogo.svg'} alt="footer logo" width={90} height={108} />
          <span className={styles.mobilefoot}><Image src={'/mobilefoot.svg'} alt="logo" height={40} width={190} /></span>
          <span className={styles.footerline}></span>

          <p>Welcome to <span className={styles.inline}>SKY FINANCIAL</span>, where we prioritize protecting your future above all else. Our About Us section offers a glimpse into who we are, our values, and why we&apos;re dedicated to ensuring your peace of mind. Meet our experienced team, learn about our history, and discover how our personalized approach to life insurance can safeguard your loved ones&apos; financial security. At [Agency Name], we&apos;re here to guide you toward a future of confidence and security.</p>

          <span className={styles.footerline}></span>

          <div className={styles.info}>
            <div className={styles.details}>
              <Image src={'/phone (1).svg'} alt="phone image" width={20} height={20} />
              <p>586-907-8700</p>
            </div>

            <div className={styles.details}>
              <Image src={'/mail (1).svg'} alt="mail image" width={20} height={20} />
              <p>sam@sky.financial</p>
            </div>

            <div className={styles.details}>
              <Image src={'/map-pin.svg'} alt="phone image" width={20} height={20} />
              <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
            </div>

          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            <p>© 2024 SKY FINANCIAL, New York, NY. All Rights Reserved.</p>
          </div>

          <div className={styles.terms}>
            <Link href='/Terms'><p className={styles.use}>Terms of use</p></Link>
            <Link href='/Privacy'><p>Privacy & Other policies</p></Link>
          </div>

        </div>

      </div>
    )
}