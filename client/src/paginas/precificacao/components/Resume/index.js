import React from "react";
import { Link } from "react-router-dom";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import { FaDollarSign } from "react-icons/fa";

const Resume = ({ custoProduto, custoUnidade, sugestaoPreco }) => {
  return (
    <>
      <C.telaInicial>

        <C.titulo>
          <C.azul> Aprenda a </C.azul> <C.laranja>precificar</C.laranja> <C.azul> o
            seu </C.azul> <C.laranja>produto</C.laranja>
        </C.titulo>

        <C.Buttons>
          <C.Button1>Como Precificar? </C.Button1>
          <C.Button2>Adicionar Produto</C.Button2>
          <Link to="/produtos" ><C.Button3>Produtos</C.Button3></Link>
        </C.Buttons>

      </C.telaInicial>

      <C.Container>
        <ResumeItem
          title="CUSTO DO PRODUTO"
          Icon={FaDollarSign}
          value={custoProduto}
        />
        <ResumeItem
          title="CUSTO POR UNIDADE"
          Icon={FaDollarSign}
          value={custoUnidade}
        />
        <ResumeItem title="PREÇO SUGERIDO" Icon={FaDollarSign} value={sugestaoPreco} />
      </C.Container>

    </>
  );
};

export default Resume;
