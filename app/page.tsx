import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "./Header/page";
import Form from "./Form/page";

import Link from "next/link";

export default function pages() {
  return (
    <>
      <div>
        {/* first phase */}
        <div>
          <div className={styles.img1}>
            <Header />
            <div className={styles.img1_mob}></div>
            <div className={styles.imagecontent}>
              <div className={styles.imagecontent_welcome}>
                <div className={styles.left_line}>
                  <p>WELCOME TO SKY FINANCIAL</p>
                </div>
                <h1>
                  Life's a Journey, Fly Confidently with our Protection
                  <span className={styles.dot}>.</span>
                </h1>
              </div>
              <div className={styles.imagecontent_para}>
                <p>
                  At Sky Financial, we specialize in providing comprehensive
                  life insurance and annuity options tailored to meet the unique
                  needs of individuals across all age groups and income levels.
                  As a licensed provider in all 50 states, we are dedicated to
                  helping clients nationwide secure their financial futures with
                  innovative insurance solutions.
                </p>
                <p>
                  Explore our website to learn more about our products and how
                  we can help you achieve peace of mind and financial security.
                </p>
              </div>
              <div className={styles.buttontwo}>
                <div className={styles.get_in}>
                  <p>Get in touch</p>
                </div>
                <div>
                  <img src="/Arrow.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second phase  */}
        <div className={styles.secondphase}>
          <div>
            <img src="/anime1.svg" />
            {/* <img src="/anime2-desk.svg" className="image" /> */}
            {/* <img src='/anime3-desk.svg'className='image'/>  */}
          </div>
          <div className={styles.secondphase_para}>
            <div className={styles.secondphase_subpara_one}>
              <div className={styles.left_line}>
                <p>WHO WE ARE?</p>
              </div>
              <p>
                Your Trusted Insurance Partner
                <span className={styles.dot_two}>.</span>
              </p>
            </div>
            <div className={styles.secondphase_subpara_two}>
              <p>
                Sky Financial is a leading provider of life insurance and
                annuity solutions nationwide. With years of experience helping
                clients achieve financial security, we have earned a reputation
                for excellence and reliability in the insurance industry.
              </p>
              <p>
                Our dedicated team of agents is committed to providing
                personalized service and innovative solutions tailored to meet
                the unique needs of each client. We understand that every
                individual's financial situation is different, and we take the
                time to listen and recommend the best options for your needs and
                goals.
              </p>
              <p>
                At Sky Financial, we are passionate about helping our clients
                secure their financial futures and enjoy peace of mind knowing
                that their loved ones are protected.
              </p>
            </div>
          </div>
        </div>
        {/* Third phase  */}
        <div className={styles.page_three}>
          <div className={styles.border}></div>

          <div className={styles.flex}>
            <div className={styles.flex_one}>
              <img src="/flow-group.svg" />
              <p>ANNUTIES</p>
              <p>Secure Your Retirement</p>
              <p>
                Planning for retirement is a crucial step in achieving long-term
                financial security. Annuities offer a reliable way to generate
                guaranteed income for life, ensuring that you can enjoy your
                retirement years with confidence.
              </p>
              <p>
                At Sky Financial, we specialize in annuity products tailored to
                the needs of high net worth individuals. Our exclusive offerings
                provide competitive returns and tax advantages, allowing you to
                maximize your retirement savings and enjoy a worry-free future.
              </p>
              <p>
                Whether you're looking for immediate income or a deferred
                annuity to supplement your retirement savings, our team of
                experts will help you navigate the options and find the right
                solution for your needs.
              </p>
            </div>
            <div className={styles.flextwoline}>
              <div className={styles.blueline}></div>
              <div className={styles.flex_two}>
                <img src="/flow-hand-holding-heart.svg" />
                <p>LIFE INSURANCE</p>
                <p>Protecting What Matters Most</p>
                <p>
                  Comprehensive Coverage for Peace of Mind: Our life insurance
                  plans offer robust protection, ensuring you and your family
                  can face life's uncertainties with confidence.
                </p>
                <p>
                  Whether you're a young family just starting out or a retiree
                  looking to leave a legacy, our experienced agents will work
                  closely with you to understand your needs and goals, and
                  recommend a policy that fits your budget and lifestyle.
                </p>
                <p>
                  With Sky Financial, you can rest assured that your loved ones
                  will be taken care of no matter what the future holds.
                </p>
              </div>
            </div>
            <div className={styles.bluelinetwo}></div>
            <div className={styles.flex_one}>
              <img src="/flow-profit.svg" />
              <p>TAX BENEFIT PROGRAMS</p>
              <p>Maximize Your Savings</p>
              <p>
                Life insurance and annuities offer significant tax benefits that
                can help you maximize your savings and minimize your tax
                liability. With life insurance, the death benefit is typically
                paid out to your beneficiaries tax-free, providing them with
                financial security without the burden of taxes.
              </p>
              <p>
                Similarly, annuities offer tax-deferred growth, meaning you
                won't pay taxes on your earnings until you start receiving
                income. This allows your retirement savings to grow faster and
                gives you more control over when you pay taxes.
              </p>
              <p>
                At Sky Financial, we can help you take advantage of these tax
                benefit programs and create a comprehensive financial strategy
                that minimizes your tax liability while maximizing your savings
                potential.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.thirdphase}>
          <div className={styles.thirdphase_para}>
            <div className={styles.left_line}>
              <p>GET STARTED TODAY</p>
            </div>
            <h5>
              Ready to take the next step towards financial security
              <span className={styles.questionmark}>?</span>
            </h5>
            <p>
              Contact{" "}
              <span className={styles.thirdphase_subword}>SKY FINANCIAL </span>
              today to schedule a consultation with one of our experienced
              agents. We're here to answer your questions, address your
              concerns, and help you find the perfect insurance solutions for
              your needs.
            </p>
          </div>
          <div className={styles.thirdphase_form}>
            <Form />
          </div>
        </div>

        {/*fourth phase*/}
        <div className={styles.fourthphase}>
          <div className={styles.accordion}>
            <details className={styles.accordion_item}>
              <summary className={styles.accordion_header}>
                <span className={styles.accordion_title}>
                  How much life insurance do I actually need?
                </span>
                <img
                  src="scrolldown.svg"
                  alt="Symbol 1"
                  className={styles.accordion_icon}
                />
              </summary>
              <div className={styles.accordion_content}>
                <p>
                  Determining your life insurance needs depends on various
                  factors like your income, debts, and future expenses.
                </p>
                <br />
                <p>
                  A general rule of thumb is to aim for coverage that's 5-10
                  times your annual income.
                </p>
                <br />
                <p>
                  However, it's crucial to consider your specific circumstances,
                  such as outstanding debts, education expenses for dependents,
                  and future financial goals.
                </p>
                <br />
                <p>
                  Consulting with our financial advisor can help tailor a policy
                  that adequately protects your loved ones and aligns with your
                  long-term plans.
                </p>
              </div>
            </details>
            <details className={styles.accordion_item}>
              <summary className={styles.accordion_header}>
                <span className={styles.accordion_title}>
                  How can I be sure I'm getting the best rates?
                </span>
                <img
                  src="scrolldown.svg"
                  alt="Symbol 2"
                  className={styles.accordion_icon}
                />
              </summary>
              <div className={styles.accordion_content}>
                <p>
                  At our agency, ensuring you get the best rates is our
                  priority.
                </p>
                <br />
                <p>
                  We leverage our extensive network and expertise to scout for
                  the most competitive offers tailored to your needs.
                </p>
                <br />
                <p>
                  Our transparent approach means you'll always know you're
                  getting the best deal available.{" "}
                </p>
                <br />
                <p>
                  We continuously monitor the market to keep your rates
                  optimized. Trust in our commitment to securing your financial
                  future at the most favourable terms.
                </p>
              </div>
            </details>
            <details className={styles.accordion_item}>
              <summary className={styles.accordion_header}>
                <span className={styles.accordion_title}>
                  How long does it take to get approved for life insurance
                  coverage?
                </span>
                <img
                  src="scrolldown.svg"
                  alt="Symbol 3"
                  className={styles.accordion_icon}
                />
              </summary>
              <div className={styles.accordion_content}>
                <p>
                  The approval process for life insurance coverage typically
                  ranges from a few days to several weeks.
                </p>
                <br />
                <p>
                  Factors such as the type of policy, your health, and the
                  insurer's underwriting process influence the timeline.
                </p>
                <br />
                <p>
                  Generally, simpler policies like term life insurance may be
                  approved more quickly, while complex policies or those
                  requiring medical exams may take longer.
                </p>
                <br />
                <p>
                  Rest assured, we strive to expedite the process while ensuring
                  thoroughness to provide you with the best coverage
                  efficiently.
                </p>
              </div>
            </details>
            <details className={styles.accordion_item}>
              <summary className={styles.accordion_header}>
                <span className={styles.accordion_title}>
                  What happens if I outlive the term of my life insurance
                  policy?
                </span>
                <img
                  src="scrolldown.svg"
                  alt="Symbol 4"
                  className={styles.accordion_icon}
                />
              </summary>
              <div className={styles.accordion_content}>
                <p>
                  If you outlive the term of your life insurance policy, there
                  are several options available.
                </p>
                <br />
                <p>
                  You can choose to renew the policy, convert it to a permanent
                  life insurance policy if available, or simply let it expire.{" "}
                </p>
                <br />
                <p>
                  It's important to review your options with your insurance
                  provider to determine the best course of action based on your
                  current needs and financial situation.
                </p>
                <br />
                <p>
                  Additionally, some policies may offer the option to receive a
                  pay-out of the premiums paid, though this varies depending on
                  the terms of your policy.
                </p>
              </div>
            </details>
            <details className={styles.accordion_item}>
              <summary className={styles.accordion_header}>
                <span className={styles.accordion_title}>
                  How can I ensure my life insurance policy adequately protects
                  my loved ones?
                </span>
                <img
                  src="scrolldown.svg"
                  alt="Symbol 5"
                  className={styles.accordion_icon}
                />
              </summary>
              <div className={styles.accordion_content}>
                <p>
                  To ensure your life insurance adequately protects your loved
                  ones, start by assessing your family's financial needs and
                  future obligations.
                </p>
                <br />
                <p>
                  Consider factors like mortgage payments, education expenses,
                  and living costs.{" "}
                </p>
                <br />
                <p>
                  Next, work closely with our expert advisors to tailor a policy
                  that aligns with your unique circumstances and provides
                  sufficient coverage.{" "}
                </p>
                <br />
                <p>
                  Regularly review and update your policy to accommodate any
                  changes in your life situation.{" "}
                </p>
                <br />
                <p>
                  Rest assured, our commitment to personalized guidance ensures
                  your loved ones are safeguarded against life's uncertainties.
                </p>
              </div>
            </details>
          </div>
          <div className={styles.fourth_sub_two}>
            <div className={styles.left_line}>
              <p>FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <h1>
              Get the Answers You Need<span>.</span>
            </h1>
            <div>
              <p>
                Have questions about life insurance? Explore our FAQs for clear,
                concise answers to help you make informed decisions about your
                coverage options.
              </p>
            </div>
            <img src="/fourthphase-man.svg" id="fourth-img" />
          </div>
        </div>
        <div>{/* <Footer/> */}</div>
        {/* <script src="/Components/Form/form.js"></script> */}
      </div>
    </>
  );
}
