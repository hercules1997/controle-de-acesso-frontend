import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../containers/App";
import paths from "../constants";
import { Login } from "../containers/App/Login";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={paths.Login} element={<Login path={paths.Login} />} />
        <Route path={paths.Status} element={<App path={paths.Status} />} />
        <Route
          path={paths.ListRegisters}
          element={<App path={paths.ListRegisters} />}
        />
        <Route path={paths.Cadastro} element={<App path={paths.Cadastro} />} />
        <Route
          path={paths.Deshboard}
          element={<App path={paths.Deshboard} />}
        />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
