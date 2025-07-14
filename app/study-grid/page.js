"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "Flyers",
  "Web Development",
  "Branding",
  "Package Design",
];
const portfolioData = [
  {
    id: 1,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (1).png",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/study-details",
  },
  {
    id: 7,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (1).jpg",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/study-details",
  },
  {
    id: 2,
    category: "Branding",
    image: "/assets/img/case/study-grid2.png",
    label: "Branding",
    title: "Transforming Challenges into Opportunities",
    link: "/study-details",
  },
  {
    id: 3,
    category: "Web Development",
    image: "/assets/img/case/study-grid3.png",
    label: "Creative",
    title: "Varius suscipit lectus. Suspendisse",
    link: "/study-details",
  },
  {
    id: 4,
    category: "Package Design",
    image: "/assets/img/case/study-grid4.png",
    label: "Branding",
    title: "Internet tend to repeat predefined",
    link: "/study-details",
  },
  {
    id: 5,
    category: "Flyers",
    image: "/assets/img/case/study-grid5.png",
    label: "Creative",
    title: "Available, but the majority have",
    link: "/study-details",
  },
  {
    id: 6,
    category: "Web Development",
    image: "/assets/img/case/study-grid6.png",
    label: "Branding",
    title: "Transforming Challenges into Opportunities",
    link: "/study-details",
  },
];

export default function StudyGrid() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Portfolio">
      {isPreviewOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0, 0, 0, 0.8)", zIndex: 1050 }}
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="position-relative"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            <img
              src={previewImage}
              alt="Preview"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "90vh", objectFit: "contain" }}
            />
            <button
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => setIsPreviewOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <section className="case-study pt-10 pb-space">
        <div className="container">
          <div className="text-center mb-8">
            <p>
              We’ve successfully delivered a wide range of diverse projects each
              one a reflection of our versatility, creativity, and unwavering
              commitment to excellence. From branding and web development to
              full-scale digital campaigns, our portfolio showcases the impact
              we create for businesses across industries.
            </p>
          </div>

          {/* Tabs */}
          <div className="d-flex justify-content-center mb-5 bg-theme rounded-pill p-2 flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`btn px-4 py-2 rounded-pill fw-bold ${
                  activeCategory === cat
                    ? "bg-danger text-white border-0 shadow-sm"
                    : "radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="row g-xxl-7 g-xl-6 g-6">
            {filteredData.map((item, idx) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6" // ← reduced from col-lg-6 to col-lg-4
                data-aos="zoom-in-left"
                data-aos-duration={1400}
              >
                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                  <div
                    className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4"
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "4 / 3",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.category}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover", cursor: "pointer" }}
                      className="rounded w-100"
                      onClick={() => {
                        setPreviewImage(item.image);
                        setIsPreviewOpen(true);
                      }}
                    />
                  </div>
                  <div className="blog-cont">
                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                      <Link
                        href='#'
                        className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2"
                      >
                        {item.category}
                        <span className="rot60 d-inline-block ml-10">
                          <i className="fas fa-arrow-up theme-clr" />
                        </span>
                      </Link>
                    </div>
                    <h5>
                      <Link
                        href={item.link}
                        className="white-clr d-flex align-items-center justify-content-between gap-3"
                      >
                        {item.title}
                        <span className="rot60">
                          <i className="fas fa-arrow-up theme-clr" />
                        </span>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
