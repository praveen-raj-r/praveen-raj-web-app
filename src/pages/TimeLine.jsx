import Description from "@/components/app/Description";
import TimeLinesContainer from "@/components/app/TimeLinesContainer";
import { Instagram, Linkedin } from "lucide-react";

import timelines from "@/data/timelines";

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
