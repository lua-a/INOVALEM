import React from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

const Resume = ({ custoProduto, custoUnidade, sugestaoPreco }) => {
  return (
    <>


      <C.titulo>
        <C.azul>Precifique o seu </C.azul><C.laranja>produto!</C.laranja>
      </C.titulo>

      <C.Buttons>
        <C.Button1>Como Precificar? </C.Button1>
        <Link to="/produtos" ><C.Button3>Produtos</C.Button3></Link>
      </C.Buttons>

    </>
  );
};

export default Resume;
