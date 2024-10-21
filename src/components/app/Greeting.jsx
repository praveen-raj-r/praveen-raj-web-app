import chat from "/chat.png";

function Greeting() {
  return (
    <section className="flex flex-col-reverse items-center gap-10 p-4 mx-5 md:gap-0 md:flex-row greetings-card">
      <div className="p-2 md:p-8">
        <h1 className="gradient retro-2 text-4xl md:text-5xl leading-[-1px] font-bold text-center md:text-left">
          Say hi!
        </h1>

        <div className="flex flex-col mt-3 space-x-0 text-lg font-thin tracking-wider text-center sm:text-left md:space-x-6 md:flex-row">
          <a
            className="text-white gradient retro-2"
            href="mailto:praveen1220raj@gmail.com"
          >
            praveen1220raj@gmail.com
          </a>
          <a
            href="https://www.instagram.com/real_praveenraj/"
            target="_blank"
            className="gradient retro-2"
          >
            @real_praveenraj
          </a>
        </div>

        <p className="sm:text-lg font-normal sm:leading-[120%] my-5 mx-0 tracking-wide opacity-80 max-w-[340px]">
          Want to create something awesome? Or, you have any query? Drop an
          email.
        </p>

        <div className="flex justify-start m-0 text-left">
          <ul className="flex ">
            <li className="m-0">
              <a
                href="mailto:praveen1220raj@gmail.com"
                className="rounded-[18px] flex items-center font-medium text-base leading-5 relative text-white py-2 px-5 design-pur"
              >
                Send Work Proposal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-right">
        <img className="chatImg h-[220px] md:h-auto" src={chat} />
      </div>
    </section>
  );
}

export default Greeting;
