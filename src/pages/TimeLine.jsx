import Description from "@/components/app/Description";
import TimeLinesContainer from "@/components/app/TimeLinesContainer";
import { Instagram, Linkedin } from "lucide-react";

const size = 15;

const socialLinksContent = [
  {
    icon: <Linkedin size={size} />,
    label: "LinkedIn",
    class: "orange",
    link: "https://www.linkedin.com/in/developer-praveen-raj/",
  },
  {
    icon: <Instagram size={size} />,
    label: "Instagram",
    class: "purple",
    link: "https://www.instagram.com/real_praveenraj/https://www.instagram.com/real_praveenraj/;",
  },
];
const timelines = [
  {
    range: "2015 - 2016",
    label: [
      { text: "education", class: "yellow" },
      { text: "SSLC", class: "green" },
    ],
    title: "SSLC",
    desc: "Studied @ Swami Vivekananda Maticulation Hr. Sec. School and Secured 91%",
    img: "",
    class: "yellow",
  },
  {
    range: "2017 - 2018",
    label: [
      { text: "education", class: "yellow" },
      { text: "HSC", class: "green" },
    ],
    title: "HSC",
    desc: "Studied @ Swami Vivekananda Maticulation Hr. Sec. School and Secured 60.75%",
    img: "",
    class: "purple",
  },
  {
    range: "2018 - 2022",
    label: [
      { text: "education", class: "yellow" },
      { text: "graduate", class: "green" },
    ],
    title: "B.E. Electrical And Electronics Engineering",
    desc: "Grudated from Meenakshi College Of Engineering and Secured 8.15 CGPA",
    img: "",
    class: "yellow",
  },
  {
    range: "May 2023 - present",
    label: [{ text: "work", class: "orange" }],
    title: "LCS Controls Private Limited.",
    desc: "Working as a Frontend Engineer",
    img: "",
    class: "green",
  },
];

function TimeLine() {
  return (
    <>
      <Description header="Timeline">
        The linear view of some milestones and notable moments that happened so
        far ({timelines.length} key moments). And you can always find more
        information on LinkedIn.
      </Description>
      <div className="flex justify-center gap-10">
        {socialLinksContent.map((item, i) => (
          <SocialLinks item={item} key={`social-links-${i}`} />
        ))}
      </div>
      <TimeLinesContainer timelines={timelines} />
    </>
  );
}

function SocialLinks({ item }) {
  return (
    <a
      target="_blank"
      href={item.link}
      className={`flex items-center gap-1 px-3 py-1.5 font-semibold text-base rounded-2xl ${item.class}`}
    >
      {item.icon}
      {item.label}
    </a>
  );
}

export default TimeLine;
