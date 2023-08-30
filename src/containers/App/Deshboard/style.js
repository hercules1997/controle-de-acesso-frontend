import styled, { keyframes } from "styled-components";


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
  background: #262624;
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
export const List = styled.div`
  width: 100%;
  display: flex;
  transition: 2s;
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
      background: #333;
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