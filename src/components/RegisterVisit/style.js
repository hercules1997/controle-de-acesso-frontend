import styled from "styled-components";
import { Input } from "../Input";

const ContainerPopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.651);
  /* Fundo escurecido */
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const InputStyle = styled(Input)`

width: 100%;
`;
const CardPopUp = styled.div`
  background-color: #262626;
  color: #9a9a9a;

  width: 980px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.541);
  align-items: center;
  h3 {
    color: red;
  }
  p {
    margin-bottom: 15px;
    font-size: 1.3rem;

    span {
      color: yellow;
    }
  }

  form {
    width: 100%;
  }

  span {
    display: flex;
    width: 100%;
    gap: 5px;
  }

  .visit {
    display: flex;
    width: 100%;

    span {
      width: 50%;
      justify-content: center;
      align-items: center;
    }
  }

  .label_Input {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 50%;
    border: none;
    color: #000;
    padding: 10px;
    cursor: pointer;
    font-weight: 700;

    border-radius: 8px;
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: green;
      color: #000;
    }

    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.4;
    }
  }
`;

export { CardPopUp, ContainerPopUp, InputStyle };
