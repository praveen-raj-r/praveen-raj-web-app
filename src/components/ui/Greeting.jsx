import chat from "/chat.png";
function Greeting() {
  return (
    <section className="greetings-card">
      <div className="z-10 p-8">
        <h2 className="gradient retro-2 inline-block text-5xl leading-[-1px] ">
          Say hi!
        </h2>
        <div className="flex mt-3 space-x-6">
          <a className="gradient retro-2" href="">
            praveen@gmail.com
          </a>
          <a className="gradient retro-2" href="">
            @realPraveen
          </a>
        </div>
        <p className="text-xl font-normal leading-[140%] my-5 mx-0 tracking-[-0.3px] opacity-80 max-w-[340px]">
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
        <img className="chatImg" src={chat} />
      </div>
    </section>
  );
}

export default Greeting;
