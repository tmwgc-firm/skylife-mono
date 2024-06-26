"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import styles from "./section.module.css";
import FAQSection from "../Faq/page";
// import Carousel from "../Carousel/page";
import Animation from "../Animation/page";

interface FormData {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

export default function Sections() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    let formErrors: Partial<FormData> = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFormData({
          name: "",
          subject: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(`Failed to send email: ${result.message}`);
        console.error(result.error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    // second section of lander page
    <div>
      <div className={styles.page_top}>
        <div className={styles.page_too_find}>
          <div className={styles.animation}>
            <Animation />
          </div>
          <div className={styles.whoweare}>
            <div className={styles.left_line}>WHO WE ARE?</div>

            <h2>Your Trusted Insurance Partner.</h2>

            <p>
              Sky Financial is a leading provider of life insurance and annuity
              solutions nationwide. With years of experience helping clients
              achieve financial security, we have earned a reputation for
              excellence and reliability in the insurance industry.
            </p>
            <p>
              Our dedicated team of agents is committed to providing
              personalized service and innovative solutions tailored to meet the
              unique needs of each client. We understand that every individuals
              financial situation is different, and we take the time to listen
              and recommend the best options for your needs and goals.
            </p>
            <p>
              At Sky Financial, we are passionate about helping our clients
              secure their financial futures and enjoy peace of mind knowing
              that their loved ones are protected.
            </p>
          </div>
        </div>

        <div className={styles.page_three}>
          <div className={styles.border}></div>

          <div className={styles.flex}>
            <div className={styles.flex_one}>
              <Image
                src={"/grid1.svg"}
                alt="annunities image"
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
                Whether youre looking for immediate income or a deferred annuity
                to supplement your retirement savings, our team of experts will
                help you navigate the options and find the right solution for
                your needs.
              </p>
            </div>
            <div className={styles.flextwoline}>
              <div className={styles.blueline}></div>
              <div className={styles.flex_two}>
                <Image
                  src={"/grid2.svg"}
                  alt="annunities image"
                  width={94}
                  height={94}
                />
                <p>LIFE INSURANCE</p>
                <p>Protecting What Matters Most</p>
                <p>
                  Comprehensive Coverage for Peace of Mind Our life insurance
                  plans offer robust protection, ensuring you and your family
                  can face lifes uncertainties with confidence.
                </p>
                <p>
                  Whether youre a young family just starting out or a retiree
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
              <Image
                src={"/grid3.svg"}
                alt="annunities image"
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
                Similarly, annuities offer tax-deferred growth, meaning you wont
                pay taxes on your earnings until you start receiving income.
                This allows your retirement savings to grow faster and gives you
                more control over when you pay taxes.
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
      </div>
      {/* third section of lander page */}

      <div className={styles.thirdsection}>
        <div className={styles.getstarted}>
          <div className={styles.left_line}>
            <p>GET STARTED TODAY</p>
          </div>

          <h2>
            Ready to take the next step towards financial security
            <span className={styles.dot}>?</span>
          </h2>

          <p>
            Contact <span className={styles.inline}>SKY FINANCIAL</span> today
            to schedule a consultation with one of our experienced agents. Were
            here to answer your questions, address your concerns, and help you
            find the perfect insurance solutions for your needs.
          </p>
        </div>

        {/* form data */}
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.namesub}>
              <div className={styles.name}>
                <Image
                  src={"/user.svg"}
                  alt="user image"
                  width={30}
                  height={30}
                />
                <div className={styles.formline}></div>
                <input
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>

              <div className={styles.name}>
                <Image
                  src={"/user.svg"}
                  alt="user image"
                  width={30}
                  height={30}
                />
                <div className={styles.formline}></div>
                <input
                  placeholder="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <span className={styles.error}>{errors.subject}</span>
                )}
              </div>
            </div>

            <div className={styles.emailphone}>
              <div className={styles.name}>
                <Image
                  src={"/mail.svg"}
                  alt="mail image"
                  width={30}
                  height={30}
                />
                <div className={styles.formline}></div>
                <input
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>

              <div className={styles.name}>
                <Image
                  src={"/phone.svg"}
                  alt="phone image"
                  width={30}
                  height={30}
                />
                <div className={styles.formline}></div>
                <input
                  placeholder="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone}</span>
                )}
              </div>
            </div>

            <div className={styles.message}>
              <div className={styles.messagebox}>
                <input
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </div>
            </div>

            <button type="submit">Get in touch</button>
          </form>
        </div>
      </div>

      {/* fourth section of lander page */}
      <FAQSection />
    </div>
  );
}
