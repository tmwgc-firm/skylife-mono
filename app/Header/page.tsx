// import Image from "next/image";
// import styles from "./header.module.css";
// import Link from "next/link";

// export default function Headerpage() {
//   return (
//     <div className={styles.top_header}>
//       <div className={styles.sub_header}>
//         <div className={styles.header}>
//           <div className={styles.header_images}>
//             <Image
//               className="img"
//               src="/Logo.svg"
//               alt="Logo image"
//               height={40}
//               width={190}
//             />
//           </div>
//           <div className={styles.header_image}>
//             <Image
//               className="img"
//               src="/Logo.svg"
//               alt="Logo image"
//               height={30}
//               width={150}
//             />
//           </div>
//           <div className={styles.header_button}>
//             <button>Get in touch</button>
//           </div>
//         </div>
//         <div className={styles.header_line}></div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import styles from "./header.module.css";

export default function page() {
  return (
    <div className={styles.top_header}>
      <div className={styles.sub_header}>
        <div className={styles.header}>
          <div className={styles.header_image}>
            <img src="/logo.svg" />
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
