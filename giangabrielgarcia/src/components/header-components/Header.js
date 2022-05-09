import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Navbar from "./Navbar";
import HamburgerLinks from "./HamburgerLinks";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleButtonClick = () => setToggle((toggle) => !toggle);

  const largeScreen = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <div>
      <nav>
        {largeScreen ? (
          <Navbar />
        ) : (
          <div className="hamburgerlink-container">
            <h1>
              <Link className="name-title" to="/">
                Gian-Gabriel Garcia
              </Link>
            </h1>
            <Link to="#" className="hamburger" onClick={handleButtonClick}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </Link>
          </div>
        )}
      </nav>

      {toggle && <HamburgerLinks />}
    </div>
  );
};

export default Header;
