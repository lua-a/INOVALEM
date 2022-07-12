import React, { useState } from "react";
import * as C from "./styles";

const FormH = ({ handleAdd, transactionsList, setTransactionsList, item }) => {
  const [ingrediente, setIngrediente] = useState("");
  const [valorIngrediente, setValorIngrediente] = useState("");
  const [qtdIngrediente, setQtdIngrediente] = useState("");
  const [qtdUtilizada, setQtdUtilizada] = useState("");
  const [rendimento, setRendimento] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {

    const transaction = {
      id: generateID(),
      ingrediente: ingrediente,
      valorIngrediente: valorIngrediente,
      qtdIngrediente: qtdIngrediente,
      qtdUtilizada: qtdUtilizada,
      rendimento: rendimento,

    };

    handleAdd(transaction);

    setIngrediente("");
    setValorIngrediente("");
    setQtdIngrediente("");
    setQtdUtilizada("");

    document.getElementById('el').style.display = 'none';
    document.getElementById('eu').style.display = 'none';

  };

  return (
    <>

      <C.Container>
        <C.InputContent>
          <C.Label id="el">Adicione a sua meta para esse mês (R$)</C.Label>
          <C.Input
            value={qtdUtilizada}
            type="number"
            id="eu"
            onChange={(g) => setQtdUtilizada(g.target.value)}
            placeholder="Exemplo: 10.00"
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Adicione seus ganhos de hoje (R$)</C.Label>
          <C.Input
            value={qtdIngrediente}
            type="number"
            onChange={(e) => setQtdIngrediente(e.target.value)}
            placeholder="Exemplo: 10.00"
          />
        </C.InputContent>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
    </>
  );
};

export default FormH;
