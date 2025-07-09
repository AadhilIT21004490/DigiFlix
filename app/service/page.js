'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Service() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }

    const servicesData = [
    {
        id: 1,
        number: "01",
        title: "Branding",
        link: "/service-details",
        description:
        "We help businesses build memorable brands that communicate their purpose, values, and identity. From logo creation to full brand guidelines, we ensure your brand leaves a lasting impression.",
        image: "/assets/img/service/tab1.png",
        features: [
        "Unique brand identity design and development",
        "Logo creation and visual guidelines",
        "Brand voice and messaging alignment",
        "Consistent branding across all touchpoints"
        ]
    },
    {
        id: 2,
        number: "02",
        title: "Designs",
        link: "/service-details",
        description:
        "Our creative design team crafts visually stunning and user-focused designs that elevate your brand and drive engagement across all platforms.",
        image: "/assets/img/service/design.png",
        features: [
        "UI/UX design for websites and apps",
        "Custom graphics and illustrations",
        "Marketing collateral",
        "Visual storytelling aligns with your brand"
        ]
    },
    {
        id: 3,
        number: "03",
        title: "Digital Marketing",
        link: "/service-details",
        description:
        "Our digital marketing services are tailored to maximize your online presence and generate real, measurable results for your business.",
        image: "/assets/img/service/digital.png",
        features: [
        "ROI-driven ad campaigns (Google, Meta & more)",
        "Email marketing and automation",
        "Lead generation and funnel optimization",
        "Cross-platform campaign integration"
        ]
    },
    {
        id: 4,
        number: "04",
        title: "Web Development",
        link: "/service-details",
        description:
        "We build fast, scalable, and responsive websites that not only look great but perform flawlessly to support your business goals.",
        image: "/assets/img/service/web.png",
        features: [
        "Custom websites with modern tech stacks",
        "E-commerce and CMS solutions",
        "Mobile-responsive and SEO-friendly development",
        "Secure and optimized performance"
        ]
    },
    {
        id: 5,
        number: "05",
        title: "Social Media Marketing",
        link: "/service-details",
        description:
        "We create and manage impactful social media strategies that grow your audience, boost engagement, and convert followers into customers.",
        image: "/assets/img/service/social.png",
        features: [
        "Social media strategy and calendar planning",
        "Content creation and community management",
        "Paid social campaigns (Meta, LinkedIn, TikTok)",
        "Influencer and partnership collaborations"
        ]
    },
    {
        id: 6,
        number: "06",
        title: "Marketing Strategies",
        link: "/service-details",
        description:
        "We develop custom marketing strategies based on data, trends, and business goals to guide your growth in competitive digital landscapes.",
        image: "/assets/img/service/ms.png",
        features: [
        "Market research and competitor analysis",
        "Customer journey and funnel planning",
        "Multi-channel marketing roadmaps",
        "Performance tracking and strategic adjustments"
        ]
    },
    {
        id: 7,
        number: "07",
        title: "Content Creating",
        link: "/service-details",
        description:
        "Our content creators craft compelling, audience-focused content that educates, engages, and converts across digital platforms.",
        image: "/assets/img/service/con.png",
        features: [
        "Blogs, articles, and email copywriting",
        "Creative ad copy and captions",
        "Scriptwriting for videos and animations",
        "Content strategy for SEO and brand storytelling"
        ]
    },
    {
        id: 8,
        number: "08",
        title: "SEO",
        link: "/service-details",
        description:
        "We optimize your digital presence to improve visibility, drive organic traffic, and help your brand rank higher on search engines.",
        image: "/assets/img/service/seo.png",
        features: [
        "On-page and technical SEO",
        "Keyword research and strategy",
        "Backlink building and authority growth",
        "SEO audits and performance reporting"
        ]
    },
    {
        id: 9,
        number: "09",
        title: "Video Animation",
        link: "/service-details",
        description:
        "Bring your brand to life with captivating animations that explain, entertain, and convert — perfect for websites, ads, and social media.",
        image: "/assets/img/service/anim.png",
        features: [
        "Explainer and promotional videos",
        "2D/3D motion graphics",
        "Logo animations and intros/outros",
        "Storyboarding and voiceover integration"
        ]
    }
    ];


    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Our Services">
                <div>
                    <section className="service-section pt-space pb-space">
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        WHAT WE OFFER
                                    </div>
                                    <h2 className="stitle">
                                        Most <span className="fw-400">experienced</span> services
                                    </h2>
                                    <p className="mt-5">At DigiFlix, we empower your business to explore new horizons and achieve remarkable 
                                    milestones within your industry. Our dedicated team is committed to guiding you toward 
                                    exceptional growth and lasting success through innovative digital solutions.
                                    </p>
                                </div>
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
                    {/* Service m Tabs End */}
                    {/* Text SLider Start */}
                    <div className="digital-solution mb-xxl-4 pb-lg-0 pb-15">
                        <div className="mycustom-marque">
                            <div className="scrolling-wrap">
                                <div className="comm">
                                    <div className="cmn-textslide">DIGITAL solutions</div>
                                    <div className="cmn-textslide text-custom-storke">DIGITAL solutions</div>
                                    <div><img src="/assets/img/client/text-slide.png" alt="img" /></div>
                                </div>
                                <div className="comm">
                                    <div className="cmn-textslide">DIGITAL solutions</div>
                                    <div className="cmn-textslide text-custom-storke">DIGITAL solutions</div>
                                    <div><img src="/assets/img/client/text-slide.png" alt="img" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Text Slider End */}
                    {/* Pricing Plan Start */}
                    {/* <section className="pricing-section pt-space pb-space position-relative"> */}
                        {/* <div className="container">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                        pricing plans
                                    </div>
                                    <h2 className="stitle">
                                        Choose Your Perfect <span className="fw-400 d-block">Pricing Plan</span>
                                    </h2>
                                </div>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" onClick={() => handleTab(1)}>
                                        <button className={isTab == 1 ? "nav-link active" : "nav-link"}>
                                            Monthly
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleTab(2)}>
                                        <button className={isTab == 2 ? "nav-link active" : "nav-link"}>
                                            Yearly
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                    <div className="row g-xxl-7 g-lg-6 g-3 justify-content-center">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="mpricing-item other-pricing-item d-flex align-items-center">
                                                <div className="pricinge-head d-flex align-items-center ps-xxl-10 ps-xl-7 ps-lg-5 ps-5">
                                                    <div className="box">
                                                        <h4 className="white-clr mb-xxl-8 mb-xl-6 mb-4">
                                                            Branding
                                                        </h4>
                                                        <p className="pra-clr">
                                                            Proin rhoncus ex eu orci fermentum, et vestibulum odio euismod. Cras
                                                            vehicula
                                                            lacinia tristique. Morbi sapien
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pricing-list-right d-lg-flex d-grid align-items-center justify-content-between gap-lg-4 gap-7 w-100 ps-xxl-20 ps-lg-10 ps-5 pe-xxl-10 pe-8 pb-lg-0 pb-6">
                                                    <ul className="pricing-list d-grid gap-xxl-2 gap-1">
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63522" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Free 15 GB Linux Hosting
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63511" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Unlimited Download Data
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63533" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Branding And Design
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63544" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                24/7 System Monitoring
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div className="price-choose d-flex align-items-center gap-xxl-15 gap-xl-10 gap-lg-7 gap-md-6 gap-sm-4 gap-3">
                                                        <h4 className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 white">
                                                            $19
                                                            <span className="month">
                                                                /month
                                                            </span>
                                                        </h4>
                                                        <Link href="/pricing" className="price-under d-flex align-items-center gap-2">
                                                            Choose Plan
                                                            <span className="rot60 d-block">
                                                                <i className="fas fa-arrow-up" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="mpricing-item other-pricing-item d-flex align-items-center">
                                                <div className="pricinge-head d-flex align-items-center ps-xxl-10 ps-xl-7 ps-lg-5 ps-5">
                                                    <div className="box">
                                                        <h4 className="white-clr mb-xxl-8 mb-xl-6 mb-4">
                                                            UI Design
                                                        </h4>
                                                        <p className="pra-clr">
                                                            Proin rhoncus ex eu orci fermentum, et vestibulum odio euismod. Cras
                                                            vehicula
                                                            lacinia tristique. Morbi sapien
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pricing-list-right d-lg-flex d-grid align-items-center justify-content-between gap-lg-4 gap-7 w-100 ps-xxl-20 ps-lg-10 ps-5 pe-xxl-10 pe-8 pb-lg-0 pb-6">
                                                    <ul className="pricing-list d-grid gap-xxl-2 gap-1">
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63577" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Free 15 GB Linux Hosting
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63566" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Unlimited Download Data
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63588" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Branding And Design
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63599" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                24/7 System Monitoring
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div className="price-choose d-flex align-items-center gap-xxl-15 gap-xl-10 gap-lg-7 gap-md-6 gap-sm-4 gap-3">
                                                        <h4 className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 white">
                                                            $39
                                                            <span className="month">
                                                                /month
                                                            </span>
                                                        </h4>
                                                        <Link href="/pricing" className="price-under d-flex align-items-center gap-2">
                                                            Choose Plan
                                                            <span className="rot60 d-block">
                                                                <i className="fas fa-arrow-up" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                    <div className="row g-xxl-7 g-lg-6 g-3 justify-content-center">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="mpricing-item other-pricing-item d-flex align-items-center">
                                                <div className="pricinge-head d-flex align-items-center ps-xxl-10 ps-xl-7 ps-lg-5 ps-5">
                                                    <div className="box">
                                                        <h4 className="white-clr mb-xxl-8 mb-xl-6 mb-4">
                                                            Branding
                                                        </h4>
                                                        <p className="pra-clr">
                                                            Proin rhoncus ex eu orci fermentum, et vestibulum odio euismod. Cras
                                                            vehicula
                                                            lacinia tristique. Morbi sapien
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pricing-list-right d-lg-flex d-grid align-items-center justify-content-between gap-lg-4 gap-7 w-100 ps-xxl-20 ps-lg-10 ps-5 pe-xxl-10 pe-8 pb-lg-0 pb-6">
                                                    <ul className="pricing-list d-grid gap-xxl-2 gap-1">
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_63500" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Free 15 GB Linux Hosting
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_635222" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Unlimited Download Data
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_635111" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Branding And Design
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_635333" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                24/7 System Monitoring
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div className="price-choose d-flex align-items-center gap-xxl-15 gap-xl-10 gap-lg-7 gap-md-6 gap-sm-4 gap-3">
                                                        <h4 className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 white">
                                                            $19
                                                            <span className="month">
                                                                /month
                                                            </span>
                                                        </h4>
                                                        <Link href="/pricing" className="price-under d-flex align-items-center gap-2">
                                                            Choose Plan
                                                            <span className="rot60 d-block">
                                                                <i className="fas fa-arrow-up" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="mpricing-item other-pricing-item d-flex align-items-center">
                                                <div className="pricinge-head d-flex align-items-center ps-xxl-10 ps-xl-7 ps-lg-5 ps-5">
                                                    <div className="box">
                                                        <h4 className="white-clr mb-xxl-8 mb-xl-6 mb-4">
                                                            UI Design
                                                        </h4>
                                                        <p className="pra-clr">
                                                            Proin rhoncus ex eu orci fermentum, et vestibulum odio euismod. Cras
                                                            vehicula
                                                            lacinia tristique. Morbi sapien
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pricing-list-right d-lg-flex d-grid align-items-center justify-content-between gap-lg-4 gap-7 w-100 ps-xxl-20 ps-lg-10 ps-5 pe-xxl-10 pe-8 pb-lg-0 pb-6">
                                                    <ul className="pricing-list d-grid gap-xxl-2 gap-1">
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_635444" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Free 15 GB Linux Hosting
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_635555" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Unlimited Download Data
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_635" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                Branding And Design
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2">
                                                            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="path-1-inside-1_6574_635888" fill="white">
                                                                    <path d="M0 8.83301C0 4.42676 3.5625 0.833008 8 0.833008C12.4062 0.833008 16 4.42676 16 8.83301C16 13.2705 12.4062 16.833 8 16.833C3.5625 16.833 0 13.2705 0 8.83301ZM11.5938 7.45801C11.9375 7.11426 11.9375 6.58301 11.5938 6.23926C11.25 5.89551 10.7188 5.89551 10.375 6.23926L7 9.61426L5.59375 8.23926C5.25 7.89551 4.71875 7.89551 4.375 8.23926C4.03125 8.58301 4.03125 9.11426 4.375 9.45801L6.375 11.458C6.71875 11.8018 7.25 11.8018 7.59375 11.458L11.5938 7.45801Z" />
                                                                </mask>
                                                                <path d="M7 9.61426L6.30088 10.3293L7.0079 11.0206L7.70711 10.3214L7 9.61426ZM5.59375 8.23926L4.8866 8.94641L4.89463 8.95426L5.59375 8.23926ZM1 8.83301C1 4.9765 4.11733 1.83301 8 1.83301V-0.166992C3.00767 -0.166992 -1 3.87702 -1 8.83301H1ZM8 1.83301C11.854 1.83301 15 4.97904 15 8.83301H17C17 3.87447 12.9585 -0.166992 8 -0.166992V1.83301ZM15 8.83301C15 12.7157 11.8565 15.833 8 15.833V17.833C12.956 17.833 17 13.8253 17 8.83301H15ZM8 15.833C4.11478 15.833 1 12.7182 1 8.83301H-1C-1 13.8228 3.01022 17.833 8 17.833V15.833ZM12.3009 8.16511C13.0351 7.43084 13.0351 6.26643 12.3009 5.53215L10.8866 6.94636C10.8717 6.93147 10.8516 6.89618 10.8516 6.84863C10.8516 6.80108 10.8717 6.76579 10.8866 6.7509L12.3009 8.16511ZM12.3009 5.53215C11.5666 4.79788 10.4022 4.79788 9.66789 5.53215L11.0821 6.94636C11.0672 6.96126 11.0319 6.98145 10.9844 6.98145C10.9368 6.98145 10.9015 6.96126 10.8866 6.94636L12.3009 5.53215ZM9.66789 5.53215L6.29289 8.90715L7.70711 10.3214L11.0821 6.94636L9.66789 5.53215ZM7.69912 8.89925L6.29287 7.52425L4.89463 8.95426L6.30088 10.3293L7.69912 8.89925ZM6.30086 7.53215C5.56658 6.79788 4.40217 6.79788 3.66789 7.53215L5.08211 8.94636C5.06721 8.96126 5.03193 8.98145 4.98438 8.98145C4.93682 8.98145 4.90154 8.96126 4.88664 8.94636L6.30086 7.53215ZM3.66789 7.53215C2.93362 8.26643 2.93362 9.43084 3.66789 10.1651L5.08211 8.7509C5.097 8.76579 5.11719 8.80108 5.11719 8.84863C5.11719 8.89618 5.097 8.93147 5.08211 8.94636L3.66789 7.53215ZM3.66789 10.1651L5.66789 12.1651L7.08211 10.7509L5.08211 8.7509L3.66789 10.1651ZM5.66789 12.1651C6.40217 12.8994 7.56658 12.8994 8.30086 12.1651L6.88664 10.7509C6.90154 10.736 6.93682 10.7158 6.98438 10.7158C7.03193 10.7158 7.06721 10.736 7.08211 10.7509L5.66789 12.1651ZM8.30086 12.1651L12.3009 8.16511L10.8866 6.7509L6.88664 10.7509L8.30086 12.1651Z" fill="#E3FF04" mask="url(#path-1-inside-1_6574_635)" />
                                                            </svg>
                                                            <span className="pra-clr">
                                                                24/7 System Monitoring
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div className="price-choose d-flex align-items-center gap-xxl-15 gap-xl-10 gap-lg-7 gap-md-6 gap-sm-4 gap-3">
                                                        <h4 className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 white">
                                                            $59
                                                            <span className="month">
                                                                /month
                                                            </span>
                                                        </h4>
                                                        <Link href="/pricing" className="price-under d-flex align-items-center gap-2">
                                                            Choose Plan
                                                            <span className="rot60 d-block">
                                                                <i className="fas fa-arrow-up" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* Element */}
                        {/* <img src="/assets/img/pricing/pricing-shape.png" alt="img" className="prcing-shape" />
                    </section> */}
                </div>

            </Layout>
        </>
    )
}