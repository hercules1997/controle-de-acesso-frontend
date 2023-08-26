import styled from "styled-components";

export const ComponentInput = styled.input`
  width: 650px;
  margin: 15px;
  border: solid 0.5px #444;
  color: #ffff;
  padding: 10px;
  background-color: #292929;
  box-shadow: 0 0 7px #000;
  border-radius: 8px;
  outline: none;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    border: 1px solid #f5ae33;
  }
`;
