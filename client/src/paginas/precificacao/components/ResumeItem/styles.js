import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  width: 30%;
  border: 1px solid var(--azul);

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }
    
    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
    color: var(--laranja);
  }
`;

export const HeaderTitle = styled.p`
font-size: 20px;
color: var(--laranja);

`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: var(--azul);
  border-bottom: 1px solid var(--preto);
  border-top: 1px solid var(--preto);
`;
