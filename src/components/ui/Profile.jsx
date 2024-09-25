import arrowUp from "/arrow-up.svg";
import praveenraj from "/praveen.png";
function Profile() {
  return (
    <section className="relative px-4 pt-4">
      <div className="flex">
        <div className="size-[90px] relative mb-3">
          <img className="rounded-[50%]" src={praveenraj} alt="" />
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
        <p className="text-xl leading-[140%] font-normal my-4 mx-0">
          A wizard who loves design and code. I tell stories through my designs
          and illustrations. I spend most of my time designing for brands and
          creating design resources and tools. And now, making my own game.
        </p>
        <h4>Building what I love.</h4>
      </div>
      <div></div>
    </section>
  );
}

export default Profile;
