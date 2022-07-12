import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";
import axios from "axios";

const FormP = ({ handleAdd, transactionsPList, setTransactionsPList }) => {
  const [produto, setProduto] = useState("");


  const generateID = () => Math.round(Math.random() * 1000);
  const id = generateID();

  const handleSave = () => {
    if (!produto) {
      alert("INFORME O NOME DO PRODUTO!");
      return;
    }

    const transactionP = {
      id: id,
      produto: produto,

    };

    handleAdd(transactionP);

    setProduto("");

  };

  function handleAdicionar() {
    axios.post("http://localhost:9000/produto",  {
      name: id,
      produto: produto,
    },
    {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      }
    }
    )
    .then((response) => {
      if (response.data.error) {
        alert("faça login")
      }else {
        console.log(response);
        handleSave();
      }
    })
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label> <C.laranja> NOME DO PRODUTO </C.laranja> </C.Label>
          <C.Input
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            placeholder="Exemplo: Bolo de Cenoura" />
        </C.InputContent>
        <C.Button onClick={handleAdicionar}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsPList} setItens={setTransactionsPList} />

    </>
  );
};

export default FormP;
