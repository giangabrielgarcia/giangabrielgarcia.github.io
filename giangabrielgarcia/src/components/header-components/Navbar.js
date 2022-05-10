import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar-container">
        <h1>
        <Link className="name-title" id='name-title' to="/">
          Gian-Gabriel Garcia, PhD
        </Link>
        </h1>
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
        <li>
          <NavLink className="navlink-styles" to="/diversity">
            Diversity
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
