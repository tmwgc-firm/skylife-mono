import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Headerpage() {
    return (
        <div className={styles.header}>
        <Link href='./'><Image src='/Logo.svg' alt="Logo image" height={40} width={190} /></Link>

        <button>Get in touch</button>
      </div>
    )
}