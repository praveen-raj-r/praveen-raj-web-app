import Profile from "@/components/app/landing-page/profile";

const LandingPage = () => {
  return (
    <div className="p-3">
      <div className="">
        <Profile />

        <p className="sm:text-xl text-lg leading-[150%] my-4 mx-1 sm:mx-auto font-light">
          &quot;As a frontend engineer, I merge design and technology to create
          exceptional user experiences. I specialize in{" "}
          <span className="font-semibold gradient sky-2">
            building high-performance, visually engaging interfaces
          </span>{" "}
          that transform complex concepts into intuitive, seamless digital
          interactions. My focus is on{" "}
          <span className="font-semibold gradient retro-2">
            delivering innovative, cutting-edge solutions
          </span>{" "}
          that not only function flawlessly but also inspire users. With
          expertise in modern frameworks and a passion for pushing the
          boundaries of{" "}
          <span className="font-semibold gradient retro-1">
            frontend development
          </span>
          , I aim to bridge the gap between aesthetics and functionality,
          crafting products that are both beautiful and highly efficient.&quot;
        </p>

        <h4 className="my-10 text-2xl font-medium text-center sm:text-3xl gradient sky-2">
          Building what I love.
        </h4>
      </div>
    </div>
  );
};
export default LandingPage;
