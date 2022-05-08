import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-text">
        <div className='name-box'>
        <h1>
        <Link id="name-title" to="/">
          Gian-Gabriel Garcia
        </Link>
      </h1>
        </div>

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
        <li>
          <NavLink className="navlink-styles" to="/cv">
            CV
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
