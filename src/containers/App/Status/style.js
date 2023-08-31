import styled from "styled-components";
import { PopUp } from "../../../components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
`;
export const ContainerList = styled.div`
  border: 1px solid #404040;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 15px;
  background: #404040;
  box-shadow: 0px 0px 15px #5eb439;
  /* background-color: ${(props) => (props.status ? "green" : "#262626")}; */
`;
export const List = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Image = styled.div`
  display: flex;
  width: 7%;
  img {
    width: 60px;
    border-radius: 50%;
  }
`;
export const Description = styled.div`
  width: 53%;
  color: #ffff;
  display: flexbox;
  justify-content: center;
`;
export const PopUpStyle = styled(PopUp)`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  justify-content: center;
`;
export const Date = styled.div`
  width: 30%;
  color: #ffff;
  display: flexbox;
  justify-content: center;
  align-items: center;
`;
export const ButtonFinaly = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    color: #ffff;
    background: red;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: #ef3030;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;
