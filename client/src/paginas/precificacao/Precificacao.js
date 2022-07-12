import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import SideBar from "../../componentes/SideBar/SideBar";
import { useParams } from "react-router-dom";
import { Footer } from "../../componentes/footer/Footer";
import  { AuthContext } from '../../helpers/AuthContext';
import axios from "axios";

const Precificacao = () => {

    const params = useParams();
    const id = params.id;
    console.log(id)

    const data = localStorage.getItem("transactions" + id);
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [custoProduto, setCustoProduto] = useState(0);
    const [custoUnidade, setCustoUnidade] = useState(0);
    const [sugestaoPreco, setSugestaoPreco] = useState(0);

    useEffect(() => {

        const amountcustoProduto = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.soma));

        const amountcustoUnidade = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.somaU));

        const amountsugestaoPreco = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.sugestao1));

        const amountsugestaoPreco2 = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.sugestao2));

        const custoProduto = amountcustoProduto.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const custoUnidade = amountcustoUnidade.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const sugestaoPreco = amountsugestaoPreco.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const sugestaoPreco2 = amountsugestaoPreco2.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        setCustoProduto(`R$ ${custoProduto}`);
        setCustoUnidade(`R$ ${custoUnidade}`);
        setSugestaoPreco(`R$ ${sugestaoPreco} e R$${sugestaoPreco2} `)


    }, [transactionsList]);

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem("transactions" + id, JSON.stringify(newArrayTransactions));
    };

    const [ authState, setAuthState ] = useState(true)

    useEffect(() => {
      axios.get("http://localhost:9000/login/auth", {headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
        if (response.data.error) {
          setAuthState(false)
        } else {
          setAuthState(true)
          }
        });
    }, []);  

    return (
        <>
        <AuthContext.Provider value={{authState, setAuthState}}>
        {authState && (  
            <>
                <Header />
                <SideBar />
                <Resume custoProduto={custoProduto} custoUnidade={custoUnidade} sugestaoPreco={sugestaoPreco} />
                <Form
                    handleAdd={handleAdd}
                    transactionsList={transactionsList}
                    setTransactionsList={setTransactionsList}
                />
                <GlobalStyle />
                <Footer />
            </>
        )}
        {!authState && (
            window.location.replace("/login")
        )}
        </AuthContext.Provider>
        </>
    );
};

export default Precificacao;
