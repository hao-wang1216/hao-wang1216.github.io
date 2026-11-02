// Everything on the page lives here. Editing this one file covers almost every
// visible content change; components in src/components/ only lay it out.
//
// Fields that need inline links, bold or italics are HTML snippets rendered
// with Astro's `set:html`.
import photo from "./assets/photo.jpg";
import dlmuLogo from "./assets/logos/dlmu.svg";
// Official red emblem: https://xb.hnu.edu.cn/info/1043/1558.htm
import hnuLogo from "./assets/logos/hnu.jpg";
import prscdImage from "./assets/projects/prscd.png";
import mapSamImage from "./assets/projects/map-sam.png";
import unicodImage from "./assets/projects/unicod.png";

export const CV_URL = "";

export const profile = {
  nameEn: "Hao Wang",
  nameCn: "王昊",
  role: ["Undergraduate Student", "Dalian Maritime University"],
  location: "Dalian, China",
  photo,
  links: [
    { label: "Email", href: "mailto:King.Whao@outlook.com" },
    {
      label: "GitHub",
      href: "https://github.com/hao-wang1216?tab=repositories",
      newTab: true,
    },
  ],
};

export const about = [
  `I am currently an undergraduate student at Dalian Maritime University.
   During my undergraduate studies, I have conducted research under the guidance of
   <a href="https://ist.dlmu.edu.cn/info/1287/7408.htm" target="_blank" rel="noopener noreferrer">Prof. Jiqing Zhang</a>
   at Dalian Maritime University and
   <a href="https://ninghailong.github.io/" target="_blank" rel="noopener noreferrer">Prof. Hailong Ning</a>
   at Xi'an University of Posts and Telecommunications.
   I have been admitted to Hunan University's direct-entry Ph.D. program for 2027.
   My prospective co-advisors are
   <a href="https://robotics.hnu.edu.cn/info/1176/2967.htm" target="_blank" rel="noopener noreferrer">Prof. Shutao Li</a> and
   <a href="https://robotics.hnu.edu.cn/info/1176/2958.htm" target="_blank" rel="noopener noreferrer">Prof. Renwei Dian</a>.`,
  `My research interests center on robotic visual perception, including image segmentation and object detection,
   with a focus on weakly supervised and unsupervised learning, as well as large multimodal models.
   I am also exploring large language models (LLMs) and AI agents.`,
];

export const news = [
  {
    date: "2024",
    text: "National Scholarship for Undergraduate Students.",
  },
];

export const education = [
  {
    org: "Hunan University",
    desc: "Ph.D.",
    role: "Prospective co-advisors: Prof. Shutao Li and Prof. Renwei Dian",
    date: "Expected 2027",
    upcoming: true,
    logo: hnuLogo,
    url: "https://www.hnu.edu.cn/",
  },
  {
    org: "Dalian Maritime University",
    role: "Undergraduate Student",
    date: "2023 - Present",
    logo: dlmuLogo,
    url: "https://www.dlmu.edu.cn/",
  },
];

export const publications = [];

export const workingPapers = [
  {
    title:
      "Progressive Pseudo-Label Optimization for Point-Supervised Change Detection",
    authors: "Hailong Ning, <strong>Hao Wang</strong>",
    meta: "Under review",
    image: prscdImage,
    imageAlt:
      "Overview of the proposed two-stage point-supervised change detection framework.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2609.02171" },
      { label: "Code", href: "https://github.com/hao-wang1216/Point-Supervised-Remote-Sensing-Change-Detection" },
    ],
  },
  {
    title:
      "Modality-Agnostic Prompt Learning for Multi-Modal Camouflaged Object Detection",
    authors: "<strong>Hao Wang</strong>, Jiqing Zhang",
    meta: "Under review",
    image: mapSamImage,
    imageAlt:
      "Overview of Modality-Agnostic Prompt Learning for Multi-Modal Camouflaged Object Detection.",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2604.12380v1" },
      { label: "Code", href: "https://github.com/hao-wang1216/MAP-SAM" },
    ],
  },
  {
    title: "Toward Unified Cross-Modal Camouflaged Object Detection",
    authors: "Jiqing Zhang, <strong>Hao Wang</strong>",
    meta: "Under review",
    image: unicodImage,
    imageAlt: "Overview of Toward Unified Cross-Modal Camouflaged Object Detection.",
    links: [
      { label: "Code", href: "https://github.com/hao-wang1216/UniNet" }
    ],
  },
];

export const experience = [];

// export const projects = [
//   {
//     org: "BIXOCEAN · 边际领域",
//     logo: "/images/bixocean-logo.png",
//     url: "https://bixocean.com/",
//     desc:
//       "Working on algorithm research and development for underwater embodied robotics.",
//     role: "Algorithm Intern · Marine Embodied Intelligence",
//     date: "2026 - Present",
//   },
// ];

export const projects = [];

export const academicService = [
  "AAAI (2027)",
  "ICASSP (2027)",
];

export const teaching = [];

export const lastUpdated = "November 2026";
