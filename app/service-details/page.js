'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"


export default function ServiceDetails() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Services Details">
                <section className="Service-details pt-space pb-space">
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                            <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <img src="/assets/img/blog/project-slide2.jpg" alt="img" className="w-100" />
                            </div>
                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                World best web design service provider.
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <Link href="/service-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Creative
                                </Link>
                                <Link href="/service-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Branding
                                </Link>
                                <Link href="/service-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Analytics
                                </Link>
                                <Link href="/service-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    Audience
                                </Link>
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                Service Overview
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="pra-clr challenge-pra1">
                                    Nam posuere mauris enim, quis pretium elit placerat id Fusce egestas nisi vel ipsum vehicula
                                    facilisis In pulvinar
                                    imperdiet venenatis Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                    inceptos himenaeos. Donec eu
                                    pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue
                                    vestibulum Nulla aliquam elit eu
                                    diam pharetra.
                                </p>
                                <p className="pra-clr">
                                    Fusce egestas nisi vel ipsum vehicula facilisis. In pulvinar imperdiet venenatis. Class
                                    aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam
                                    vestibulum ligula quis nisl feugiat,
                                    consectetur placerat augue vestibulum.
                                </p>
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-3 mb-2 white-clr">
                                    Benefits With Our Service
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                        <ul>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Branding Design
                                                </span>
                                                <span className="cons">88%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Business
                                                </span>
                                                <span className="cons">96%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}