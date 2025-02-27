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
  { link: "/skills", label: "skills" },
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
    label: "skills",
    link: "/skills",
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
    label: "links",
    link: "/links",
  },
  {
    label: "Bookshelf",
    link: "/books",
  },
  {
    label: "tech Stack",
    link: "/stack",
  },
];

export const dropDownData = [
  { label: "tips", link: "/tips" },
  { label: "links", link: "/links" },
  { label: "bookshelf", link: "/bookshelf" },
  { label: "tech stack", link: "/tech-stack" },
];
