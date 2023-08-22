import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Importe seus estilos
//* CÓDIGO APENAS DE MODELO, PRECISA ADAPTAR PARA O PROJETO
function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Bem-vindo ao Meu Aplicativo</h1>
    </div>
  );
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/security">Security</Link>
        </li>
        <li>
          <Link to="/observer">Observer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;
