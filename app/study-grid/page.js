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
  "Packaging",
];
const portfolioData = [
   {
    id: 1,
    category: "Web Development",
    image: "/assets/img/portfolio/web/Mock - Web - Agri.jpg",
    label: "Creative",
    title: "Mock - Web - Agri",
    link: "/#"
  },
  {
    id: 2,
    category: "Web Development",
    image: "/assets/img/portfolio/web/Mock - Web - aldeib.jpg",
    label: "Creative",
    title: "Mock - Web - aldeib",
    link: "/#"
  },
  {
    id: 3,
    category: "Web Development",
    image: "/assets/img/portfolio/web/Mock - Web - ecs.jpg",
    label: "Creative",
    title: "Mock - Web - ecs",
    link: "/#"
  },
  {
    id: 4,
    category: "Web Development",
    image: "/assets/img/portfolio/web/Mock - Web - espectro.jpg",
    label: "Creative",
    title: "Mock - Web - espectro",
    link: "/#"
  },
  {
    id: 5,
    category: "Web Development",
    image: "/assets/img/portfolio/web/Mock - Web - mcc.jpg",
    label: "Creative",
    title: "Mock - Web - mcc",
    link: "/#"
  },
  {
    id: 6,
    category: "Web Development",
    image: "/assets/img/portfolio/web/Mock - Web - primelanka.jpg",
    label: "Creative",
    title: "Mock - Web - primelanka",
    link: "/#"
  },
  {
    id: 7,
    category: "Web Development",
    image: "/assets/img/portfolio/web/Mock - Web - royalyouths.jpg",
    label: "Creative",
    title: "Mock - Web - royalyouths",
    link: "/#"
  },
  {
    id: 8,
    category: "Web Development",
    image: "/assets/img/portfolio/web/Mock - Web - vanem.jpg",
    label: "Creative",
    title: "Mock - Web - vanem",
    link: "/#"
  },
  {
    id: 9,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/AdVision.png",
    label: "Creative",
    title: "AdVision",
    link: "/#"
  },
  {
    id: 10,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/afka.png",
    label: "Creative",
    title: "afka",
    link: "/#"
  },
  {
    id: 11,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/AKP Trans.png",
    label: "Creative",
    title: "AKP Trans",
    link: "/#"
  },
  {
    id: 12,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/aldeib2.png",
    label: "Creative",
    title: "aldeib2",
    link: "/#"
  },
  {
    id: 13,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/ceylonadz.png",
    label: "Creative",
    title: "ceylonadz",
    link: "/#"
  },
  {
    id: 14,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/Delight.png",
    label: "Creative",
    title: "Delight",
    link: "/#"
  },
  {
    id: 15,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/ECS.png",
    label: "Creative",
    title: "ECS",
    link: "/#"
  },
  {
    id: 16,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/f2f.png",
    label: "Creative",
    title: "f2f",
    link: "/#"
  },
  {
    id: 17,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/GS.png",
    label: "Creative",
    title: "GS",
    link: "/#"
  },
  {
    id: 18,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/handymart.png",
    label: "Creative",
    title: "handymart",
    link: "/#"
  },
  {
    id: 19,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/kanoos.png",
    label: "Creative",
    title: "kanoos",
    link: "/#"
  },
  {
    id: 20,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/pearlgreen.png",
    label: "Creative",
    title: "pearlgreen",
    link: "/#"
  },
  {
    id: 21,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/prime.png",
    label: "Creative",
    title: "prime",
    link: "/#"
  },
  {
    id: 22,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/techspark.png",
    label: "Creative",
    title: "techspark",
    link: "/#"
  },
  {
    id: 23,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/Akpsale.jpg",
    label: "Creative",
    title: "Akpsale",
    link: "/#"
  },
  {
    id: 24,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/ariana.jpg",
    label: "Creative",
    title: "ariana",
    link: "/#"
  },
  {
    id: 25,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/axis.jpg",
    label: "Creative",
    title: "axis",
    link: "/#"
  },
  {
    id: 26,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/bookfair.jpg",
    label: "Creative",
    title: "bookfair",
    link: "/#"
  },
  {
    id: 27,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/cellasia.jpg",
    label: "Creative",
    title: "cellasia",
    link: "/#"
  },
  {
    id: 28,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/Chola Cafe.jpg",
    label: "Creative",
    title: "Chola Cafe",
    link: "/#"
  },
  {
    id: 29,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/cream carving.jpg",
    label: "Creative",
    title: "cream carving",
    link: "/#"
  },
  {
    id: 30,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/grillup.jpg",
    label: "Creative",
    title: "grillup",
    link: "/#"
  },
  {
    id: 31,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/hijas acedemy.jpg",
    label: "Creative",
    title: "hijas acedemy",
    link: "/#"
  },
  {
    id: 32,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/Kochi.jpg",
    label: "Creative",
    title: "Kochi",
    link: "/#"
  },
  {
    id: 33,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/Lalaa Vaapai.jpg",
    label: "Creative",
    title: "Lalaa Vaapai",
    link: "/#"
  },
  {
    id: 34,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/mimi.jpg",
    label: "Creative",
    title: "mimi",
    link: "/#"
  },
  {
    id: 35,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/rmc.jpg",
    label: "Creative",
    title: "rmc",
    link: "/#"
  },
  {
    id: 36,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/sawabif.jpg",
    label: "Creative",
    title: "sawabif",
    link: "/#"
  },
  {
    id: 37,
    category: "Branding",
    image: "/assets/img/portfolio/Branding/we decor.jpg",
    label: "Creative",
    title: "we decor",
    link: "/#"
  },
  {
    id: 38,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (1).png",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 39,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (1).jpg",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 40,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (2).jpg",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 41,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (3).jpg",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 42,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (3).png",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 43,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (4).jpg",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 44,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (5).jpg",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 45,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (6).jpg",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 46,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/Digiflix (7).jpg",
    label: "Creative",
    title: "A Simple Social Media Marketing Checklist",
    link: "/#"
  },
  {
    id: 47,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (8).jpg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 48,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (9).jpg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 49,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (9).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 50,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (10).jpg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 51,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (10).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 52,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (11).jpg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 53,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (11).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 54,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (12).jpg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 55,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (12).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 56,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (13).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 57,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (14).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 58,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (15).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 59,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (16).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 60,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (17).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 61,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (18).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 62,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (19).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 63,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (20).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 64,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (21).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 65,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (22).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 66,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (23).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 67,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (24).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 68,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (27).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 69,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (28).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 70,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (29).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 71,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (30).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 72,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (31).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 73,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (32).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 74,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (33).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 75,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (34).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 76,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (35).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 77,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (36).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 78,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (37).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 79,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (38).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 80,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (39).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 81,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (40).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 82,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (41).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 83,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (42).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 84,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (43).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 85,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (44).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 86,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (45).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 87,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (46).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 88,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (47).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 89,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (48).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 90,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (49).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 91,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (50).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 92,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (51).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 93,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (52).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 94,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (53).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 95,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (54).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 96,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (55).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 97,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (56).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 98,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (57).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 99,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (58).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 100,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (59).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 101,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (60).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 102,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (61).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 103,
    category: "Flyers",
    image: "/assets/img/portfolio/eFlyers/DigiFlix (62).jpeg",
    label: "Creative",
    title: "DigiFlix",
    link: "/#"
  },
  {
    id: 104,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (1).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 105,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (2).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 106,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (3).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 107,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (4).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 108,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (5).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 109,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (6).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 110,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (7).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 111,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (8).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 112,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (9).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 113,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (10).jpeg",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 114,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (1).png",
    label: "Creative",
    title: "Pack",
    link: "/#"
  },
  {
    id: 115,
    category: "Packaging",
    image: "/assets/img/portfolio/Pacakge Design/Pack (2).png",
    label: "Creative",
    title: "Pack",
    link: "/#"
  }
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
                      aspectRatio: "4 / 3", // Adjust the Box size here
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
