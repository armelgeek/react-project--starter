import React, { memo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import SigninPage from "../components/user/SigninPage";
import SignupPage from "../components/user/SignupPage";
import AddRole from "../pages/roles/add";
import EditRole from "../pages/roles/edit";
import RoleList from "../pages/roles/list";
import RequireAuth from "../utils/require-auth";
import { ADD_ROLE, EDIT_ROLE, ROLES } from "./links";

const routes = memo(() => {
  return (
    <BrowserRouter>
      {/**<Header />**/}
      <Switch>
        <RequireAuth path="/" exact component={App} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <RequireAuth path={ADD_ROLE} exact component={AddRole} />
        <RequireAuth path={EDIT_ROLE} exact component={EditRole} />
        <RequireAuth path={ROLES} exact component={RoleList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
});

export default routes;
