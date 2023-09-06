import PropTypes from "prop-types";
import React from "react";
import { Route, Navigate } from "react-router-dom";

// import { Header } from '../components'
import paths from "../constants";

export function PrivateRoute({ element, isAdmin, ...rest }) {
  const user = localStorage.getItem("acesso4bime:users");

  if (!user) {
    return <Navigate to={paths.Login} />;
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to={paths.Home} />;
  }

  return (
    <>
      {/* {!isAdmin && <Header />} */}
      <Route {...rest} element={element} />
    </>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool,
};
