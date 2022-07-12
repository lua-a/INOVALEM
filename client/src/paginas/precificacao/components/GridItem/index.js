import React from "react";
import * as C from "./styles";
import {
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {

  return (
    <>
      <C.Tr>
        <C.Td>{item.ingrediente}</C.Td>
        <C.Td>{item.valorIngrediente}</C.Td>
        <C.Td>{item.qtdIngrediente}</C.Td>
        <C.Td>{item.qtdUtilizada}</C.Td>
        <C.Td>{item.soma = ((item.valorIngrediente / item.qtdIngrediente) * item.qtdUtilizada).toFixed(2)}</C.Td>
        <C.Td>{item.rendimento}</C.Td>
        <C.Td alignCenter value={{ color: 'var(--laranja)' }}>
          <FaTrash onClick={() => onDelete(item.id)} />
        </C.Td>
      </C.Tr>

      <C.Invisivel>
        {item.somaU = (item.soma / item.rendimento)}
        {item.sugestao1 = ((item.somaU * 100) / 33)}
        {item.sugestao2 = ((item.somaU * 100) / 30)}
      </C.Invisivel>

    </>

  );
};

export default GridItem;
