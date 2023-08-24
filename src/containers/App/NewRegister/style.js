import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";

export const Container = styled.div`

`;

export const ContainerMaster = styled.div`

`;
export const Items = styled.div`
  display: flex;
  width: 80%;
  padding: 40px;

  fieldset {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #f0f0f0;
    padding: 50px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: none;
    box-shadow: 0 1px 28px #bcbcbc;
    border-radius: 15px;
  }

  input {
    width: 600px;
    margin: 15px;
    border: none;
    padding: 10px;
    box-shadow: 0 1px 28px #bcbcbc;
    border-radius: 15px;
    outline: none;

    &:focus {
      border: 1px solid #f5ae33;
    }
  }

  button {
    width: 600px;
    border: none;
    color: red;
    font-size: 1.4rem;
    cursor: pointer;
  }
`

export const PersonIconStyle = styled(PersonIcon)``;
