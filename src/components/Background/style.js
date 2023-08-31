import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
`;
export const Logo = styled.img`
  width: 100%;

  @media (max-width: 780px) {
    height: 50%;
  }
`;
