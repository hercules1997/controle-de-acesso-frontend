import styled from "styled-components";
import { Background } from "../../../components/Background";
import { Button, Input } from "../../../components";
import { colors } from "../../../styles/globalStyles";

export const All = styled.div`
  display: flex;
  padding: 10px 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000;

  span {
    color: #ffff;
    padding-top: 20px;
  }
`;
export const ContainerMaster = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 0 58px #606060; */
  border-radius: 18px;
  @media (max-width: 1030px) {
    display: flex;
    flex-direction: column;
    height: 100vh;

    background-color: gray;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const ButtonStyle = styled(Button)`
  background: green;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 20px;
  max-width: min-content;
`;

export const BackgroundStyle = styled(Background)``;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;

  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 22px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 20px;

    h2 {
      color: ${colors.light};
      margin-bottom: 25px;
    }
    @media (max-width: 1030px) {
      margin-top: 80px;
      padding: 20px;
    }
  }
`;
export const Label = styled.label`
  text-align: start;
  width: 10%;
  font-weight: 700;
`;
export const InputStyle = styled(Input)`
  width: 90%;
  border: ${(props) => (props.error ? "2px solid red" : "none")};
`;
