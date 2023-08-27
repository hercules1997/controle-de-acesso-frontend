import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerMenu = styled.div`
  flex-direction: column;
  position: fixed;
  width: 280px;
  color: white;
  z-index: 100;
  border-right: 0.2px solid #4a4646;
  min-height: 100vh;
  padding: 70px 45px 70px 15px;
  background-color: #262624;
  box-shadow: 0px 0px 10px #000;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    img {
      width: 70px;
    }
  }
`;
export const ContainerItems = styled.div`
  margin-top: 15px;
  height: 40px;
  margin-bottom: 20px;
`;
export const ContainerLogout = styled.button`
  position: fixed;
  bottom: 20px;
  background: transparent;
  border: none;
  font-size: 17px;
  .iconLogout {
    color: red;
    margin-right: 15px;
  }
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  padding: 10px;

  border-radius: 6px;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "green" : "none")};
  transition: 0ms.5;
  .icon {
    margin-right: 15px;
  }

  &:hover {
    /* font-weight: bold; */
    transition: 0.5s;
    color: #999;
    border: 0.3px solid #555;
  }
`;
