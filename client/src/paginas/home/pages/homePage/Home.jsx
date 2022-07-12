import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import "./home.scss"
import Header from "../../../precificacao/components/Header"
import SideBar from "../../../../componentes/SideBar/SideBar"
import FormH from "../../components/Form"
import ResumeH from "../../components/Resume"
import { useEffect, useState } from "react"

import Grid from "../../components/Grid";
import { Footer } from "../../../../componentes/footer/Footer"
import  { AuthContext } from '../../../../helpers/AuthContext';
import axios from "axios";

export const HomePage = () => {

  const data = localStorage.getItem("transactionsHome");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [custoProduto, setCustoProduto] = useState(0);
  const [custoUnidade, setCustoUnidade] = useState(0);
  const [sugestaoPreco, setSugestaoPreco] = useState(0);

  useEffect(() => {

    const amountsugestaoPreco = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.sugestao1));

    const sugestaoPreco = amountsugestaoPreco.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    setCustoProduto(`0`);
    setCustoUnidade(`0`);
    setSugestaoPreco(`R$ ${sugestaoPreco} `)


  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactionsHome" , JSON.stringify(newArrayTransactions));
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
          <div className="homePage">
            <div className="homeContainer">
              <Header />
              <div>
                <SideBar />
                <div className="tituloHome">
                  <span className="azul">Gerencie o seu <span className="laranja">negócio</span></span>
                </div>
              </div>
              <ResumeH custoProduto={custoProduto} custoUnidade={custoUnidade} sugestaoPreco={sugestaoPreco} />
              <FormH
                handleAdd={handleAdd}
                transactionsList={transactionsList}
                setTransactionsList={setTransactionsList} />
              <div className="charts">
                <Featured />
                <Chart title="Últimos 6 meses (Rendimento)" aspect={2 / 1} />
              </div>
            </div>
          </div>

          <Grid itens={transactionsList} setItens={setTransactionsList} />

          <Footer />

        </>
      )}
      {!authState && (
        window.location.replace("/login")
      )}
    </AuthContext.Provider>
  </>
  )
}

export default HomePage