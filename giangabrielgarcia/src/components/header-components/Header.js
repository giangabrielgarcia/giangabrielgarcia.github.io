import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import HamburgerLinks from "./HamburgerLinks";

const Header = () => {
  const largeScreen = useMediaQuery({ query: "(min-width: 800px)" });
  const [toggle, setToggle] = useState(false);
  const handleButtonClick = () => setToggle(toggle => !toggle);

  useEffect(() => {
    setToggle(false);
   }, []);

  const hideBody = document.getElementsByClassName('hide-body')[0];
  const footer = document.querySelector('footer');
  const hamlinks = document.getElementsByClassName('hamburger-container')[0];

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

  const [page, setPage] = useState(false);
  const handlePageChange = () => setPage(page => !page);

  useEffect(() => {
    setPage(false);
   }, []);

   if(page) {
     hamlinks.style.display = 'none';
     window.location.reload();
   }
  
  return (
    <div className='header-container mx-auto'>
      <nav className='navbar-container'>
        <h1 className='title-container'>
          <Link className="name-title" to="/">
            Gian-Gabriel Garcia, PhD
          </Link>
        </h1>
        {largeScreen ? <Navbar /> : 
            <Link to="#" className={`hamburger ${toggle ? 'active' : ''}`} onClick={handleButtonClick}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </Link>
        }
      </nav>

      { toggle && <HamburgerLinks handlePageChange={handlePageChange}/>}
    </div>
  );
};

export default Header;
