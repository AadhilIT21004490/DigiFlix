

'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const clientLogos = [
  "/assets/img/client/axis.png",
  "/assets/img/client/genius hospital.png",
  "/assets/img/client/advision.png",
  "/assets/img/client/aldeib.png",
  "/assets/img/client/elegancia-grou.png",
  "/assets/img/client/ecs.png",
  "/assets/img/client/agricompost.png",
  "/assets/img/client/abm.png",
  "/assets/img/client/afka.png",
  "/assets/img/client/aic.png",
  "/assets/img/client/ariana.png",
  "/assets/img/client/cellasia.png",
  "/assets/img/client/century.png",
  "/assets/img/client/ceylonadz.png",
  "/assets/img/client/creamcarving.png",
  "/assets/img/client/delight.png",
  "/assets/img/client/grillup.png",
  "/assets/img/client/hijasacedemy.png",
  "/assets/img/client/gs.png",
  "/assets/img/client/iphs.png",
  "/assets/img/client/lee.png",
  "/assets/img/client/mimi.png",
  "/assets/img/client/nist.png",
  "/assets/img/client/pearlgreen.png",
  "/assets/img/client/plk.png",
  "/assets/img/client/royalyouths.png",
  "/assets/img/client/sawabif.png",
  "/assets/img/client/techspark.png",
  "/assets/img/client/trendza.png",
  "/assets/img/client/vanem.png",
  "/assets/img/client/wedecor.png",
]

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 0,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cmn-prev",
    prevEl: ".cmn-next",
  },

    breakpoints: {
    320: {
        slidesPerView: 2, // mobile view
    },
    640: {
        slidesPerView: 4, // small tablets
    },
    991: {
        slidesPerView: 5,
    },
    1199: {
        slidesPerView: 5,
    },
    }
}

export default function clients() {
    return (
        <>
            <section className="testimonial-version02-section pb-10 position-relative">
            <div className="container position-relative">
                <div className="swiper testimonial-version03 position-relative">
                <div className="text-center">
                    <h6 className="white-clr mb-5" data-aos="fade-up" data-aos-duration={1900}>
                        We’re proud and grateful to have collaborated with a long list of valued clients. Each 
                        partnership has helped us grow, innovate, and deliver exceptional results across industries 
                        and borders. 
                    </h6>
                </div>
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {clientLogos.map((logo, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="card shadow-sm border-0 m-3 p-4 d-flex align-items-center justify-content-center" style={{ height: "150px" }}>
                            <Link href="/">
                            <img src={logo} alt={`client-${idx}`} width={160} className="max-h-12 object-contain" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom wrapper to add spacing */}
                <div className="pagination-wrapper mt-18 text-center">
                    <div className="swiper-pagination" />
                </div>
                </div>
            </div>
            </section>


        </>
    )
}
