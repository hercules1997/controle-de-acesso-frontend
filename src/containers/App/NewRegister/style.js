import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "../../../components";
import { Input } from "../../../components/Input";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerMaster = styled.div`
  margin-left: 20%;
  h2 {
    margin-bottom: 50px;
  }
`;
export const InputStyle = styled(Input)`
  border: ${(props) => (props.error ? "2px solid red" : "none")};
`;
export const LabelTitle = styled.label`
  text-align: start;
  width: 100%;
  padding-left: 25px;
  span {
    color: red;
  }
`;

export const Items = styled.div`
  display: flex;
  padding: 40px;

  form {
    display: flex;
    flex-direction: column;

    background-color: #262624;
    padding: 50px;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    color: #ffff;
    border: 0.2px solid #4a4646;
    box-shadow: 0 1px 8px #000;
    border-radius: 15px;
  }

  input {
  }

  button {
    width: 650px;
    border: none;

    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export const PersonIconStyle = styled(PersonIcon)``;
export const ButtonSubmit = styled(Button)`
  width: 650px;
  border: none;
  background: #404040;
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    background: #505050;
  }
  &:active {
    opacity: 0.4 !important;
  }
`;
