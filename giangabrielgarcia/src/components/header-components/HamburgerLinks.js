import { NavLink, Link } from "react-router-dom";

const HamburgerLinks = () => {
  return (
    <div>
      <ul className="hamburger-container">
        <li>
          <NavLink className="link-styles" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link-styles" to="/research">
            Research
          </NavLink>
        </li>
        <li>
          <NavLink className="link-styles" to="/research-group">
            Research Group
          </NavLink>
        </li>
        <li>
          <NavLink className="link-styles" to="/honors-awards">
            Honors/Awards
          </NavLink>
        </li>
        <li>
          <NavLink className="link-styles" to="/diversity">
            Diversity
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerLinks;
