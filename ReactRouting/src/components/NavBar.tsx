import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <a href="#">My app</a>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
