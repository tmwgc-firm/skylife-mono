import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "./Header/page";
import Form from "./Form/page";

import Link from "next/link";
import FAQSection from "./Faq/page";
import Image from "next/image";

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
                  Life&apos;s a Journey, Fly Confidently with our Protection
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
                  <Image src="/Arrow.svg" alt="arrow" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tab_imagecontent}>
            <div className={styles.imagecontent_welcome}>
              <div className={styles.left_line}>
                <p>WELCOME TO SKY FINANCIAL</p>
              </div>
              <h1>
                Life&apos;s a Journey, Fly Confidently with our Protection
                <span className={styles.dot}>.</span>
              </h1>
            </div>
            <div className={styles.imagecontent_para}>
              <p>
                At Sky Financial, we specialize in providing comprehensive life
                insurance and annuity options tailored to meet the unique needs
                of individuals across all age groups and income levels. As a
                licensed provider in all 50 states, we are dedicated to helping
                clients nationwide secure their financial futures with
                innovative insurance solutions.
              </p>
              <p>
                Explore our website to learn more about our products and how we
                can help you achieve peace of mind and financial security.
              </p>
            </div>
            <div className={styles.buttontwo}>
              <div className={styles.get_in}>
                <p>Get in touch</p>
              </div>
              <div>
                <Image src="/Arrow.svg" alt="arrow" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>

        {/* second phase  */}
        <div className={styles.secondphase}>
          <div>
            <Image src="/anime1.svg" alt="animation" width={584} height={444} />
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
                individual&apos;s financial situation is different, and we take
                the time to listen and recommend the best options for your needs
                and goals.
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
              <Image
                src="/flow-group.svg"
                alt="flexone"
                width={64}
                height={64}
              />
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
                Whether you&apos;re looking for immediate income or a deferred
                annuity to supplement your retirement savings, our team of
                experts will help you navigate the options and find the right
                solution for your needs.
              </p>
            </div>
            <div className={styles.flextwoline}>
              <div className={styles.blueline}></div>
              <div className={styles.flex_two}>
                <Image
                  src="/flow-hand-holding-heart.svg"
                  alt="flexone"
                  width={64}
                  height={64}
                />
                <p>LIFE INSURANCE</p>
                <p>Protecting What Matters Most</p>
                <p>
                  Comprehensive Coverage for Peace of Mind: Our life insurance
                  plans offer robust protection, ensuring you and your family
                  can face life&apos;s uncertainties with confidence.
                </p>
                <p>
                  Whether you&apos;re a young family just starting out or a
                  retiree looking to leave a legacy, our experienced agents will
                  work closely with you to understand your needs and goals, and
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
              <Image
                src="/flow-profit.svg"
                alt="flexone"
                width={64}
                height={64}
              />
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
                won&apos;t pay taxes on your earnings until you start receiving
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
              agents. We&apos;re here to answer your questions, address your
              concerns, and help you find the perfect insurance solutions for
              your needs.
            </p>
          </div>
          <div className={styles.thirdphase_form}>
            <Form />
          </div>
        </div>

        <FAQSection />
      </div>
    </>
  );
}
