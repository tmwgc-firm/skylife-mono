import React from 'react';
import termsData from './terms.json'; 
import styles from "./terms.module.css";
import Headerpage from "../Header/page";
import Link from 'next/link';

// Define a type for the terms data
interface Term {
  [key: string]: string | undefined;
}

const Page: React.FC = () => {
  return (
    <div className={styles.linkpage1}>
      <Headerpage />
      <div className={styles.terms}>
        <div className={styles.minihead}>
          <p><Link href='/' className={styles.dot}>Home  </Link>&gt;  Terms & conditions</p>
          <h2>Terms of use<span className={styles.dot}>.</span></h2>
        </div>

        <div className={styles.maingrid}>
          {termsData.map((term: Term, index: number) => {
            const key = Object.keys(term)[0];
            const value = term[key];
            const isEven = index % 2 === 1; // Check if index is odd (adjusting for 0-based index)

            return (
              <div key={index} className={`${styles.subgrid} ${isEven ? styles.evenGrid : ''}`}>
                <div>
                  <h4>{key}</h4>
                  <p>{value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
