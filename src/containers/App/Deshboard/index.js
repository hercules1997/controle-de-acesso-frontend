/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Chart } from "react-google-charts";
import { Container, ContainerList } from "./style";

export function Deshboard() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const options = {
    title: "My Daily Activities",
    is3D: true,
  };

  return (
    <Container>
      <ContainerList>
        <Chart
          chartType="PieChart"
          data={data}
          width="100%"
          height="400px"
          options={options}
        />
      </ContainerList>
    </Container>
  );
}
