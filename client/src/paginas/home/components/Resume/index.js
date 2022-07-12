import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const ResumeH = ({ custoProduto, custoUnidade, sugestaoPreco }) => {
  return (
    <>
      <C.Container>
        <ResumeItem
          title="CLIENTES (EM BREVE)"
          Icon={PersonOutlineOutlinedIcon}
          value={custoProduto}
        />
        <ResumeItem
          title="PEDIDOS (EM BREVE)"
          Icon={ShoppingCartOutlinedIcon}
          value={custoUnidade}
        />
        <ResumeItem title="GANHOS" Icon={MonetizationOnOutlinedIcon} value={sugestaoPreco} />
      </C.Container>

    </>
  );
};

export default ResumeH;
