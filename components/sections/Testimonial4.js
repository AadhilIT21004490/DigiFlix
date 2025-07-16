"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialData = [
  {
    id: 1,
    name: "Rishath Abdul Gaffar",
    designation: "Operations Manager | Agricompost",
    title: "Amazing Designs and Quality Work!",
    image: "/assets/img/testimonial/t-version01.png",
    quote: `DigiFlix is dedicated to collaborating on digital marketing. They handle important clients 
            with exceptional care and consistently deliver outstanding results. Their flexibility in 
            adapting to market conditions is truly noteworthy. We appreciate their commitment to 
            excellence.`,
  },
  {
    id: 2,
    name: "ULM. Manazzir",
    designation: "Managing Director | ECS",
    title: "It's a Pleasure to Work with DigiFlix",
    image: "/assets/img/testimonial/t-version01.png",
    quote: `The DigiFlix team has made a huge difference to our business with their comprehensive, 
            fast, and well-planned digital marketing strategy. It's a pleasure to work with DigiFlix. 
            The team is quick to respond and meets the needs of both the people and the brand.`,
  },
  {
    id: 3,
    name: "Bushra Siddeeque Zahir",
    designation: "Founder & Chief Executive | ViralMarks",
    title: "Exceptional Impact and Responsive Service",
    image: "/assets/img/testimonial/t-version01.png",
    quote: `DigiFlix has significantly impacted our business with their thorough, speedy, and well-executed 
            digital marketing strategy. Working with DigiFlix is a delight. Their team is responsive and 
            effectively addresses the needs of both clients and the brand. Keep up the excellent work!`,
  },
  {
    id: 4,
    name: "Aadhil Nizam",
    designation: "Marketing Lead | NovaTech Solutions",
    title: "Professional, Creative, and Reliable",
    image: "/assets/img/testimonial/t-version01.png",
    quote: `Working with DigiFlix has been a game-changer for our brand. Their team brings creativity, 
            professionalism, and reliability to every project. We’ve seen a noticeable improvement in 
            engagement and brand visibility.`,
  },
  {
    id: 5,
    name: "Tharushi Perera",
    designation: "Head of Communications | GreenLeaf Organics",
    title: "Strategic Thinking and Fast Execution",
    image: "/assets/img/testimonial/t-version01.png",
    quote: `DigiFlix impressed us with their strategic approach and quick execution. They understood 
            our goals and delivered a campaign that exceeded expectations. Highly recommended 
            for businesses looking to scale digitally.`,
  },
  {
    id: 6,
    name: "Mohamed Faheem",
    designation: "Founder | Faheem Apparel Co.",
    image: "/assets/img/testimonial/t-version01.png",
    title: "Creative Minds with a Passion for Results",
    quote: `The DigiFlix team is full of creative minds who are truly passionate about delivering results. 
            Their attention to detail and commitment to our brand made the entire experience seamless 
            and successful.`,
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".cmn-prev",
    prevEl: ".cmn-next",
  },

  breakpoints: {
    1199: {
      slidesPerView: 1,
    },
  },
};
export default function Testimonial4() {
  return (
    <>
      <section className="pt-space pb-space bg2-clr">
        <div className="container">
          <div className="row g-md-5 g-6 align-items-end justify-content-between bb-border pb-xxl-15 pb-lg-10 pb-9 mb-xxl-15 mb-lg-10 mb-9">
            <div className="col-lg-7">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-5">
                <div className="pricing-title">
                  <div
                    className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5"
                    data-aos="zoom-in-left"
                    data-aos-duration={1500}
                  >
                    Testimonials
                  </div>
                  <h2
                    className="stitle"
                    data-aos="zoom-in"
                    data-aos-duration={1800}
                  >
                    Some Of Our <span className="fw-400">Respected</span> Happy
                    Clients Say
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="zoom-in-right"
              data-aos-duration={1600}
            >
              <div className="d-flex justify-content-md-end">
                <div className="d-flex align-items-center gap-3">
                  <ul className="customer-man d-flex align-items-center">
                    <li>
                      <img src="/assets/img/team/avatar1.png" alt="img" />
                    </li>
                    <li>
                      <img src="/assets/img/team/avatar2.png" alt="img" />
                    </li>
                    <li>
                      <img src="/assets/img/team/avatar3.png" alt="img" />
                    </li>
                    <li>
                      <img src="/assets/img/team/avatar4.png" alt="img" />
                    </li>
                  </ul>
                  <div className="review-cont">
                    <div className="d-flex align-items-center gap-2 mb-xl-2 mb-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="texts">450+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center g-xxl-15 g-xl-8 g-lg-6 g-4">
            <div className="col-lg-4">
              <div
                className="testimonial-thumb-v2 w-100"
                data-aos="zoom-in"
                data-aos-duration={1800}
              >
                <img
                  src="/assets/img/testimonial/regulation-arrow.png"
                  alt="img"
                  className="w-100 h-100"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="swiper testimonial-wrapv2">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  {testimonialData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="testimonial-item2 bg1-clr p-xxl-15 p-xl-10 p-lg-6 p-sm-5 p-5">
                        <svg
                          width={60}
                          height={43}
                          viewBox="0 0 60 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 25.8H12.8571L4.28564 43H17.1428L25.7143 25.8V0H0V25.8Z"
                            fill="#ff3131"
                          />
                          <path
                            d="M34.2852 0V25.8H47.1423L38.5708 43H51.4279L59.9994 25.8V0H34.2852Z"
                            fill="#ff3131"
                          />
                        </svg>

                        <p className="pra-clr mt-xxl-10 mt-xl-8 mt-lg-7 mt-6 mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                          “{item.quote}”
                        </p>

                        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-3">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="radius100"
                            />
                            <div className="cont">
                              <h6 className="mb-2 white-clr">{item.name}</h6>
                              <span className="pra-clr">
                                {item.designation}
                              </span>
                            </div>
                          </div>
                          <div className="slider-button d-flex gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                            <button
                              className="cmn-prev cmn-border d-center"
                              tabIndex={0}
                              aria-label="Previous slide"
                            >
                              <i className="fas fa-chevron-left" />
                            </button>
                            <button
                              className="cmn-next cmn-border d-center"
                              tabIndex={0}
                              aria-label="Next slide"
                            >
                              <i className="fas fa-chevron-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
