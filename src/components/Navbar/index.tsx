import "./style.scss";
import NavbarLogo from "../../assets/svgs/NavbarLogo";
import GlassIcon from "../../assets/svgs/GlassIcon";
import Avatar from "../../assets/img/Avatar.jpg";
import NameArrow from "../../assets/svgs/NameArrow";
import NavbarBell from "../../assets/svgs/NavbarBell";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo-box">
        <Link to="/">
          <NavbarLogo />
        </Link>
      </div>
      <div className="navbar__input">
        <input
          className="navbar__search-input"
          placeholder="Search for anything"
        />
        <button type="submit" className="navbar__button">
          <GlassIcon />
        </button>
      </div>
      <div className="navbar__docs">
        <Link to="#" className="navbar__link">
          Docs
        </Link>
        <NavbarBell />
        <img src={Avatar} alt="user" className="navbar__user" />
        <div className="navbar__avatar">
          <p className="navbar__username">Adedeji</p>
          <span>
            <NameArrow />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
