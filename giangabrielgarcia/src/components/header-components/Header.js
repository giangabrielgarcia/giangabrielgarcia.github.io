import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Navbar from "./Navbar";
import HamburgerLinks from "./HamburgerLinks";

const Header = () => {
  const largeScreen = useMediaQuery({ query: "(min-width: 800px)" });
  const [toggle, setToggle] = useState(false);
  const handleButtonClick = () => setToggle((toggle) => !toggle);

  const hideBody = document.getElementsByClassName('hide-body')[0];
  const footer = document.querySelector('footer');

  if(toggle) {
    if(hideBody) {
      hideBody.style.display = 'none';
    } 
    if(footer) {
      footer.style.display = 'none';
    }
  } else {
      if(hideBody) {
        hideBody.style.display = 'block';
      }
      if(footer) {
        footer.style.display = 'block';
      }
  }
  

  return (
    <div className='header-container mx-auto'>
      <nav>
        {largeScreen ? <Navbar /> : 
          <div>
            <h1>
              <Link className="name-title" to="/">
                Gian-Gabriel Garcia, PhD
              </Link>
            </h1>
            <Link to="#" className="hamburger" onClick={handleButtonClick}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </Link>
          </div>
        }
      </nav>

      {toggle && <HamburgerLinks />}
    </div>
  );
};

export default Header;
