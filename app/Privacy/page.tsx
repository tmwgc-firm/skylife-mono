import styles from "./privacy.module.css";
import Headerpage from "../Header/page";
import Link from 'next/link';

export default function page() {
    return (
        <div className={styles.linkpage1}>
            <Headerpage />
            <div className={styles.privacy}>
                <div className={styles.minihead}>
                    <p><Link href='/' className={styles.dot}>Home  </Link> &gt;   Privacy policy</p>


                    <h2>Privacy & Other policies<span className={styles.dot}>.</span></h2>

                    <p>At <span className={styles.dot}>SKY FIANCIAL</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.</p>
                </div>

                <div className={styles.maingrid}>
                    <div className={styles.subgrid}>
                        <div className={styles.leftgrid}>
                            <h4>Information Collection</h4>

                            <p>We collect personal information such as name, contact details, and demographic data when you voluntarily provide it to us. Additionally, we may automatically collect certain information through cookies and similar technologies to enhance your browsing experience.</p>

                        </div>

                        <div className={styles.rightgrid}>
                            <h4>Use of Information</h4>

                            <p>We use the information we collect to provide you with the products and services you request, personalize your experience, and communicate with you about relevant offers and updates. Your data may also be used for internal purposes such as analytics and improving our services.</p>

                        </div>
                    </div>

                    <div className={styles.subgrid}>
                        <div className={styles.leftgrid}>
                            <h4>Data Security</h4>

                            <p>We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

                        </div>

                        <div className={styles.rightgrid}>
                            <h4>Third-Party Disclosure</h4>

                            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to trusted third parties who assist us in operating our website or servicing you.</p>

                        </div>

                    </div>

                    <div className={styles.subgrid}>
                        <div className={styles.leftgrid}>
                            <h4>Your Rights</h4>

                            <p>You have the right to access, correct, or delete your personal information held by us. You may also opt out of receiving marketing communications from us at any time.</p>

                        </div>

                        <div className={styles.rightgrid}>
                            <h4>Policy Updates</h4>

                            <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly for any updates.</p>

                        </div>

                    </div>


                </div>
            </div>
        </div>


    )
}