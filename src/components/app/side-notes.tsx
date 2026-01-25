const SideNotes = () => {
  return (
    <div className="my-5 mx-1 md:my-0 md:mx-0">
      <div className="max-w-[708px] mx-auto relative items-center py-0 px-2 md:py-0 md:px-0 w-full">
        <a>
          {/* <a href="https://realvjy.substack.com/" target="_blank"> */}
          <div className="p-5 md:p-8 bg-[linear-gradient(90deg,rgba(71,111,255,0.125)_0%,rgba(71,37,2,0.151)_100%)] flex rounded-2xl overflow-hidden md:overflow-auto md:rounded-[20px] flex-col md:flex-row m-1 mt-10 gap-3 items-center justify-between">
            <div className="flex items-center md:flex-row flex-col gap-3 md:gap-5">
              <div className="flex items-center justify-center gap-2">
                <img
                  className="w-10"
                  src="https://vjy.me/sidenotes-mark.png"
                  alt="Sidenotes"
                />
                <img
                  className="mt-1 w-30 filter-[invert(1)]"
                  src="https://vjy.me/sidenotes-text.png"
                  alt="Sidenotes"
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium tracking-[-0.28px] text-center md:text-left opacity-70 max-w-[300px]">
                  New here? You can also subscribe to my newsletter on
                  Substack{" "}
                </h3>
              </div>
            </div>
            <div className="md:block hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lfgicon-chevron-right"
              >
                <path d="M7 7L7.35355 6.64645L7.70711 7L7.35355 7.35355L7 7ZM1.35355 0.646447L7.35355 6.64645L6.64645 7.35355L0.646447 1.35355L1.35355 0.646447ZM7.35355 7.35355L1.35355 13.3536L0.646448 12.6464L6.64645 6.64645L7.35355 7.35355Z"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SideNotes;
