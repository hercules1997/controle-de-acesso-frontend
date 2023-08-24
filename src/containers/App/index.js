import PropTypes from "prop-types";
import React from "react";

import paths from "../../constants";
import { SideMenu } from "../../components";
import { NewRegister, Status, ListPeopleRegister } from "../../containers";
import { Container, ContainerItems } from "./style";


function App(props) {
  const { path } = props; // Acesso direto à propriedade path
console.log(path)
  return (
    <Container>
      <SideMenu  path={path} />

      <ContainerItems>
        {path === paths.Cadastro && <NewRegister />}
        {path === paths.ListRegisters && <ListPeopleRegister />}
        {path === paths.Status && <Status />}
      </ContainerItems>
    </Container>
  );
}

App.propTypes = {
  props: PropTypes.string, // Certifique-se de que a prop path seja do tipo string
};

export default App