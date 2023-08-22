import React, { useState, useEffect } from "react";
import * as Chart from "react-chartjs-2";


//* CÓDIGO APENAS DE MODELO, PRECISA ADAPTAR PARA O PROJETO
const ObserverPage = () => {
  const [chartData, setChartData] = useState({
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets: [
      {
        label: "Vendas",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  // Simulação de dados atualizados para o gráfico (aqui, atualizamos a cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [...chartData.datasets[0].data];
      newData[4] = Math.floor(Math.random() * 10) + 1; // Gerar número aleatório para maio
      setChartData({
        ...chartData,
        datasets: [{ ...chartData.datasets[0], data: newData }],
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [chartData]);

  return (
    <div>
      <h2>Observação de Gráficos</h2>
      <Chart
        type="bar"
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ObserverPage;
