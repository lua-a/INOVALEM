import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import { useParams } from "react-router-dom";
import api from "../../api"

const Grid = ({ itens, setItens }) => {
  const params = useParams();
  const id = params.id;

  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactionsP", JSON.stringify(newArray));
    handledeletar()

    function handledeletar() {
      const data = {
        id: ID,
      }
      console.log(ID);      
      const response = api.post('/precificacao', data)
    }
  };

  return (
    <>
      <C.Table>
        <C.Thead>
          <C.Tr>
            <C.Th width={80}>PRODUTO</C.Th>
            <C.Th alignCenter width={10}>EDITAR</C.Th>
            <C.Th alignCenter width={10}>DELETAR</C.Th>
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
