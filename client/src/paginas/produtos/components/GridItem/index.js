import React from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";
import {
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import "./style.css"

const GridItem = ({ item, onDelete, sugestaoPreco }) => {

  return (
    <>
      <C.Tr>
        <C.Td>{item.produto}</C.Td>

        <C.Td alignCenter >
          <Link to={'/precificacao/' + (item.id)} ><FaEdit className="edit" /></Link>
        </C.Td>

        <C.Td alignCenter value={{ color: 'var(--laranja)' }}>
          <FaTrash onClick={() => onDelete(item.id)} />
        </C.Td>
      </C.Tr>

    </>

  );
};

export default GridItem;
