import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "../Grid";
import * as C from "./styles";
import api from "../../api";

const Form = ({ handleAdd, transactionsList, setTransactionsList, item }) => {

  const params = useParams();
  const id = params.id

  const [ingrediente, setIngrediente] = useState("");
  const [valorIngrediente, setValorIngrediente] = useState("");
  const [qtdIngrediente, setQtdIngrediente] = useState("");
  const [qtdUtilizada, setQtdUtilizada] = useState("");
  const [rendimento, setRendimento] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);

  function handleClick() {
    handleAdicionar()
    handleSave()
  }

  const handleSave = () => {
    if (!ingrediente) {
      alert("INFORME O INGREDIENTE!");
      return;
    } else if (!valorIngrediente) {
      alert("INFORME O VALOR DO INGREDIENTE!");
      return;
    } else if (!qtdIngrediente) {
      alert("INFORME A QUANTIDADE DO INGREDIENTE BRUTO!");
      return;
    } else if (!qtdUtilizada) {
      alert("INFORME A QUANTIDADE UTILIZADA NA RECEITA!");
      return;
    } else if (!rendimento) {
      alert("INFORME O RENDIMENTO DA SUA RECEITA!");
      return;
    } else if (valorIngrediente < 1 || qtdIngrediente < 1 || qtdUtilizada < 1 || rendimento < 1) {
      alert("OS VALORES DEVEM SER POSITIVOS!");
      return;
    }

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

  };

  function handleAdicionar() {
    const data = {
        id: generateID(),
        ingrediente: ingrediente, 
        valorIngrediente: valorIngrediente, 
        qtdIngrediente: qtdIngrediente, 
        qtdUtilizada: qtdUtilizada, 
        rendimento: rendimento, 
    }
    console.log(data);
    const response = api.post('/produto/' + id, data)
    console.log(response)
  };

  let x = 0;

  var nomeProduto = localStorage.getItem("transactionsP");
  nomeProduto = JSON.parse(nomeProduto);

  while (nomeProduto[x].id != id) {
    x += 1
  }
  let nome = nomeProduto[x].produto;

  return (
    <>
      <C.P>PRODUTO</C.P>
      <C.Produto>{nome}</C.Produto>
      <C.Container>


        <C.InputContent>
          <C.Label id="eu">RENDIMENTO TOTAL DA RECEITA (unidades)</C.Label>
          <C.Input
            value={rendimento}
            type="number"
            id="el"
            onChange={(e) => setRendimento(e.target.value)}
            placeholder="Quantidade total de porções da receita (exemplo: 5)"
          />
        </C.InputContent>
      </C.Container>

      <C.Container>
        <C.InputContent>
          <C.Label>NOME DO INGREDIENTE</C.Label>
          <C.Input
            value={ingrediente}
            type="text"
            onChange={(e) => setIngrediente(e.target.value)}
            placeholder="exemplo: Farinha" />
        </C.InputContent>
        <C.InputContent>
          <C.Label>VALOR DO INGREDIENTE (R$)</C.Label>
          <C.Input
            value={valorIngrediente}
            type="number"
            onChange={(e) => setValorIngrediente(e.target.value)}
            placeholder="exemplo: 5.00"
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>QUANTIDADE DO INGREDIENTE BRUTO (g)</C.Label>
          <C.Input
            value={qtdIngrediente}
            type="number"
            onChange={(e) => setQtdIngrediente(e.target.value)}
            placeholder="Peso total da embalagem bruto (exemplo: 1000)"
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>QUANTIDADE UTILIZADA NA RECEITA (g)</C.Label>
          <C.Input
            value={qtdUtilizada}
            type="number"
            onChange={(g) => setQtdUtilizada(g.target.value)}
            placeholder="Peso do Ingrediente utilizado (exemplo: 500)"
          />
        </C.InputContent>
        <C.Button onClick={handleClick}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />

    </>
  );
};

export default Form;
