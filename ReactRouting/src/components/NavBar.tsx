import {NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <a href="#">My app</a>
        <div>
          <ul>
            <li>
              <NavLink to="/" className={({isActive})=>isActive?'active':''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
