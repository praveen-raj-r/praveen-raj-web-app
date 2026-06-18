import Contact from "@/components/app/contact";
import Footer from "@/components/app/footer";
import Header from "@/components/app/header";
import Intro from "@/components/app/intro";
import Projects from "@/components/app/projects";
import Resumes from "@/components/app/resumes";
import TechStack from "@/components/app/tech-stack";
import Texture from "@/components/app/texture";
import Timeline from "@/components/app/timeline";
import BlogSection from "@/components/app/blog-section";
import type { SectionConfig, ContentConfig } from "@/types/site-config";

type Props = {
  sections?: Partial<SectionConfig>;
  content?: Partial<ContentConfig>;
};

const LandingPage = ({ sections = {}, content = {} }: Props) => {
  const s = sections as SectionConfig;
  return (
    <main className="min-h-screen relative before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/header-gradient.svg'),_url('/footer-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px] font-inter">
      <Header />
      {s.intro !== false && (
        <Intro
          availabilityVisible={content.availability_visible ?? true}
          availabilityText={content.availability_text ?? "Open to work"}
        />
      )}
      {s.resumes !== false && <Resumes />}
      {s.projects !== false && <Projects />}
      {s.blog !== false && <BlogSection />}
      {s.timeline !== false && <Timeline />}
      {s.tech_stack !== false && <TechStack />}
      {s.contact !== false && <Contact />}
      <Footer />
      <Texture />
    </main>
  );
};

export default LandingPage;
