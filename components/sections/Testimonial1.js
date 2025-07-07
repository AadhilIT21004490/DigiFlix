
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
}
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
    title: "Creative Minds with a Passion for Results",
    image: "/assets/img/testimonial/t-version01.png",
    quote: `The DigiFlix team is full of creative minds who are truly passionate about delivering results. 
            Their attention to detail and commitment to our brand made the entire experience seamless 
            and successful.`,
  },
];



export default function Testimonial1() {
    return (
        <>

            <section className="testimonial-version01-section pt-20 pb-space position-relative">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-11">
                            <div className="swiper testimonial-version01 position-relative">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    {testimonialData.map((item) => (
                                        <SwiperSlide key={item.id}>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                            <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                            <img src="/assets/img/testimonial/vector01.png" alt="vector" />
                                            </div>
                                            <div className="content ps-md-10">
                                            <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                <i className="fas fa-quote-right theme-clr" />
                                            </div>
                                            <h6 className="white-clr mb-2">"{item.title}"</h6>
                                            <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">{item.quote}</p>
                                            <div className="desig">
                                                <h6 className="white-clr mb-2">{item.name}</h6>
                                                <span className="theme-clr">{item.designation}</span>
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
                <div className="slider-button gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                    <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                        <i className="fas fa-chevron-up" />
                    </button>
                    <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                        <i className="fas fa-chevron-down" />
                    </button>
                </div>
            </section>
        </>
    )
}
