import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 0px auto;
  justify-content: space-between;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  padding: 15px 10px;
  align-items: center;
  margin-top: 60px;
 
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

`;

export const Label = styled.label`
  
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-top: 10px;
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

export const laranja = styled.span`
  color: var(--azul);
  font-weight: 600;
`;

export const azul = styled.span`
  color: var(--azul);
`;