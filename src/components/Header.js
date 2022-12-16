import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useGetter } from "../store";

const Header = memo(() => {
  const { username, authenticated } = useGetter("users", "users");
  const signOut = useDispatch("users", "signoutUser");
  const renderLinks = () => {
    if (authenticated) {
      return [
        <li className="nav-item welcome-user" key={1}>
          <Link className="subheading" to="/dashboard">
            Welcome,
            <span className="subheading">{username}</span>
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <button className="nav-link" onClick={signOut}>
            Sign Out
          </button>
        </li>,
      ];
    } else {
      // show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>,
      ];
    }
  };
  return (
    <section>
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="d-flex">
          <ul>{renderLinks()}</ul>
        </div>
      </nav>
    </section>
  );
});

export default Header;
