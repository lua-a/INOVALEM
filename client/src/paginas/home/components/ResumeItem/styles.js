import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  width: 30%;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;

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
    font-weight: bold;
  }
`;

export const HeaderTitle = styled.p`
font-size: 20px;
color: var(--laranja);
font-weight: bold;

`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: var(--azul);
  border-bottom: 1px solid var(--preto);
  border-top: 1px solid var(--preto);
`;
