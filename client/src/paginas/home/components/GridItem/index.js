import React from "react";
import * as C from "./styles";
import {
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {

  return (
    <>
      <C.Tr>

        <C.Td>{item.qtdIngrediente}</C.Td>
        <C.Td alignCenter>07/07/2022 18:30</C.Td>
        <C.Td alignCenter value={{ color: 'var(--laranja)' }}>
          <FaTrash onClick={() => onDelete(item.id)} />
        </C.Td>
      </C.Tr>

      <C.Invisivel>
        {item.somaU = (item.soma / item.rendimento)}
        {item.sugestao1 = item.qtdIngrediente}
      </C.Invisivel>

    </>

  );
};

export default GridItem;
