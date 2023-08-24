/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, ContainerMaster, Items } from "./style";
import { Button, WebCam } from "../../../components";
export function ListPeopleRegister() {
  return (
    <Container>
      <ContainerMaster>
        <Items>
          <fieldset>
            <h2>Novo Cadastro</h2>

            <label>
              Nome
              <input type="text"></input>
            </label>
            <label>
              RG<input type="number"></input>
            </label>
            <label>
              CPF<input type="number"></input>
            </label>
            <label>
              Tel<input type="number"></input>
            </label>
            <label>
              Foto
              <WebCam />
            </label>
            <Button type="submit">Enviar</Button>
          </fieldset>
        </Items>
      </ContainerMaster>
    </Container>
  );
}
