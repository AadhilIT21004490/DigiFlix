"use client";
import Layout from "@/components/layout/Layout";
import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Tilt } from "react-tilt";

const toltOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.01,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const groupedTeamData = [
  //   {
  //     title: "CEO & Director",
  //     members: [
  //       {
  //         id: 17,
  //         name: "Mufazir Ahamath",
  //         designation: "CEO",
  //         image: "/assets/img/team/mufa.png",
  //         linkedin: "/",
  //         facebook: "/",
  //       },
  //       {
  //         id: 18,
  //         name: "Aadhil Shihabdeen",
  //         designation: "Software Engineer",
  //         image: "/assets/img/team/vec1.png",
  //         linkedin: "/",
  //         facebook: "/",
  //       },
  //     ],
  //   },

  {
    title: "Finance & Operations",
    members: [
      {
        id: 1,
        name: "Ahamed Faras",
        designation: "Senior Accountant",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 2,
        name: "Akthas Ahamed",
        designation: "Team Head",
        image: "/assets/img/team/vec1.png",
      },
    ],
  },
  {
    title: "Design & Creative",
    members: [
      {
        id: 3,
        name: "Janoos Arsan",
        designation: "Lead Designer",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 4,
        name: "Jasrin",
        designation: "Lead Designer",
        image: "/assets/img/team/vec2.png",
      },
      {
        id: 5,
        name: "Dhill Abnas",
        designation: "Designer",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 6,
        name: "Fathima Ristha",
        designation: "Designer",
        image: "/assets/img/team/vec2.png",
      },
    ],
  },
  {
    title: "Development & Technology",
    members: [
      {
        id: 7,
        name: "Aadhil Mohamed",
        designation: "Data Scientist",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 8,
        name: "Ahamed Aashik",
        designation: "Senior Developer",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 9,
        name: "Mohamed Nusky",
        designation: "Developer",
        image: "/assets/img/team/vec1.png",
      },
    ],
  },
  {
    title: "Marketing Specialists",
    members: [
      {
        id: 10,
        name: "Zayed Roshan",
        designation: "Marketing Manager",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 11,
        name: "Mohammed Aafrith",
        designation: "Marketing Executive",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 12,
        name: "Rashan",
        designation: "Marketing Executive",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 13,
        name: "Mohammed Amaan",
        designation: "Marketing Executive",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 14,
        name: "Afkhan Ahamed",
        designation: "AdSense Specialist",
        image: "/assets/img/team/vec1.png",
      },
    ],
  },
  {
    title: "Content & Media",
    members: [
      {
        id: 15,
        name: "Nithas Ahamed",
        designation: "Content Creator",
        image: "/assets/img/team/vec1.png",
      },
      {
        id: 16,
        name: "Hadhi Hasan",
        designation: "Video Editor / Animator",
        image: "/assets/img/team/vec1.png",
      },
    ],
  },
];

export default function Team() {
  const [tiltOptions, setTiltOptions] = useState(toltOptions);

  useEffect(() => {
    const updateScale = () => {
      const isMobile = window.innerWidth < 768;
      setTiltOptions({
        ...toltOptions,
        scale: isMobile ? 1.005 : 1.01, // Slightly lower on mobile
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Our Team">
      <section className="team-section pt-10 pb-space">
        <div className="container">
          <div className="faqs-title text-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
            <Link
              href="/team"
              className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5"
            >
              The Team
            </Link>
            <h2 className="stitle mb-5">
              Our<span className="fw-400">Our Strength</span>
            </h2>
            <p className="">
              Meet the creative minds behind DigiFlix. Our diverse team of
              strategists, designers, developers, and marketers brings passion,
              innovation, and expertise to every project. Together, we craft
              exceptional digital marketing solutions tailored to your brand’s
              unique needs. We believe that collaboration fuels creativity and
              our team is committed to turning ideas into impactful results.
            </p>
          </div>
          {/* Mufazir content */}
          <div className="row align-items-center gy-5 gx-6">
            {/* Left: Image Card */}
            <div
              className="col-lg-6 d-flex justify-content-center"
              data-aos="zoom-in-left"
              data-aos-duration={1400}
            >
              <Tilt className="team-common-item tilt">
                <div className="text-center">
                  <Image
                    src="/assets/img/team/mufa.png"
                    alt="Mufazir Ahamath"
                    width={350}
                    height={450}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                    <span className="text-uppercase white-clr d-block mb-2">
                      CEO
                    </span>
                    <h5>
                      <Link href="/team-details" className="htheme theme-clr">
                        Mufazir Ahamath
                      </Link>
                    </h5>
                  </div>
                </div>
              </Tilt>
            </div>

            {/* Right: Description */}
            <div
              className="col-lg-6"
              data-aos="zoom-in-up"
              data-aos-duration={1400}
            >
              <h2 className="stitle d-flex align-items-center mb-4 gap-3">
                CEO's Message
              </h2>
              <p className="white-clr">
                My passion for innovation drives our team to deliver top-notch,
                tailored solutions. At DigiFlix, we focus on helping businesses
                achieve their goals and excel in the digital landscape through
                creativity, strategy, and precision. Every project is a step
                toward transforming ideas into impactful digital experiences.
              </p>
            </div>
          </div>

          {/* Julaina Content */}
          <div className="row mt-5 align-items-center gy-5 gx-6">
            {/* Left on desktop, Right on mobile: Image Card */}
            <div
              className="col-lg-6 d-flex justify-content-center order-lg-2 order-1"
              data-aos="zoom-in-left"
              data-aos-duration={1400}
            >
              <Tilt className="team-common-item tilt">
                <div className="text-center">
                  <Image
                    src="/assets/img/team/vec2.png"
                    alt="Julaina Aboosali"
                    width={350}
                    height={450}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                    <span className="text-uppercase white-clr d-block mb-2">
                      Director
                    </span>
                    <h5>
                      <Link href="/team-details" className="htheme theme-clr">
                        Julaina Aboosali
                      </Link>
                    </h5>
                  </div>
                </div>
              </Tilt>
            </div>

            {/* Right on desktop, Left on mobile: Description */}
            <div
              className="col-lg-6 order-lg-1 order-2"
              data-aos="zoom-in-up"
              data-aos-duration={1400}
            >
              <h2 className="stitle d-flex align-items-center mb-4 gap-3">
                Director's Message
              </h2>
              <p className="white-clr">
                At DigiFlix, my focus is on driving client success through
                digital transformation. I believe in leading with creativity,
                precision, and purpose. Every project is a chance to make a
                measurable impact, and I’m proud to guide a team that
                consistently delivers innovative solutions tailored to each
                client’s unique goals.
              </p>
            </div>
          </div>

          {groupedTeamData.map((group, i) => (
            <div key={i} className="mb-5">
              <div className="d-flex align-items-center pt-7 pb-5 gap-3 mb-4">
                <h4
                  className="mb-0 theme-clr fw-bold"
                  style={{ minWidth: "250px" }}
                >
                  {group.title}
                </h4>
                <hr className="flex-grow-1 opacity-25" />
              </div>
              <div className="row g-xxl-7 g-xl-5 g-lg-4 g-3 justify-content-center">
                {group.members.map((member, index) => (
                  <Tilt
                    key={member.id}
                    options={tiltOptions}
                    className="col-xl-3 col-lg-4 col-md-6 col-6"
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
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
                          <span className="text-uppercase white-clr d-block mb-2">
                            {member.designation}
                          </span>
                          <h5>
                            <Link href="/team" className="htheme theme-clr">
                              {member.name}
                            </Link>
                          </h5>
                        </div>
                        {(member.linkedin || member.facebook) && (
                          <ul className="common-social d-grid align-items-center gap-2">
                            {member.linkedin && (
                              <li>
                                <Link
                                  href={member.linkedin}
                                  className="d-center"
                                  target="_blank"
                                >
                                  <Linkedin size={16} fill="white" />
                                </Link>
                              </li>
                            )}
                            {member.facebook && (
                              <li>
                                <Link
                                  href={member.facebook}
                                  className="d-center"
                                  target="_blank"
                                >
                                  <Facebook size={16} fill="white" />
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
