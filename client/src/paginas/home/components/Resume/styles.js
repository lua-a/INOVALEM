import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -30px;
  justify-content: space-around;
`;

export const titulo = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 40px;
  text-align: center;
`;

export const titulo2 = styled.h1`
  text-align: center;
  margin-top: -5px;
  font-size: 40px;
  text-align: center;
`;

export const laranja = styled.span`
  color: var(--laranja);
`;

export const azul = styled.span`
  color: var(--azul);
`;

export const imgCentro = styled.img`
display: flex;
margin: auto;
padding: 10px;
width: 280px;
`;

export const telaInicial = styled.div`
  height: 30vh;
  `;

export const Button1 = styled.button`
width: 200px;
font-size: 16px;
font-weight: 600;
  padding: 5px;
  border: 1px solid var(--laranja);
  border-radius: 20px;
  cursor: pointer;
  background: none;
  color: var(--laranja);
  
  :hover{
    background-color:var(--laranja);
    color: #fff;
  }
  `;

export const Button2 = styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  border: 1px solid var(--laranja);
  background-color: var(--laranja);
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
  `;

export const Button3 = styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  border: 1px solid var(--laranja);
  border-radius: 20px;
  cursor: pointer;
  background: none;
  color: var(--laranja);

  :hover{
    background-color:var(--laranja);
    color: #fff;
  }
  `;

export const Buttons = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 20px auto;
  background: none;
`;





