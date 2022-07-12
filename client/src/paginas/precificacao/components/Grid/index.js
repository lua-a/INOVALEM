import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import { useParams } from "react-router-dom";

const Grid = ({ itens, setItens }) => {

  const params = useParams();
  const id = params.id;

  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions" + id, JSON.stringify(newArray));
  };

  return (
    <>
      <C.Table>
        <C.Thead>
          <C.Tr>
            <C.Th width={14}>INGREDIENTE</C.Th>
            <C.Th width={13}>VALOR INGREDIENTE</C.Th>
            <C.Th width={17}>QUANTIDADE INGREDIENTE</C.Th>
            <C.Th width={15}>QUANTIDADE UTILIZADA</C.Th>
            <C.Th width={12}>CUSTO PRODUTO</C.Th>
            <C.Th width={8}>RENDIMENTO</C.Th>
            <C.Th width={5}></C.Th>
          </C.Tr>
        </C.Thead>
        <C.Tbody>
          {itens?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </C.Tbody>
      </C.Table>
    </>
  );
};

export default Grid;
