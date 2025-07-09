"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Faq() {
  const [isAccordion, setIsAccordion] = useState(0);
  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

 const WhyData = [
  {
    id: 1,
    question: "Best Quality Designs",
    answer:
      "We deliver top-tier designs that blend creativity, advanced technology, and personalized attention. Our solutions are visually stunning, user-friendly, and tailored to meet each client’s unique needs.",
  },
  {
    id: 2,
    question: "Live Support Around the Clock",
    answer:
      "Our professional support team is available 24/7 to ensure seamless communication. Whether you're exploring our services, discussing a new project, or checking the status of an ongoing one — we’re here for you.",
  },
  {
    id: 3,
    question: "We Value Our Clients",
    answer:
      "We’re deeply invested in your success. Our recommendations are always focused on what will genuinely benefit your business. Your growth is our priority.",
  },
  {
    id: 4,
    question: "Amazing Ideas",
    answer:
      "Our passion for innovation and creativity makes us a powerful partner in digital marketing and web development. We’re constantly exploring new ways to boost your revenue and brand impact.",
  },
  {
    id: 5,
    question: "Our Commitment",
    answer:
      "We never leave a task unfinished or a promise unmet. Our team is fully dedicated to delivering results and meeting deadlines with integrity and determination.",
  },
  {
    id: 6,
    question: "Experienced Professionals",
    answer:
      "We know what works and we won’t waste your time. Our team is made up of seasoned professionals ready to support your business with precision and care.",
  },
]


  const leftWhy = WhyData.slice(0, Math.ceil(WhyData.length / 2));
  const rightWhy = WhyData.slice(Math.ceil(WhyData.length / 2));

  return (
    <>
      
        <section className="Faqs-section">
          <div className="container">
            <div className="faqs-title text-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
              <Link
                href="/about"
                className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5"
              >
                Why us?
              </Link>
              <h2 className="stitle mb-5">
                Why <span className="fw-400">DigiFlix?</span>
              </h2>
              <p className="">At DigiFlix, we combine imagination, innovation, and creativity to deliver efficient and 
                effective digital solutions. Our commitment to excellence ensures that every client 
                regardless of size or scope receives personalized service that brings their vision to life. 
                Time-bound delivery is one of our strongest values, turning success into reality.</p>
            </div>
            <div className="row g-xxl-7 g-lg-6 g-0 justify-content-center">
              <div className="col-lg-6">
                <div className="faq">
                  <div className="accordion-section">
                    {leftWhy.map((faq) => (
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
                    {rightWhy.map((faq) => (
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
    </>
  );
}
