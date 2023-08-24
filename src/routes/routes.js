import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import  App  from "../containers/App";
import paths from "../constants";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<App />} path={paths.Status} />
        <Route element={<App />} path={paths.ListRegisters} />
        <Route element={<App />} path={paths.Cadastro} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
