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
    range: "2012",
    label: [{ text: "first", class: "green" }],
    title: "Hello World!",
    desc: "First time I started using computer",
    img: "",
  },
  {
    range: "May 31, 2016",
    label: [
      { text: "education", class: "yellow" },
      { text: "SSLC", class: "green" },
    ],
    title: "SSLC",
    desc: "Studied @ Swami Vivekananda Maticulation Hr. Sec. School and Secured 91%",
    img: "",
  },
  {
    range: "May 15, 2018",
    label: [
      { text: "education", class: "yellow" },
      { text: "HSC", class: "green" },
    ],
    title: "HSC",
    desc: "Studied @ Swami Vivekananda Maticulation Hr. Sec. School and Secured 60.75%",
    img: "",
  },
  {
    range: "Aug 31, 2018",
    label: [
      { text: "education", class: "green" },
      { text: "starting", class: "purple" },
    ],
    title: "B.E. Electrical And Electronics Engineering",
    desc: "Excited to join Meenakshi College of Engineering for undergraduate degree",
    img: "",
  },
  {
    range: "Sep 31, 2022",
    label: [
      { text: "education", class: "green" },
      { text: "graduation", class: "yellow" },
    ],
    title: "B.E. Electrical And Electronics Engineering",
    desc: "Graduated from Meenakshi College of Engineering, achieving a CGPA of 8.16.",
    img: "",
  },
  {
    range: "May 03, 2023",
    label: [{ text: "job", class: "orange" }],
    title: "Joined LCS Controls Private Limited.",
    desc: "Excited to join LCS as a Frontend Engineer",
    img: "",
  },
  {
    range: "Oct 31, 2024",
    label: [{ text: "happy", class: "red" }],
    title: "praveen-raj.vercel.app",
    desc: "Published my first Personal Website",
    img: "",
  },
];

function TimeLine() {
  return (
    <>
      <Description header="Timeline">
        &quot;Explore a streamlined timeline of {timelines.length} pivotal
        milestones and standout achievements that have shaped my journey so far.
        For further insights and a comprehensive view of my professional path,
        visit my LinkedIn profile.&quot;
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
