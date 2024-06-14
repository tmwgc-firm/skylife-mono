import Image from "next/image";
import styles from "./header.module.css";

export default function Headerpage() {
    return (
        <div className={styles.header}>
        <Image src='/Logo.svg' alt="Logo image" height={40} width={190} />

        <button>Get in touch</button>
      </div>
    )
}