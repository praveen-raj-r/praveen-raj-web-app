import chat from "/chat.png";

function Greeting() {
  return (
    <section className="flex flex-col-reverse items-center gap-10 p-4 mx-5 md:gap-0 md:flex-row greetings-card">
      <div className="z-10 p-2 md:p-8">
        <h1 className="gradient retro-2 text-4xl md:text-5xl leading-[-1px] font-bold text-center md:text-left">
          Say hi!
        </h1>

        <div className="flex flex-col mt-3 space-x-0 text-center md:space-x-6 md:flex-row">
          <a className="gradient retro-2" href="">
            praveen1220raj@gmail.com
          </a>
          <a className="gradient retro-2" href="">
            @realPraveen
          </a>
        </div>

        <p className="sm:text-lg font-normal sm:leading-[120%] my-5 mx-0 tracking-wide opacity-80 max-w-[340px]">
          Want to create something awesome? Or, you have any query? Drop an
          email or tweet.
        </p>

        <div className="flex justify-start m-0 text-left">
          <ul className="flex ">
            <li className="m-0">
              <a
                href=""
                className="rounded-[18px] flex items-center font-medium text-base leading-5 relative text-white py-2 px-5 design-pur"
              >
                Send Work Proposal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="z-10 text-right">
        <img className="chatImg h-[220px] md:h-[320px]" src={chat} />
      </div>
    </section>
  );
}

export default Greeting;
