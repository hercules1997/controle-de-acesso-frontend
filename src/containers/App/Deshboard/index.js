/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Container, ContainerList, ChartStyle } from "./style";

export function Deshboard() {
  const data1 = [
    ["Horas totais de visitas", "Horas de visitação"],
    ["Secretaria", 11],
    ["Rancho", 2],
    ["Pavilhão de Comando", 2],
    ["PMT", 2],
    ["Com Soc", 7],
  ];
  const data2 = [
    ["Locais", "Locais mais visitados"],
    ["Secretaria", 56],
    ["Rancho", 12],
    ["Com Soc", 2],
    ["PMT", 15],
    ["PC Cmt", 7],
  ];
  const data3 = [
    ["Visitas", "Total de Visitas"],
    ["Seg", 11],
    ["Ter", 9],
    ["Quarta", 2],
    ["Quinta", 5],
    ["Sexta", 18],
    ["Sabado", 4],
    ["Domingo", 12],
  ];
  const options = {
    title: "% de visitação na OM",
    is3D: true,
    backgroundColor: "#606060",
    colors: ["orange", "#66A3FF", "red", "blue", "green"],
    titleTextStyle: {
      color: "#fff", // Cor do título
      fontSize: 18,
      bold: true,
    },
    legend: {
      textStyle: {
        color: "#fff", // Cor do texto da legenda
      },
    },
    hAxis: {
      textStyle: {
        color: "#fff", // Cor do texto do eixo X
      },
    },
    vAxis: {
      textStyle: {
        color: "#fff", // Cor do texto do eixo Y
      },
    },
  };

  return (
    <Container>
      <ContainerList>
        <div className="grafico_Container">
          <div className="grafico1">
            <ChartStyle
              chartType="PieChart"
              data={data1}
              legendToggle="#fff"
              width="100%"
              options={options}
            />
          </div>
          <div className="grafico2">
            <ChartStyle
              chartType="BarChart"
              data={data2}
              width="100%"
              options={options}
            />
            <ChartStyle
              chartType="LineChart"
              data={data3}
              width="100%"
              options={options}
            />
          </div>
        </div>
          <div className="grafico3">
            <span>
              <p>Total de visitas</p>
              <p>11</p>
            </span>
          </div>
      </ContainerList>
    </Container>
  );
}
