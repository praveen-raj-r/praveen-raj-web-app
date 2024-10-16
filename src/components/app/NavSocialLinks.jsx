import linkedIn from "/linkedin.svg";
import github from "/github.svg";
import darkMoon from "/moon-dark-mode.svg";

function NavSocialLinks() {
  return (
    <div className="flex items-center mr-4 max-h-10">
      <div className="flex items-center max-h-10 border-r border-[#ffffff1a] mr-3">
        <a
          target="_blank"
          className="leading-[0px] py-[2px] px-3"
          href="https://www.linkedin.com/in/developer-praveen-raj/"
        >
          <img src={linkedIn} />
        </a>
        <a
          target="_blank"
          className="leading-[0px] py-[2px] px-3"
          href="https://github.com/praveen-raj-r"
        >
          <img src={github} />
        </a>
      </div>
      <div className="flex items-center max-h-10">
        <img src={darkMoon} />
      </div>
    </div>
  );
}

export default NavSocialLinks;
