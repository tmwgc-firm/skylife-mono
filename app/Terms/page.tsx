import styles from "./terms.module.css";
import Headerpage from "../Header/page";
import Link from 'next/link';

export default function page() {
    return (
        <div className={styles.linkpage1}>
            <Headerpage />
            <div className={styles.terms}>
                <div className={styles.minihead}>
                    <p><Link href='/' className={styles.dot}>Home  </Link>&gt;  Privacy policy</p>


                    <h2>Terms of use<span className={styles.dot}>.</span></h2>
                </div>

                <div className={styles.maingrid}>
                    <div className={styles.subgrid}>
                        <div className={styles.leftgrid}>
                            <h4>Acceptance of Terms</h4>

                            <p>By accessing this website, you agree to be bound by these terms and conditions of use.</p>

                        </div>

                        <div className={styles.rightgrid}>
                            <h4>Limitation of Liability</h4>

                            <p>We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website.</p>

                        </div>
                    </div>

                    <div className={styles.subgrid}>
                        <div className={styles.leftgrid}>
                            <h4>Use of Information</h4>

                            <p>The information provided on this website is for general informational purposes only and should not be construed as professional advice. We recommend consulting with a licensed insurance agent or financial advisor regarding specific insurance needs..</p>

                        </div>

                        <div className={styles.rightgrid}>
                            <h4>Accuracy of Information</h4>

                            <p>We strive to ensure the accuracy and timeliness of information presented on this website. However, we make no warranties or representations regarding the accuracy, completeness, or reliability of any information provided.</p>

                        </div>

                    </div>

                    <div className={styles.subgrid}>
                        <div className={styles.leftgrid}>
                            <h4>Privacy Policy</h4>

                            <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal information.</p>

                        </div>

                        <div className={styles.rightgrid}>
                            <h4>Intellectual Property</h4>

                            <p>All content, logos, and trademarks displayed on this website are the property of their respective owners and may not be used without prior written permission.</p>

                        </div>

                    </div>

                    
                    <div className={styles.subgrid}>
                        <div className={styles.leftgrid}>
                            <h4>Third-Party Links</h4>

                            <p>This website may contain links to third-party websites for your convenience. We do not endorse or control the content of these websites and are not responsible for any information or services provided by them.</p>

                        </div>

                        <div className={styles.rightgrid}>
                            <h4>Changes to Terms</h4>

                            <p>We reserve the right to modify or update these terms and conditions at any time without prior notice. Your continued use of the website after such changes constitutes acceptance of the updated terms</p>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}