import Image from "next/image";
import styles from "./section.module.css";

export default function page() {
  return (
    // second section of lander page
    <div>
      <div className={styles.secondsection}>
        <div className={styles.aboutus}>
          <div className={styles.Animation}>
            <Image src={'/1.svg'} alt="transition picture" height={443.55} width={446.14} />
          </div>

          <div>
            <span className={styles.line}></span>
            <p className={styles.specialheading}>WHO WE ARE?</p>
            <span className={styles.line}></span>

            <h1>Your Trusted Insurance Partner<span className={styles.dot}>.</span></h1>

            <p>Sky Financial is a leading provider of life insurance and annuity solutions nationwide. With years of experience helping clients achieve financial security, we have earned a reputation for excellence and reliability in the insurance industry.</p>
            <p>Our dedicated team of agents is committed to providing personalized service and innovative solutions tailored to meet the unique needs of each client. We understand that every individual's financial situation is different, and we take the time to listen and recommend the best options for your needs and goals.</p>
            <p>At Sky Financial, we are passionate about helping our clients secure their financial futures and enjoy peace of mind knowing that their loved ones are protected.</p>
          </div>
        </div>

        <div className={styles.roadmap}>
          <div className={styles.route}>

          </div>

          <div className={styles.grids}>
            <div className={styles.grid1}>
              <div className={styles.text}>
                <Image src={'/grid1.svg'} alt="annunities image" width={64} height={64} />

                <p>Annuities</p>

                <h3>Secure Your Retirement</h3>

                <p>Planning for retirement is a crucial step in achieving long-term financial security. Annuities offer a reliable way to generate guaranteed income for life, ensuring that you can enjoy your retirement years with confidence.</p>

                <p>At Sky Financial, we specialize in annuity products tailored to the needs of high net worth individuals. Our exclusive offerings provide competitive returns and tax advantages, allowing you to maximize your retirement savings and enjoy a worry-free future.</p>

                <p>Whether you're looking for immediate income or a deferred annuity to supplement your retirement savings, our team of experts will help you navigate the options and find the right solution for your needs.</p>
              </div>

            </div>

            <div className={styles.grid2}>
              <div className={styles.text2}>
                <Image src={'/grid2.svg'} alt="insurance picture" width={64} height={64} />

                <p>Life Insurance</p>

                <h3>Protecting What Matters Most</h3>

                <p>Comprehensive Coverage for Peace of Mind: Our life insurance plans offer robust protection, ensuring you and your family can face life's uncertainties with confidence.</p>

                <p>Whether you're a young family just starting out or a retiree looking to leave a legacy, our experienced agents will work closely with you to understand your needs and goals, and recommend a policy that fits your budget and lifestyle.</p>

                <p>With Sky Financial, you can rest assured that your loved ones will be taken care of no matter what the future holds.</p>
              </div>

            </div>

            <div className={styles.grid1}>
              <div className={styles.text}>
                <Image src={'/grid3.svg'} alt="tax benefit image" height={64} width={64} />

                <p>Tax Benefit Programs</p>

                <h3>Maximize Your Savings</h3>

                <p>Life insurance and annuities offer significant tax benefits that can help you maximize your savings and minimize your tax liability. With life insurance, the death benefit is typically paid out to your beneficiaries tax-free, providing them with financial security without the burden of taxes.</p>

                <p>Similarly, annuities offer tax-deferred growth, meaning you won't pay taxes on your earnings until you start receiving income. This allows your retirement savings to grow faster and gives you more control over when you pay taxes.</p>

                <p>At Sky Financial, we can help you take advantage of these tax benefit programs and create a comprehensive financial strategy that minimizes your tax liability while maximizing your savings potential.</p>
              </div>

            </div>
          </div>


        </div>
      </div>

    {/* third section of lander page */}

      <div className={styles.thirdsection}>
        <div className={styles.getstarted}>

          <p className={styles.specialheading}>GET STARTED TODAY</p>

          <h2>Ready to take the next step towards financial security?</h2>

          <p>Contact <span className={styles.inline}>SKY FINANCIAL</span> today to schedule a consultation with one of our experienced agents. We're here to answer your questions, address your concerns, and help you find the perfect insurance solutions for your needs.</p>


        </div>

        <div className={styles.form}>


        </div>
      </div>
    </div>
  );
}