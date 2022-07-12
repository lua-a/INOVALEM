import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import SideBar from "../../componentes/SideBar/SideBar";
import { Footer } from "../../componentes/footer/Footer";
import  { AuthContext } from '../../helpers/AuthContext';
import axios from "axios";

const Produto = () => {

    const data = localStorage.getItem("transactionsP");
    const [transactionsPList, setTransactionsPList] = useState(
        data ? JSON.parse(data) : []
    );

    const handleAdd = (transactionP) => {
        const newArrayTransactionsP = [...transactionsPList, transactionP];

        setTransactionsPList(newArrayTransactionsP);

        localStorage.setItem("transactionsP", JSON.stringify(newArrayTransactionsP));
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
                    <Resume />
                    <Form
                        handleAdd={handleAdd}
                        transactionsPList={transactionsPList}
                        setTransactionsPList={setTransactionsPList}
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

export default Produto;
