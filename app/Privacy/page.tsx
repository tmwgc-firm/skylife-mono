import React from 'react';
import privacyData from './privacy.json'; // Import the JSON data
import styles from "./privacy.module.css";
import Headerpage from "../Header/page";
import Link from 'next/link';

// Define a type for each item in privacyData
interface PrivacySection {
    title: string;
    content: string;
}

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className={styles.linkpage1}>
            <Headerpage />
            <div className={styles.privacy}>
                <div className={styles.minihead}>
                    <p><Link href='/' className={styles.dot}>Home </Link>&gt; Privacy policy</p>
                    <h2>Privacy & Other policies<span className={styles.dot}>.</span></h2>
                    <p>At <span className={styles.dot}>SKY FINANCIAL</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.</p>
                </div>

                <div className={styles.maingrid}>
                    {privacyData.map((section: PrivacySection, index: number) => (
                        <div key={index} className={`${styles.subgrid} ${index % 2 === 0 ? styles.oddGrid : styles.evenGrid}`}>
                            <div className={styles.gridContent}>
                                <h4>{section.title}</h4>
                                <p>{section.content}</p>
                            </div>
                            {index % 2 !== 0 && (
                                <div className={styles.gridContent}>
                                    {/* Placeholder for right column, can be empty */}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicyPage;
