import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AdminLTE from '../@adminlte/AdminLTE';
const RequireAuth = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        if (isAuth) {
          return (
            <AdminLTE  title={"CBV AMBALAVAO"}>
              <Component {...props} />
            </AdminLTE>
          );
        }
        return (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = ({ users }) => ({
  isAuth: users.authenticated,
});

RequireAuth.defaultProps = {
  isAuth: false
};

export default connect(mapStateToProps)(RequireAuth);
