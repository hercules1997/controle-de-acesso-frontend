import styled, { keyframes } from "styled-components";
import { Button, Input } from "../../../components";
import { colors } from "../../../styles/globalStyles";
import { RegisterVisit } from "../../../components/RegisterVisit";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
export const InputStyle = styled(Input)`
  width: 100%;
  height: 50px;
`;
export const ButtonStyle = styled(Button)`
  margin: 0;
  position: absolute;
  right: 10px;
  width: 40px;
  height: 50px;
`;
export const ButtonRegisterVisit = styled(Button)`
  background-color: green;
  border: none;
  border-radius: 8px;
  padding: 2px;
  font-size: 12px;
  margin-left: 6px;
  cursor: pointer;
  color: ${colors.light};
`;

export const PopUpStyle = styled(RegisterVisit)`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  justify-content: center;
`;
export const ContainerList = styled.div`
  border: 1px solid #404040;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 15px;
  background: #404040;
  box-shadow: 0px 0px 10px #000;
  transition: top 2s ease;
  animation: ${fadeIn} 1s ease;

  .menu {
    display: none;
    animation: ${fadeIn} 1s ease;
    transition: top 2s ease;
  }
  .menu.open {
    display: flex;
    animation: ${fadeIn} 1s ease;
    transition: top 2s ease;
    top: 0;
  }
`;
export const ContainerSearch = styled.div`
  border: 1px solid #353535;
  padding: 20px;
  border-radius: 8px;
  width: calc(100% - 350px);
  margin-bottom: 15px;
  background: #404040;
  box-shadow: 0px 0px 10px #000;
  transition: top 2s ease;
  position: fixed;
  top: 4px;
  animation: ${fadeIn} 1s ease;
`;
export const List = styled.div`
  width: 100%;
  display: flex;
  transition: 2s;
  align-items: center;
  justify-content: center;
  text-align: center;

  button {
  }
`;

export const FormSearch = styled.form`
  width: 100%;
  display: flex;

  transition: 2s;
  align-items: center;
  justify-content: center;
  text-align: center;

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    justify-self: center;
    width: 100%;
    position: relative;
    height: 50px;
  }
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
  text-align: start;
  padding-left: 20px;
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
    background: transparent;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: 1s;

    &:hover {
      color: ${colors.text};
    }
    &:active {
      opacity: 0.5;
    }
  }
`;

export const CardListPeople = styled.div`
  width: 70%;
  display: flex;
  color: #ffff;
  flex-direction: column;
  transition: 2s;
  div {
    display: flex;
    margin-top: 5px;
  }
`;
export const LabelList = styled.label`
  color: #909090;
  font-weight: bold;
  margin-right: 5px;
`;
export const InforList = styled.p``;
export const CardHistory = styled.div`
  width: 30%;
  border-left: 0.3px solid #555;
  color: #909090;
  padding: 5px;
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  p {
    color: #fff;
    padding-left: 15px;
    margin-top: 5px;
    font-style: italic;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 0.3px solid #555;
  margin-top: 20px;
  transition: 2s ease;
  opacity: ${(prop) => (prop.isVisible ? "1" : "0")};
  animation: ${fadeIn} 1s ease;
`;
