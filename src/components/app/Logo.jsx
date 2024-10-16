import { Link } from "react-router-dom";
// import logo from "/realPraveen-logo.svg";
import whitelogo from "/realPraveen-logo-white.svg";

function Logo() {
  return (
    <div className="flex items-center max-h-10 p-0 scale-[0.92] ml-[-30px]">
      <Link to="/">
        <img className="" src={whitelogo} />
      </Link>
    </div>
  );
}

export default Logo;
