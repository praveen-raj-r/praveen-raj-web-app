// import praveenraj from "/praveen.png";
import empty from "/empty.png";
function Profile() {
  return (
    <section className="relative px-4 pt-4">
      <div className="flex items-center">
        <div className="size-[90px] relative mb-3">
          <img className="rounded-[50%]" src={empty} alt="Praveen Raj" />
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="flex m-0 text-xl font-extrabold capitalize sm:font-thin sm:text-3xl">
            praveen raj
          </h1>
          <a
            className="py-[6px] px-0 font-semibold text-lg gradient retro-2 tracking-widest"
            href="https://www.instagram.com/real_praveenraj/"
            target="_blank"
          >
            @real_praveenraj
          </a>
        </div>
      </div>
      <div>
        <p className="text-lg leading-[140%] my-4 mx-1 sm:mx-auto">
          &quot;As a frontend engineer, I merge design and technology to create
          exceptional user experiences. I specialize in{" "}
          <span className="font-extrabold gradient sky-2">
            building high-performance, visually engaging interfaces
          </span>{" "}
          that transform complex concepts into intuitive, seamless digital
          interactions. My focus is on{" "}
          <span className="font-extrabold gradient retro-2">
            delivering innovative, cutting-edge solutions
          </span>{" "}
          that not only function flawlessly but also inspire users. With
          expertise in modern frameworks and a passion for pushing the
          boundaries of{" "}
          <span className="font-extrabold gradient retro-1">
            frontend development
          </span>
          , I aim to bridge the gap between aesthetics and functionality,
          crafting products that are both beautiful and highly efficient.&quot;
        </p>
        <h4 className="my-10 text-2xl font-medium text-center sm:text-3xl gradient sky-2">
          Building what I love.
        </h4>
      </div>
    </section>
  );
}

export default Profile;