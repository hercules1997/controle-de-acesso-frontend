import PropTypes from "prop-types";
import React from "react";

import paths from "../../constants";
import { SideMenu } from "../../components";
import { NewRegister, Status, ListPeopleRegister } from "../../containers";
import { Container, ContainerItems } from "./style";

function App({path}) {

  return (
    <Container>
      <SideMenu path={path} />

      <ContainerItems>
        {path === paths.Cadastro && <NewRegister path={paths.Cadastro} />}
        {path === paths.ListRegisters && (
          <ListPeopleRegister path={paths.ListRegisters} />
        )}
        {path === paths.Status && <Status path={paths.Status} />}
      </ContainerItems>
    </Container>
  );
}

App.propTypes = {
  path: PropTypes.string, // Certifique-se de que a prop path seja do tipo string
};

export default App;
