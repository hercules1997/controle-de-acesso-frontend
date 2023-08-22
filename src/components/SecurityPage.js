import React, { useState } from "react";
import axios from "axios";



//* CÓDIGO APENAS DE MODELO, PRECISA ADAPTAR PARA O PROJETO

const SecurityPage = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();


    
    try {
      const response = await axios.post("http://localhost:5000/api/add-employee", {
        name,
        role,
        company,
      });
      console.log(response.data); 
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Funcionário/Visitante</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Função"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Empresa"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default SecurityPage;
