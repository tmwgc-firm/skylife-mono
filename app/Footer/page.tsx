// import Image from "next/image";
// import styles from "./footer.module.css";
// import Link from "next/link";

// export default function Footerpage() {
//   return (
//     <div className={styles.footer_parent}>
//       <div className={styles.footer}>
//         <div>
//           <Image
//             src={"/footlogo.svg"}
//             alt="footer logo"
//             width={90}
//             height={108}
//           />
//         </div>
//         <div className={styles.code}></div>
//         <div className={styles.footer_center}>
//           <p>
//             Welcome to <span className={styles.dot}>SKY FINANCIAL</span>, where
//             we prioritize protecting your future above all else. Our About Us
//             section offers a glimpse into who we are, our values, and why were
//             dedicated to ensuring your peace of mind. Meet our experienced team,
//             learn about our history, and discover how our personalized approach
//             to life insurance can safeguard your loved ones financial security.
//             At [Agency Name], were here to guide you toward a future of
//             confidence and security.
//           </p>
//         </div>
//         <div className={styles.code}></div>
//         <div className={styles.image_row}>
//           <div className={styles.image_number}>
//             <Image
//               src={"/phone (1).svg"}
//               alt="phone image"
//               width={20}
//               height={20}
//             />
//             <p>586-907-8700</p>
//           </div>
//           <div className={styles.image_number}>
//             <Image
//               src={"/mail (1).svg"}
//               alt="mail image"
//               width={20}
//               height={20}
//             />
//             <p>sam@sky.financial</p>
//           </div>
//           <div className={styles.image_number}>
//             <Image
//               src={"/map-pin.svg"}
//               alt="phone image"
//               width={20}
//               height={20}
//             />
//             <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
//           </div>
//         </div>
//       </div>
//       <div className={styles.sub_footer}>
//         <div className={styles.sub_footer_rights}>
//           <p>© 2024 SKY FINANCIAL, New York, NY. All Rights Reserved.</p>
//         </div>
//         <div className={styles.sub_footer_terms}>
//           <Link href="/Terms">Terms of use</Link>
//           <Link href="Privacy">Privacy & Other policies</Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export default function page() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_one}>
        <div className={styles.footer_top}>
          <img src="/footer-logo.svg" id="img-desk" />
          <img src="/logo.svg" id="img-mob" />

          <p>
            Welcome to <span>SKY FINANCIAL</span>, where we prioritize
            protecting your future above all else. Our About Us section offers a
            glimpse into who we are, our values, and why we're dedicated to
            ensuring your peace of mind. Meet our experienced team, learn about
            our history, and discover how our personalized approach to life
            insurance can safeguard your loved ones' financial security. At
            [Agency Name], we're here to guide you toward a future of confidence
            and security.
          </p>
          <div className={styles.footer_details}>
            <div className={styles.footer_phone}>
              <img src="/footer-phone.svg" alt="" />
              <p>586-907-8700</p>
            </div>
            <div className={styles.footer_mail}>
              <img src="/footer-mail.svg" alt="" />
              <p>sam@sky.financial</p>
            </div>
            <div className={styles.footer_map}>
              <img src="/footer-map.svg" alt="" />
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
