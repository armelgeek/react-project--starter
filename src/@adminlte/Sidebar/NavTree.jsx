import React, { useState,memo } from "react";
import PropTypes from "prop-types";
import { Link, NavLink,useLocation } from "react-router-dom";

const NavTree= memo(({ title,logout=false, dash=false, route }) => {

  const location = useLocation();
  const isActive = location.pathname == route;

  return (
    <li className="nav-item">
    <Link as={NavLink} to={route} className={`text-white nav-link ${isActive ? 'active':''}`}>
      <i className={!logout ? dash ? `fa fa-tachometer nav-icon` : `far fa-circle nav-icon` : `fa fa-sign-out nav-icon`} style={{
        fontSize:11
      }}></i>
      <p>{title}</p>
    </Link>
  </li>
  );
},
  (prevProps, nextProps) => {
    return !!(
      prevProps.title === nextProps.title 
      && prevProps.logout === nextProps.logout 
      && prevProps.route === nextProps.route
    );
  },
);

export default NavTree;
