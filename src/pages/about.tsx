import AllPageDescription from "@/components/app/all-page-description";
import BannerImgDesk from "/banner.png";
import BannerImgMobile from "/bannerMobile.png";

const About = () => {
  return (
    <div>
      <AllPageDescription header="About">
        Little about me. Also, It’s not that hard to find my contact just search
        <span className="gradient retro-2"> real_praveenraj.</span>
      </AllPageDescription>
      <img
        className="sm:block hidden my-5 mb-10 rounded-[25px] px-4 w-auto"
        src={BannerImgDesk}
      />
      <img
        className="sm:hidden block my-5 mb-10 rounded-[25px] px-5 w-auto"
        src={BannerImgMobile}
      />
      <p className="text-lg leading-[140%] my-4 mx-3 px-4 sm:mx-auto">
        I’m a Frontend Engineer at{" "}
        <a className="gradient sky-2" href="https://www.lcscon.com/">
          LCS Controls Private Ltd
        </a>
        . I adore building user-friendly websites that are{" "}
        <span className="font-extrabold gradient sky-2">
          visually engaging interfaces, high-performance,
        </span>{" "}
        and elegant yet scalable. I consider myself to be a{" "}
        <span className="font-extrabold gradient sky-2">lifelong learner</span>.
        I’m also interested in Designing, and I adore experimenting with new
        ideas and putting together fantastic projects. I’ve been fascinated by
        technology since I was a child and grown up as a Engineer.
      </p>
    </div>
  );
};

export default About;
