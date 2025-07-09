"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Faq() {
  const [isAccordion, setIsAccordion] = useState(0);
  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  const faqData = [
    {
      id: 1,
      question: "How long should a business plan be?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
    },
    {
      id: 2,
      question: "What is included in your services?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
    },
    {
      id: 3,
      question: "What type of company is measured?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
    },
    {
      id: 4,
      question: "How do you define success for a project?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
    },
    {
      id: 5,
      question: "Do you offer post-launch support?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
    },
    {
      id: 6,
      question: "What industries do you specialize in?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
    },
    {
      id: 7,
      question: "Can you handle international clients?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
    },
    {
      id: 8,
      question: "How do you measure campaign success?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
    },
  ];

  const leftFaqs = faqData.slice(0, Math.ceil(faqData.length / 2));
  const rightFaqs = faqData.slice(Math.ceil(faqData.length / 2));

  return (
    <>
      <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="FAQ’S">
        <section className="Faqs-section pt-space pb-space">
          <div className="container">
            <div className="faqs-title text-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
              <Link
                href="/blog-details"
                className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5"
              >
                FAQ’S
              </Link>
              <h2 className="stitle">
                Frequently asked <span className="fw-400">questions</span>
              </h2>
            </div>
            <div className="row g-xxl-7 g-lg-6 g-0 justify-content-center">
              <div className="col-lg-6">
                <div className="faq">
                  <div className="accordion-section">
                    {leftFaqs.map((faq) => (
                      <div
                        key={faq.id}
                        className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${
                          isAccordion === faq.id ? "active" : ""
                        }`}
                      >
                        <h5
                          className="header-area"
                          onClick={() => handleAccordion(faq.id)}
                        >
                          <button
                            className="accordion-btn d-flex align-items-center text-start d-flex position-relative w-100"
                            type="button"
                          >
                            {faq.question}
                          </button>
                        </h5>
                        <div
                          className="content-area"
                          style={{
                            display: `${
                              isAccordion === faq.id ? "block" : "none"
                            }`,
                          }}
                        >
                          <div className="content-body pt-4">
                            <p className="pra-clr">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq">
                  <div className="accordion-section">
                    {rightFaqs.map((faq) => (
                      <div
                        key={faq.id}
                        className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${
                          isAccordion === faq.id ? "active" : ""
                        }`}
                      >
                        <h5
                          className="header-area"
                          onClick={() => handleAccordion(faq.id)}
                        >
                          <button
                            className="accordion-btn d-flex align-items-center text-start d-flex position-relative w-100"
                            type="button"
                          >
                            {faq.question}
                          </button>
                        </h5>
                        <div
                          className="content-area"
                          style={{
                            display: `${
                              isAccordion === faq.id ? "block" : "none"
                            }`,
                          }}
                        >
                          <div className="content-body pt-4">
                            <p className="pra-clr">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
