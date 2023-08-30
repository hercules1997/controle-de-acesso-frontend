import React from "react";
import "./App.css";
import "./Dashboard.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function DashboardAdmin() {
  return (
    <div className="App">
      <header className="header">
        <h1>Dashboard de Gráficos</h1>
      </header>
      <div className="container">
        <div className="chart-box">
          <h2 className="chart-title">Gráfico de Barra</h2>
          <div className="chart-content">
            <BarChart />
          </div>
        </div>
        <div className="chart-box">
          <h2 className="chart-title">Gráfico de Pizza</h2>
          <div className="chart-content">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}


export default DashboardAdmin