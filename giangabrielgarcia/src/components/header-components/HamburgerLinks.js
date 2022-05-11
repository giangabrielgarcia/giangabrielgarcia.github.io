import { NavLink } from "react-router-dom";
import { React } from 'react';

const HamburgerLinks = ({handlePageChange}) => {
  return (
    <div>
      <ul className="hamburger-container mt-4">
        <li>
          <NavLink className="link-styles" to="/" onClick={() => handlePageChange('hide-hamlinks')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link-styles" to="/research" onClick={() => handlePageChange('hide-hamlinks')}>
            Research
          </NavLink>
        </li>
        <li>
          <NavLink className="link-styles" to="/research-group" onClick={() => handlePageChange('hide-hamlinks')}>
            Research Group
          </NavLink>
        </li>
        <li>
          <NavLink className="link-styles" to="/honors-awards" onClick={() => handlePageChange('hide-hamlinks')}>
            Honors/Awards
          </NavLink>
        </li>
        <li>
          <NavLink className="link-styles" to="/diversity" onClick={() => handlePageChange('hide-hamlinks')}>
            Diversity
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerLinks;
