import PropTypes from "prop-types";
import React from "react";

import paths from "../../constants";

import { NewRegister, Status, ListPeopleRegister } from "../../containers";
import { Container, ContainerItems, SideMenuStyle } from "./style";

function App({ path }) {
  return (
    <Container>
    
      <SideMenuStyle path={path} />

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
