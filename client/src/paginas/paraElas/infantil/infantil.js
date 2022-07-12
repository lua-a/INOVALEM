import React, { useState, useEffect } from 'react'
import './infantil.css'
import  { AuthContext } from '../../../helpers/AuthContext';
import axios from "axios";

import InfantilUndraw from '../img-workshop/infantilUndraw.svg'
import Lupa from '../img-workshop/lupa.png'

import Sesc from '../img-workshop/logo_sesc.png'
import FabCultura from '../img-workshop/logo_fabcult.png'
import Ceu from '../img-workshop/logo_ceu.png'
import Senac from '../img-workshop/logo_senac.png'
import SideBar from '../../../componentes/SideBar/SideBar'
import { HeaderParaElas } from '../../../componentes/header paraElas/HeaderParaElas'
import { Footer } from '../../../componentes/footer/Footer'



export function Infantil() {

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
                <HeaderParaElas />
                <SideBar />
                <div className='containerInfantil'>
                    <section className='secao-um-infantil'>
                        <div className='secao-texto-infantil'>
                            <h1 className='tituloAreaInfantil'>
                                Área infantil
                            </h1>
                        </div>
                        <div className='conteudo-infantil'>
                            <h2 className='titulo-inicial-infantil'>
                                Sabemos que trabalhar e cuidar de um filho pode exigir <br />
                                muito no dia-a-dia e pensando nisso, separamos alguns <br />locais onde você pode deixar o seu filho se <div className='corDivertido'>divertindo.</div>
                            </h2>
                        </div>
                        <div className='eqp-inovalem'>
                            <div className='container-img-infantil'>
                                <img className="img-infantil" src={InfantilUndraw} alt="Infantil" />
                            </div>
                            <p className='txt-explicacao-infantil'>
                                A <span className='txtInovalemCor'> equipe Inovalem </span>
                                pensou em inovar e ser uma ponte <br /> entre
                                <span className='txtMulheresCor'> mulheres empreendedoras </span>
                                e que ao mesmo tempo são <span className='txtMaesCor'>
                                    super mães!</span> <br />

                                Esse é um espaço onde você pode pesquisar lugares com atividades <br /> recreativas para deixar seu <span className='txtFilho'>
                                    filho(a)</span> participando de toda a diversão com segurança,<br /> conforto e comodidade enquanto você está empreendendo
                            </p>
                        </div>
                    </section>
                    <section className='secao-dois-infantil'>
                        <h2 className='subtitulo-como'>
                            Como funciona?
                        </h2>
                        <p className='TxtLocalizacao'>
                            Aqui estão alguns dos nossos parceiros que oferecem <span className='txtEspaco'>espaços recreativos</span>
                        </p>
                        <section className="cards-atv-recreativa">
                            <div className="cards-infantil">
                                <img className="card-img-infantil" src={Sesc} alt="Sesc" />
                            </div>
                            <div className='cards-infantil'>
                                <img className='card-img-infantil' src={FabCultura} alt="Fábrica de cultura" />
                            </div>
                            <div className='cards-infantil'>
                                <img className='cards-img-infantil' src={Ceu} alt="Céu" />
                            </div>
                            <div className='cards-infantil'>
                                <img className='cards-img-infantil'
                                    src={Senac} alt='Senac' />
                            </div>
                        </section>
                        <div className="containerTesteInfantil">
                            <div className="contaninerBusca">
                                <img className="iconLupa"
                                    src={Lupa} alt='Localização'
                                />
                                <input className="busca"
                                    type="text"
                                    name=""
                                    placeholder="Digite sua localização..."
                                />
                            </div>
                        </div>
                        <div className='iframeMaps'>
                            <iframe className='iframeInfantil' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58477.66861013072!2d-46.782873599999995!3d-23.6453888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1655754706385!5m2!1spt-BR!2sbr"></iframe>
                        </div>
                    </section>
                </div>
                <Footer />
            </>
        )}
        {!authState && (
        window.location.replace("/login")
        )}
        </AuthContext.Provider>
        </>
    );
}