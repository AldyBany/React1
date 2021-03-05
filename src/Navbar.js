import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between  pt-5 pb-1 Navbar">
      <div className="logo" className="text-danger h2">
        Logo
      </div>
      <div className="links">
        <ul className="d-flex">
          <li>
            <Link to="/" className="m-4 text-dark">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="text-dark">
              New Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
