import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 20px auto;
  justify-content: space-between;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  padding: 15px 10px;
  
  `;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  `;

export const Label = styled.label`
  margin-bottom: 10px;
  color: var(--azul);
  font-weight: 600;
  
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: none;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  margin: 7px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: var(--azul);
  font-weight: bold;
  transition: all ease 0.3s;
  
  :hover{
    background-color: var(--laranja);
    box-shadow: 0px 0px 5px #ccc;
  }
`;

export const Invisivel = styled.div`
  visibility: hidden;
`;

export const Produto = styled.h1`
  font-size: 1.5rem;
  outline: none;
  border-radius: 5px;
  margin: 0px 5px;
  padding: 5px 10px;
  border: 1px solid var(--azul);
  color: var(--azul); 
  background-color: var(--branco);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  
  `;

export const P = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold ;
  padding: 5px; 
  margin-top: 30px;
  color: var(--laranja);
`;




