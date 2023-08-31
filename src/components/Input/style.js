import styled from "styled-components";

export const ComponentInput = styled.input`
  width: 100%;
  margin: 15px;
  border: solid 0.5px #505050;
  color: #ffff;
  padding: 10px;
  background-color: #555555;
  box-shadow: 0 0 5px #202020;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: #a9a9a9;
    font-style: italic;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    border: 1px solid #f0ae10;
    background: #a8a8a8;
    color: #202020;
  }
`;
