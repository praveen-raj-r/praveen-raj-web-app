import { Link } from "react-router-dom";
import logo from "/realPraveen-logo-white.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="" />
    </Link>
  );
};

export default Logo;
