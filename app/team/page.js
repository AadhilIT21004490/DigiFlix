"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";
const toltOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.01, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",
};
// Team Data
const teamData = [
  {
    id: 1,
    name: "Mufazir Ahamath",
    designation: "CEO",
    image: "/assets/img/team/mufa.png",
    socials: ["/#", "/#", "/#", "/#"], // Add actual URLs if needed
  },
  {
    id: 2,
    name: "Aadhil",
    designation: "Software Engineer",
    image: "/assets/img/team/adl.png",
    socials: ["/#", "/#", "/#", "/#"],
  },
  // Add more members as needed
];

export default function Team() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Our Team">
        <section className="team-section pt-space pb-space">
          <div className="container">
            <div className="row g-xxl-7 g-xl-5 g-lg-4 g-3">
              {teamData.map((member, index) => (
                <Tilt
                  key={member.id}
                  options={toltOptions}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-aos="zoom-in-left"
                  data-aos-duration={1400 + index * 200}
                >
                  <div className="team-common-item tilt">
                    <div className="thumb position-relative overflow-hidden w-100">
                      <div
                        className="overflow-hidden w-100"
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "350px",
                        }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{ objectFit: "cover" }} // or 'contain'
                        />
                      </div>
                      {/* <img src={member.image} alt="img" className="overflow-hidden w-100" /> */}
                      <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                        <span className="text-uppercase white-clr d-block mb-2">
                          {member.designation}
                        </span>
                        <h5>
                          <Link
                            href="/team-details"
                            className="htheme white-clr"
                          >
                            {member.name}
                          </Link>
                        </h5>
                      </div>
                      <ul className="common-social d-grid align-items-center gap-2">
                        {member.socials.map((social, i) => (
                          <li
                            key={i}
                            data-aos="zoom-in-right"
                            data-aos-duration={1400 + i * 200}
                          >
                            <Link href={social} className="d-center">
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z"
                                  fill="white"
                                />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
