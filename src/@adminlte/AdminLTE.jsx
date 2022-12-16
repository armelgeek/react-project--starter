import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import NavItem from "./Sidebar/NavItem";
import NavTree from "./Sidebar/NavTree";
import Footer from "./adminlte/Content/Footer";
import { ROLES } from "../config/links";
const Shop = memo(({ children }) => {
  const location = useLocation();
  return (
    <>
      <div className="bg-dark text-white py-3 d-flex justify-content-center align-items-center">
        <h1 className="">TITLE</h1>
      </div>
      <div className="py-2">
        <div class="d-flex justify-content-between align-items-center">
          <div></div>
          <div></div>

          <div className="bg-thead"></div>
        </div>
        <div class="d-flex justify-content-center mt-2 align-items-center">
          
        </div>
      </div>
      {children}
    </>
  );
});
const Admin = memo(({ children }) => {
  return (
    <div className="wrapper-content">
      <div className="bg-dark m-0  p-2  text-center">
        <h4 className="m-0 p-2 text-white">TITLE</h4>
      </div>
      <aside
        className="main-sidebar sidebar-dark-primary"
        style={{
          maxHeight: "100%",
          overflow: "auto",
        }}
      >
        <Link to={"/"} className="brand-link border-0">
          <span className="ml-4 brand-text font-weight-light text-center text-uppercase">
            BRAND
          </span>
        </Link>
        <div class="sidebar">
          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <NavTree title={"Tableau de bord"} dash={true} route={"/"} />
              <NavItem title="Parametres">
                <NavTree title={"Roles"} route={ROLES} />
              </NavItem>
              <NavTree title={"Déconnexion"} logout={true} route={'/signout'}/>
            </ul>
          </nav>
        </div>
      </aside>
      <div>{children}</div>
    </div>
  );
});
const AdminLTE = memo(({ children, title, isShop = false }) => {
  return (
    <>{isShop ? <Shop children={children} /> : <Admin children={children} />}</>
  );
});
export default AdminLTE;
