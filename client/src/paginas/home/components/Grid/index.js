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
    localStorage.setItem("transactionsHome", JSON.stringify(newArray));
  };

  return (
    <>
      <C.Table>
        <C.Thead>
          <C.Tr>
            <C.Th width={70}>GANHOS (R$)</C.Th>
            <C.Th alignCenter width={15}>DATA & HORA</C.Th>
            <C.Th alignCenter width={10}>EXCLUIR</C.Th>
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
