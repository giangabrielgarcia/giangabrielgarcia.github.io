import { NavLink } from "react-router-dom";
import { React } from 'react';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="navlinks">
        <li>
          <NavLink className="navlink-styles" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink-styles" to="/research">
            Research
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink-styles" to="/research-group">
            Research Group
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink-styles" to="/honors-awards">
            Honors/Awards
          </NavLink>
        </li>
      
      </ul>
    </div>
  );
};

export default Navbar;
