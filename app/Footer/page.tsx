import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_one}>
        <div className={styles.footer_top}>
          <Image
            src="/footer-logo.svg"
            id="img-desk"
            alt="footerlogo"
            width={190}
            height={40}
          />
          <Image
            src="/logo.svg"
            id="img-mob"
            alt="footerlogo"
            width={190}
            height={40}
          />

          <p>
            Welcome to <span>SKY FINANCIAL</span>, where we prioritize
            protecting your future above all else. Our About Us section offers a
            glimpse into who we are, our values, and why we&apos;re dedicated to
            ensuring your peace of mind. Meet our experienced team, learn about
            our history, and discover how our personalized approach to life
            insurance can safeguard your loved ones&apos; financial security. At
            [Agency Name], we&apos;re here to guide you toward a future of
            confidence and security.
          </p>
          <div className={styles.footer_details}>
            <div className={styles.footer_phone}>
              <Image
                src="/footer-phone.svg"
                alt="phone"
                width={20}
                height={20}
              />
              <p>586-907-8700</p>
            </div>
            <div className={styles.footer_mail}>
              <Image src="/footer-mail.svg" alt="mail" width={20} height={20} />
              <p>sam@sky.financial</p>
            </div>
            <div className={styles.footer_map}>
              <Image src="/footer-map.svg" alt="map" width={20} height={20} />
              <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_copyright}>
          <p>© 2024 SKY FINANCIAL, New York, NY. All Rights Reserved</p>
        </div>
        <div className={styles.footer_navigate}>
          <ul>
            <li>
              <Link href="/Terms" id="terms-link">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/Privacy" id="privacy-link">
                Privacy & Other policies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
