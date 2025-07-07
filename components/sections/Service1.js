'use client'
import { useState } from 'react'
import Link from "next/link"
export default function Service1() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    const servicesData = [
    {
        id: 1,
        number: "01",
        title: "Creative Designs",
        link: "/service-details",
        description:
        "We design and craft unique projects that help you launch and grow your online business and income. DigiFlix offers innovative, cost-effective, and customized graphic design solutions tailored to your brand’s identity and goals.",
        image: "/assets/img/service/design.png",
        features: [
        "UI/UX design for websites and apps",
        "Custom graphics and illustrations",
        "Marketing collateral",
        "Visual storytelling aligns with your brand"
        ]
    },
    {
        id: 2,
        number: "02",
        title: "Digital Marketing",
        link: "/service-details",
        description:
        "DigiFlix provides integrated digital marketing services tailored to a variety of channels. Our expertise includes Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Management (SMM), and Email & SMS Marketing all designed to help you achieve your marketing goals and boost profitability.",
        image: "/assets/img/service/digital.png",
        features: [
        "ROI-driven ad campaigns (Google, Meta & more)",
        "Email marketing and automation",
        "Lead generation and funnel optimization",
        "Cross-platform campaign integration"
        ]
    },
    {
        id: 3,
        number: "03",
        title: "Web Development",
        link: "/service-details",
        description:
        "DigiFlix has been developing responsive websites for businesses in Sri Lanka, Qatar, and the UAE. We cater to small, medium, and large enterprises, adapting to various budgets and needs. Our designs reflect your company’s culture, brand, and corporate identity whether we're building microsites, megasites, e-commerce platforms, or shopping carts.",
        image: "/assets/img/service/web.png",
        features: [
        "Custom websites with modern tech stacks",
        "E-commerce and CMS solutions",
        "Mobile-responsive and SEO-friendly development",
        "Secure and optimized performance"
        ]
    }
    ];
    
    return (
        <>

            <section className="service-section pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                WHAT CAN WE DO FOR YOU?
                            </div>
                             <p className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6" data-aos="fade-up" data-aos-duration={1900}>
                                DigiFlix is a Sri Lanka-based digital marketing agency powered by a passionate team of 
                                creative graphic designers, web developers, and digital marketing specialists. Our mission 
                                is to help your business thrive by focusing on strategic planning and delivering high
                                impact results. 
                                We aim to provide timely, high-quality services tailored to your unique goals. Our digital 
                                marketing team works closely with you to craft a winning formula that drives growth and 
                                elevates your brand.
                            </p>
                            <h2 className="stitle">
                                Most <span className="fw-400">experienced</span> services
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View All Service
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    {/*Service Tabing section*/}
                            <div className="row g-xxl-6 g-4">
                                <div className="service-tabing-wrap Faqs-section">
                                    {servicesData.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === service.id ? "active" : ""}`}
                                    >
                                        <div className="header-area" onClick={() => handleAccordion(service.id)}>
                                        <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                            <div className="mtitle-ara">
                                            <span className="d-inline-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                {service.number}
                                                <span className="rot60 d-inline-block theme-clr">
                                                <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href={service.link} className="white-clr whitehover">
                                                {service.title}
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">{service.description}</span>
                                            </div>

                                            <div className="images-remove-area d-flex flex-column flex-lg-row align-items-center gap-xxl-8 gap-4 mt-4 w-100">
                                            <ul className="modern-list d-grid gap-2 text-xs text-md-sm">
                                                {service.features.map((feature, idx) => (
                                                <li key={idx} className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> {feature}
                                                </li>
                                                ))}
                                            </ul>
                                            <div className="tab-remove-thumb d-none d-lg-block">
                                                <img src={service.image} alt="img" width={450}/>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            {/*Service Tabing section*/}
                </div>
            </section>
        </>
    )
}
