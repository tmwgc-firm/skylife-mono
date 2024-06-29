"use client";
import React, { useState } from "react";
import "./faq.css";
import Image from "next/image";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // State to track active FAQ index

  const faqs = [
    {
      question: "How much life insurance do I actually need?",
      paras: [
        "Determining your life insurance needs depends on various factors like your income, debts, and future expenses.",
        "A general rule of thumb is to aim for coverage thats 5-10 times your annual income.",
        "However, it's crucial to consider your specific circumstances, such as outstanding debts, education expenses for dependents, and future financial goals.",
        "Consulting with our financial advisor can help tailor a policy that adequately protects your loved ones and aligns with your long-term plans.",
      ],
    },
    {
      question: "How can I be sure I'm getting the best rates?",
      paras: [
        "At our agency, ensuring you get the best rates is our priority.",
        "We leverage our extensive network and expertise to scout for the most competitive offers tailored to your needs.",
        "Our transparent approach means you'll always know you're getting the best deal available.",
        "We continuously monitor the market to keep your rates optimized. Trust in our commitment to securing your financial future at the most favourable terms.",
      ],
    },
    {
      question:
        "How long does it take to get approved for life insurance coverage?",
      paras: [
        "The approval process for life insurance coverage typically ranges from a few days to several weeks.",
        "Factors such as the type of policy, your health, and the insurer's underwriting process influence the timeline.",
        "Generally, simpler policies like term life insurance may be approved more quickly, while complex policies or those requiring medical exams may take longer.",
        "Rest assured, we strive to expedite the process while ensuring thoroughness to provide you with the best coverage efficiently.",
      ],
    },
    {
      question:
        "What happens if I outlive the term of my life insurance policy?",
      paras: [
        "If you outlive the term of your life insurance policy, there are several options available.",
        "You can choose to renew the policy, convert it to a permanent life insurance policy if available, or simply let it expire.",
        "It's important to review your options with your insurance provider to determine the best course of action based on your current needs and financial situation.",
        "Additionally, some policies may offer the option to receive a pay-out of the premiums paid, though this varies depending on the terms of your policy.",
      ],
    },
    {
      question:
        "How can I ensure my life insurance policy adequately protects my loved ones?",
      paras: [
        "To ensure your life insurance adequately protects your loved ones, start by assessing your family's financial needs and future obligations.",
        "Consider factors like mortgage payments, education expenses, and living costs.",
        "Next, work closely with our expert advisors to tailor a policy that aligns with your unique circumstances and provides sufficient coverage.",
        "Regularly review and update your policy to accommodate any changes in your life situation.",
        "Rest assured, our commitment to personalized guidance ensures your loved ones are safeguarded against life's uncertainties.",
      ],
    },
  ];

  // Function to toggle active state of FAQ item
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mainpage">
      <div className="faq-container">
        <div className="faq">
          {faqs.map((faq, index) => (
            <div key={index} className="faq_border">
              <div
                className={`question ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <p>{faq.question}</p>
                <Image
                  src={
                    activeIndex === index
                      ? "/chevron-up.svg"
                      : "/chevron-down.svg"
                  }
                  alt="toggle icon"
                  width={24}
                  height={24}
                />
              </div>
              {activeIndex === index && (
                <div className="answer">
                  {faq.paras.map((para, paraIndex) => (
                    <p key={paraIndex}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Add your right section content here */}
        <div className="rightsection">
          <div className="left_line">
            <p>FREQUENTLY ASKED QUESTIONS</p>
          </div>
          <h2>
            Get the Answers You Need<span className="dot">.</span>
          </h2>
          <p>
            Have questions about life insurance? Explore our FAQs for clear,
            concise answers to help you make informed decisions about your
            coverage options.
          </p>
          <Image
            src="/fourthsec.svg"
            alt="a man thinking"
            height={536}
            width={360}
          />
        </div>
      </div>

      <Image
        src={"/manthinking.svg"}
        alt="man thinking"
        height={464}
        width={312}
      />
    </div>
  );
};

export default FAQSection;
