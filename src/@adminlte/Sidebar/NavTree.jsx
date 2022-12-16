import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink,useLocation } from "react-router-dom";

const NavTree= ({ title,logout=false, dash=false, route }) => {

  const location = useLocation();
  const isActive = location.pathname == route;

  return (
    <li class="nav-item">
    <Link as={NavLink} to={route} class={`text-white nav-link ${isActive ? 'active':''}`}>
      <i class={!logout ? dash ? `fa fa-tachometer nav-icon` : `far fa-circle nav-icon` : `fa fa-sign-out nav-icon`} style={{
        fontSize:11
      }}></i>
      <p>{title}</p>
    </Link>
  </li>
  );
};

NavTree.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavTree;
