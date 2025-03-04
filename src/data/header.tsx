import { Github, Instagram, Linkedin } from "lucide-react";

export const socialLinksData = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/developer-praveen-raj/",
  },
  { icon: Github, link: "https://github.com/praveen-raj-r" },
  { icon: Instagram, link: "https://www.instagram.com/real_praveenraj/" },
];

export const headerLinksData = [
  { link: "/timeline", label: "timeline", effect: true },
  { link: "/about", label: "about" },
  { link: "/PraveenRaj_softwareEngineer_Resume.pdf", label: "resume" },
  { link: "/work", label: "work" },
];

export const sidebar = [
  {
    label: "timeline",
    link: "/timeline",
  },
  {
    label: "resume",
    download: "/PraveenRaj_softwareEngineer_Resume.pdf",
  },
  {
    label: "work",
    link: "/work",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "tips",
    link: "/tips",
  },
  {
    label: "certifications",
    link: "/certifications",
  },
  {
    label: "links",
    link: "/links",
  },

  {
    label: "tech Stack",
    link: "/stack",
  },
];

export const dropDownData = [
  { label: "tips", link: "/tips" },
  { label: "links", link: "/links" },
  { label: "tech stack", link: "/stack" },
  { label: "certifications", link: "/certifications" },
];
