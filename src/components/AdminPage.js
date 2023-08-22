import React, { useState, useEffect } from "react";
import axios from "axios";
//* CÓDIGO APENAS DE MODELO, PRECISA ADAPTAR PARA O PROJETO
const AdminPage = () => {
  const [employees, setEmployees] = useState([]);

  console.log(employees)

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get("http://localhost:5000/api/get-employees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Lista de Funcionários</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.role} ({employee.company})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
