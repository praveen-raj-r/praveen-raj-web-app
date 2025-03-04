import AllPageDescription from "@/components/app/all-page-description";
import { instagramUrl, linkedUrl } from "@/lib/constants";
import { Instagram, Linkedin } from "lucide-react";
import { JSX } from "react";

const size = 15;

const socialLinksContent = [
  {
    icon: <Linkedin size={size} />,
    label: "LinkedIn",
    class: "orange",
    link: linkedUrl,
  },
  {
    icon: <Instagram size={size} />,
    label: "Instagram",
    class: "purple",
    link: instagramUrl,
  },
];

const Timeline = () => {
  return (
    <div>
      <AllPageDescription header="Timeline">
        &quot;Discover seven key milestones and achievements that have shaped my
        journey so far. From important career moments to standout
        accomplishments, this timeline gives a quick glimpse into my growth. For
        a more detailed view, visit my LinkedIn profile.&quot;
      </AllPageDescription>
      <div className="flex justify-center gap-10">
        {socialLinksContent.map((item, i) => (
          <SocialLinks item={item} key={`social-links-${i}`} />
        ))}
      </div>
    </div>
  );
};
interface SocialLinkItem {
  icon: JSX.Element;
  label: string;
  class: string;
  link: string;
}

function SocialLinks({ item }: { item: SocialLinkItem }) {
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
export default Timeline;
