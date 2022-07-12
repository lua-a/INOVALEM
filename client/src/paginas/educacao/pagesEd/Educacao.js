import React, { useState, useEffect } from 'react'
import  { AuthContext } from '../../../helpers/AuthContext';
import axios from "axios";
import '../estilosEd/indexEd.css'

import SideBar from "../../../componentes/SideBar/SideBar";
import Header from "../../precificacao/components/Header";


import BoloLaranja from '../imgEd/boloLaranja.webp'
import BoloBanana from '../imgEd/bolobanana.jpg'
import BoloLimao from '../imgEd/boloLimão.jpg'
import BoloCenoura from '../imgEd/bolocenoura.webp'
import BoloMacaxeira from '../imgEd/boloMacaxeira.jpg'

import MousseMaracuja from '../imgEd/moussemaracuja.webp'
import MousseLimao from '../imgEd/mousselimao.webp'
import MousseChocolate from '../imgEd/moussechocolate.jpg'
import MousseMorango from '../imgEd/moussemorango.jpg'
import MousseManga from '../imgEd/moussemanga.jpg'

import RecheioNinho from '../imgEd/recheioNinho.jpg'
import RecheioBriga from '../imgEd/recheioBriga.webp'
import RecheioCoco from '../imgEd/recheioCoco.jpg'
import RecheioMorango from '../imgEd/recheioMorango.jpg'
import RecheioOreo from '../imgEd/recheioOreo.jpg'

import BrigadeiroOvomaltine from '../imgEd/brigadeiroOvomaltine.jpg'
import BrigadeiroMaracuja from '../imgEd/brigadeiroMaracuja.jpg'
import BrigadeiroAmendoim from '../imgEd/brigadeiroAmendoim.jpg'
import BrigadeiroBeijinho from '../imgEd/brigadeiroBeijinho.jpg'

import PaoIntegral from '../imgEd/paoIntegral.jpg'
import PaoDoce from '../imgEd/paoDoce.jpg'
import PaoFrios from '../imgEd/paoFrios.jpg'
import PaoLeite from '../imgEd/PaoLeite.jpg'
import PaoFrances from '../imgEd/paoFrances.webp'

import EsfihaFechada from '../imgEd/esfihaFechada.jpg'
import RisoleCarne from '../imgEd/risoleCarneM.jpg'
import CroqueteCarne from '../imgEd/croqueteCarne.jpg'
import Coxinha from '../imgEd/coxinha.jpg'
import Quibe from '../imgEd/quibeFr.jpg'

import CarneAssada from '../imgEd/carneAssada.jpg'
import MacarraoChapa from '../imgEd/macarraoChapa.jpg'
import SanduicheSalmao2 from '../imgEd/sanduicheSalmao2.jpg'
import SeteBar from '../imgEd/seteBar.jpg'
import Polpetone from '../imgEd/polpetone3.jpg'

import MacarraoPanela from '../imgEd/macarraopanela.jpg'
import MacarraoNinho from '../imgEd/macarraoNinho.webp'
import MacarraoGratinado from '../imgEd/macarraoGratinado.webp'
import MacarraoLinguica from '../imgEd/macarraoLinguica.webp'
import Lasanha from '../imgEd/lasanha.jpg'

import FricasseFrango from '../imgEd/fricasseFrango.jpg'
import FricasseCarne from '../imgEd/fricasseCarne.webp'
import FricasseBacalhau from '../imgEd/fricasseBacalhau.webp'
import FricasseCamarao from '../imgEd/fricasseCamarao.webp'
import FricasseLegume from '../imgEd/fricasseLegume.jpg'

import FeijaoCamarao from '../imgEd/feijaoCamarao.jpg'
import FeijaoCostela from '../imgEd/feijaoCostela.jpg'
import FeijaoVerde from '../imgEd/feijaoVerde.jpg'
import FeijaoSimples from '../imgEd/feijaoSimples.jpg'
import FeijaoTropeiro from '../imgEd/feijaoTropeiro.jpg'

import ArrozLinguica from '../imgEd/arrozLinguica.jpg'
import ArrozCaipira from '../imgEd/arrozCaipira2.webp'
import ArrozCarreteiro from '../imgEd/arrozCarreteiro.jpg'
import ArrozForno from '../imgEd/arrozForno.jpg'
import ArrozMar from '../imgEd/arrozMar.webp'

import CarneSimples from '../imgEd/carneSimples.jpg'
import CarneBatata from '../imgEd/carneBatata.webp'
import Costela from '../imgEd/costela.jpg'
import Bife from '../imgEd/bife.jpg'
import CarneDesfiada from '../imgEd/carneDesfiada.jpg'

import MeiEd from '../imgEd/Mei.jpg'
import valorMei from '../imgEd/valorMei.jpg'
import Como from '../imgEd/comoF.jpg'
import Declaracao from '../imgEd/declaracao.jfif'
import beneficios from '../imgEd/beneficios.jpg'
import { Footer } from "../../../componentes/footer/Footer";
import { VoltarTopo } from "../../landing-page/sessoes/SessoesLanding";


export function Educacao() {

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
                <div className="homePagesEd">
                    <Header />
                    <section className="secaoTxtInicio">
                        <SideBar />
                        <h1 className="txtBemVindo">
                            Educação
                        </h1>
                    </section>

                    <div className="containerH2">
                        <h2 className="trilhaC">TRILHAS DE CONTEÚDO</h2>
                    </div>

                    <div className="containerP">
                        <h3 className="textH3">Confeitaria</h3>
                        <h5 className="textH5"> Bolos</h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=vQNEvrI8p7M" target="_blank" > <img className="imgReceita" src={BoloLaranja} alt='Footruck' />Bolo de Laranja</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=8ZgltBo_ebA" target="_blank" > <img className="imgReceita" src={BoloLimao} alt='Footruck' />Bolo de Limão</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=vVnrVQElpqM" target="_blank" > <img className="imgReceita" src={BoloCenoura} alt='Footruck' />Bolo de Cenoura</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=QcHEJY2rVZs" target="_blank" > <img className="imgReceita" src={BoloBanana} alt='Footruck' />Bolo de Banana</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=InybhM5Q-Rc" target="_blank" > <img className="imgReceita" src={BoloMacaxeira} alt='Footruck' />Bolo de Macaxeira</a>
                            </div>
                        </div>
                        <h5> Mousses</h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=YdL2Y4LQEmw" target="_blank" > <img className="imgReceita" src={MousseMaracuja} alt='Footruck' />Mousse de Maracuja</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=QcHEJY2rVZs" target="_blank" > <img className="imgReceita" src={MousseLimao} alt='Footruck' />Mousse de Limão</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=OnwcqvCw1FU" target="_blank" > <img className="imgReceita" src={MousseManga} alt='Footruck' />Mousse de Manga</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=UYtOwV7T3HM" target="_blank" > <img className="imgReceita" src={MousseChocolate} alt='Footruck' />Mousse de Chocolate</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=sLoP_TUnQ2Y" target="_blank" > <img className="imgReceita" src={MousseMorango} alt='Footruck' />Mousse de Morango</a>
                            </div>
                        </div>
                        <h5> Recheios </h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=YdL2Y4LQEmw" target="_blank" > <img className="imgReceita" src={RecheioNinho} alt='Footruck' />Recheio de Ninho</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=QcHEJY2rVZs" target="_blank" > <img className="imgReceita" src={RecheioBriga} alt='Footruck' />Recheio de Brigadeiro</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=OnwcqvCw1FU" target="_blank" > <img className="imgReceita" src={RecheioCoco} alt='Footruck' />Recheio de Coco</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=UYtOwV7T3HM" target="_blank" > <img className="imgReceita" src={RecheioMorango} alt='Footruck' />Recheio de Morango</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=sLoP_TUnQ2Y" target="_blank" > <img className="imgReceita" src={RecheioOreo} alt='Footruck' />Recheio de Oreo</a>
                            </div>
                        </div>
                        <h5> Brigadeiros </h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=vmi5XMgpvwg" target="_blank" > <img className="imgReceita" src={BrigadeiroOvomaltine} alt='Footruck' />Brigadeiro Ovomaltine</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=InybhM5Q-Rc" target="_blank" > <img className="imgReceita" src={BrigadeiroMaracuja} alt='Footruck' />Brigadeiro Maracuja</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=SkPSZ_2InFs" target="_blank" > <img className="imgReceita" src={BrigadeiroAmendoim} alt='Footruck' />Brigadeiro Amendoim</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=0piwOtEydE0" target="_blank" > <img className="imgReceita" src={BrigadeiroBeijinho} alt='Footruck' />Beijinho</a>
                            </div>
                        </div>


                    </div>
                    <div className="containerP">
                        <h3>Panificação</h3>
                        <h5> Pães </h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=6BxU4nIqI6c" target="_blank" > <img className="imgReceita" src={PaoIntegral} alt='Footruck' />Pão Integral</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=GS-THvcCYOU" target="_blank" > <img className="imgReceita" src={PaoDoce} alt='Footruck' />Pão Doce</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=2BSH0RaB8QY" target="_blank" > <img className="imgReceita" src={PaoFrios} alt='Footruck' />Pão de Frios</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=4urJdTuBZ6I" target="_blank" > <img className="imgReceita" src={PaoLeite} alt='Footruck' />Pão de Leite</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=LOVa5UgMffc" target="_blank" > <img className="imgReceita" src={PaoFrances} alt='Footruck' />Pão Francês</a>
                            </div>
                        </div>
                        <h5> Salgados </h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=0QmeCM2x9Mo" target="_blank" > <img className="imgReceita" src={Coxinha} alt='Footruck' />Coxinha</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=Pf0sgMLVNDw" target="_blank" > <img className="imgReceita" src={Quibe} alt='Footruck' />Quibe</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=T2zk4C4G1xk" target="_blank" > <img className="imgReceita" src={RisoleCarne} alt='Footruck' /> Risole de Carne</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=Pp9v4tjcF0E" target="_blank" > <img className="imgReceita" src={CroqueteCarne} alt='Footruck' />Croquete de Carne</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=-5MLc_HtmUI" target="_blank" > <img className="imgReceita" src={EsfihaFechada} alt='Footruck' />Esfiha Fechada</a>
                            </div>
                        </div>
                    </div>
                    <div className="containerP">
                        <h3>Food Truck</h3>
                        <h5> Comidas de Rua </h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=4HBkXetimr0" target="_blank" > <img className="imgReceita" src={CarneAssada} alt='Footruck' />Carne Assada</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=VwySg41N_jw" target="_blank" > <img className="imgReceita" src={MacarraoChapa} alt='Footruck' />Macarrão na Chapa</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=iTj_eWfGFzI" target="_blank" > <img className="imgReceita" src={SanduicheSalmao2} alt='Footruck' /> Sanduiche de Salmão</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=1246prZBpR4" target="_blank" > <img className="imgReceita" src={SeteBar} alt='Footruck' /> Porções</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=hKJE0Xw3kdE" target="_blank" > <img className="imgReceita" src={Polpetone} alt='Footruck' />Polpetone</a>
                            </div>
                        </div>
                    </div>
                    <div className="containerP">
                        <h3>Alimentação</h3>
                        <h5> Massas</h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=JMUGThqq7Lg" target="_blank" > <img className="imgReceita" src={MacarraoPanela} alt='Footruck' /> Macarrão de Panela</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=SLh7XmcAVuI&t=2s" target="_blank" > <img className="imgReceita" src={MacarraoNinho} alt='Footruck' /> Macarrão Ninho</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=jfRIXahsFaQ" target="_blank" > <img className="imgReceita" src={MacarraoGratinado} alt='Footruck' />Macarrão Gratinado</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=C3XxduURqS0&t=3s" target="_blank" > <img className="imgReceita" src={MacarraoLinguica} alt='Footruck' />Macarrão c/ Linguiça</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=-17gHiKIUAU&t=1s" target="_blank" > <img className="imgReceita" src={Lasanha} alt='Footruck' />Lasanha</a>
                            </div>
                        </div>
                        <h5> Fricasses</h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=3t7lsSE1kY0" target="_blank" > <img className="imgReceita" src={FricasseFrango} alt='Footruck' /> Fricassê Frango</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=4IR0DdqDUrg" target="_blank" > <img className="imgReceita" src={FricasseCarne} alt='Footruck' /> Fricassê Carne</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=WaEtKJqD23Q" target="_blank" > <img className="imgReceita" src={FricasseBacalhau} alt='Footruck' />Fricassê Bacalhau</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=uEyQEwG1FJ4" target="_blank" > <img className="imgReceita" src={FricasseCamarao} alt='Footruck' />Fricassê Camarão</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=66lm6Lj2p-E" target="_blank" > <img className="imgReceita" src={FricasseLegume} alt='Footruck' />Fricassê Legume </a>
                            </div>
                        </div>
                        <h5> Feijões</h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=Kg8HXhHJB54" target="_blank" > <img className="imgReceita" src={FeijaoCamarao} alt='Footruck' /> Feijão c/ Camarão</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="   https://www.youtube.com/watch?v=Gt8xUCK7KV0" target="_blank" > <img className="imgReceita" src={FeijaoCostela} alt='Footruck' /> Feijão c/ Costela</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=NrHI315TXHc" target="_blank" > <img className="imgReceita" src={FeijaoVerde} alt='Footruck' /> Feijão Verde</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=cNuf6HXk7BU" target="_blank" > <img className="imgReceita" src={FeijaoSimples} alt='Footruck' />Feijão Simples</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=IjrkMoK0GG0" target="_blank" > <img className="imgReceita" src={FeijaoTropeiro} alt='Footruck' />Feijão Tropeiro </a>
                            </div>
                        </div>
                        <h5> Arrozes</h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=WFY9OD6-FsE" target="_blank" > <img className="imgReceita" src={ArrozLinguica} alt='Footruck' />Arroz com Linguiça</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=AntiF_IDQcc" target="_blank" > <img className="imgReceita" src={ArrozCaipira} alt='Footruck' />Arroz Caipira</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=F6FeqV0UCFc" target="_blank" > <img className="imgReceita" src={ArrozCarreteiro} alt='Footruck' />Arroz Carreteiro</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=8Sf4Dog2pfc" target="_blank" > <img className="imgReceita" src={ArrozForno} alt='Footruck' />Arroz de Forno</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=SwffPxUkb3Y" target="_blank" > <img className="imgReceita" src={ArrozMar} alt='Footruck' />Arroz do Mar </a>
                            </div>
                        </div>
                        <h5> Carnes</h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=X-Vi2JUdUG8" target="_blank" > <img className="imgReceita" src={CarneSimples} alt='Footruck' />Carne de Panela</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=sJrCuNFS-2s" target="_blank" > <img className="imgReceita" src={CarneBatata} alt='Footruck' />Carne com Batata</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=sJkI1pwhu30" target="_blank" > <img className="imgReceita" src={Costela} alt='Footruck' />Costela</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=vNavk4v4_Ys" target="_blank" > <img className="imgReceita" src={Bife} alt='Footruck' />Bife à Parmegiana</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=XgsDd7FvviQ" target="_blank" > <img className="imgReceita" src={CarneDesfiada} alt='Footruck' /> Carne Desfiada </a>
                            </div>
                        </div>
                    </div>

                    <div className="containerP">
                        <h3>Gestão de Negócios</h3>
                        <h5> MEI </h5>
                        <div className="paiImg">
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/embed/wMUS4gGklgY" target="_blank" > <img className="imgReceita" src={MeiEd} alt='Footruck' />Como abrir um Mei</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href="  https://www.youtube.com/watch?v=QdaMvcEYRCw" target="_blank" > <img className="imgReceita" src={valorMei} alt='Footruck' />Valor para ser Mei</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=ZeirpO8S-B4" target="_blank" > <img className="imgReceita" src={Como} alt='Footruck' />Como se formalizar</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/watch?v=CDTNztUs8uc" target="_blank" > <img className="imgReceita" src={Declaracao} alt='Footruck' /> Declaração anual</a>
                            </div>
                            <div className="ContainerImg">
                                <a className="linkText" href=" https://www.youtube.com/embed/UGfy7PVlk7Q" target="_blank" > <img className="imgReceita" src={beneficios} alt='Footruck' />Benefícios Mei</a>
                            </div>
                        </div>
                    </div>
                </div >
                <VoltarTopo />
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
