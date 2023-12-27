import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login.loginStatus);

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <div>
      <nav className="navbar-nav">
        <ul className="navbar-ul">
          <li>
            <Link to="/"> Home </Link>
          </li>
          {loginStatus ? (
            <li>
              <Link to="/protected"> Protected </Link>
            </li>
          ) : null}

          {loginStatus ? (
            <Link
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Link>
          ) : (
            <>
              <li>
                <Link to="/login"> Login </Link>
              </li>
              <li>
                <Link to="/register"> Register </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
