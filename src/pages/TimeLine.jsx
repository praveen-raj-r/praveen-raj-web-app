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

function TimeLine() {
    return (
        <>
            <Description header="Timeline">
                The linear view of some milestones and notable moments that happened so
                far (127 key moments). And you can always find more information on
                LinkedIn.
            </Description>
            <div className="flex justify-center gap-10">
                {socialLinksContent.map((item, i) => (
                    <SocialLinks item={item} key={`social-links-${i}`} />
                ))}
            </div>
            <TimeLinesContainer />
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
