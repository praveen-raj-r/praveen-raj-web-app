import Contact from "@/components/app/contact";
import Footer from "@/components/app/footer";
import Header from "@/components/app/header";
import Intro from "@/components/app/intro";
import Projects from "@/components/app/projects";
import Resumes from "@/components/app/resumes";
import TechStack from "@/components/app/tech-stack";
import Texture from "@/components/app/texture";
import Timeline from "@/components/app/timeline";

const LandingPage = () => {
  return (
    <main className="min-h-screen relative before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/header-gradient.svg'),_url('/footer-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px] font-inter">
      <Header />
      <Intro />
      <Resumes />
      <Projects />
      <Timeline />
      <TechStack />
      <Contact />
      <Footer />
      <Texture />
    </main>
  );
};

export default LandingPage;
