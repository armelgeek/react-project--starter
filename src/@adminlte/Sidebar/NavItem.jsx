import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import NavTree from "./NavTree";

const NavItem = memo(({ children, title }) => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <li
      as={NavLink}
      className={`nav-item ${isActive ? "menu-is-opening" : null} menu-open`}
    >
      <a href="#" className="nav-link">
        <p className="pl-2">
          {title}
          <i className={`right fas fa-angle-left`}></i>
        </p>
      </a>
      <ul className="nav nav-treeview" style={{ display: `block` }}>
        {children}
      </ul>
    </li>
  );
});

export default NavItem;
