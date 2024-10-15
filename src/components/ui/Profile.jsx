import arrowUp from "/arrow-up.svg";
// import praveenraj from "/praveen.png";
import empty from "/empty.png";
function Profile() {
  return (
    <section className="relative px-4 pt-4">
      <div className="flex">
        <div className="size-[90px] relative mb-3">
          <img className="rounded-[50%]" src={empty} alt="" />
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="flex text-2xl">praveen raj</h1>
          <a
            className="py-[6px] px-0 font-semibold leading-[-0.25px] flex text-[#72788899]"
            href=""
            target="_blank"
          >
            @realpraveen
            <img src={arrowUp} />
          </a>
        </div>
      </div>
      <div>
        <p className="text-lg leading-[140%] my-4 mx-0 text-justify">
          &quot;As a frontend engineer, I merge design and technology to create
          exceptional user experiences. I specialize in building
          high-performance, visually engaging interfaces that transform complex
          concepts into intuitive, seamless digital interactions. My focus is on
          delivering innovative, cutting-edge solutions that not only function
          flawlessly but also inspire users. With expertise in modern frameworks
          and a passion for pushing the boundaries of frontend development, I
          aim to bridge the gap between aesthetics and functionality, crafting
          products that are both beautiful and highly efficient.&quot;
        </p>
        <h4 className="text-xl font-light text-center">
          Building what I love.
        </h4>
      </div>
      <div></div>
    </section>
  );
}

export default Profile;
