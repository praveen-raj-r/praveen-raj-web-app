import {
  githubUrl,
  instagramUrl,
  linkedUrl,
  resumePdfUrl,
} from "@/lib/constants";
import { Github, Instagram, Linkedin } from "lucide-react";

export const socialLinksData = [
  {
    icon: Linkedin,
    link: linkedUrl,
  },
  { icon: Github, link: githubUrl },
  { icon: Instagram, link: instagramUrl },
];

export const headerLinksData = [
  { link: "/timeline", label: "timeline", effect: true },
  { link: "/about", label: "about" },
  { link: resumePdfUrl, label: "resume" },
  { link: "/work", label: "work" },
  { label: "tech stack", link: "/stack" },
];

export const sidebar = [
  {
    label: "timeline",
    link: "/timeline",
  },
  {
    label: "resume",
    download: resumePdfUrl,
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
  { label: "certifications", link: "/certifications" },
];
