import React from "react";
import NavBarEd from "../componentEd/Nav.Bar";

import PaoRolo from '../imgEd/paoRolo.jpg'
import PaoIntegral from  '../imgEd/paoIntegral.jpg'
import PaoDoce from '../imgEd/paoDoce.jpg'
import PaoFrios from '../imgEd/paoFrios.jpg'
import PaoPanela from '../imgEd/paoPanela.jpg'
import PaoLeite from '../imgEd/PaoLeite.jpg'
import PaoFrances from '../imgEd/paoFrances.webp'
import Italiano from '../imgEd/italiano.jpg'
import Enroladinho from '../imgEd/enroladinho.jpg'
import PastelSim from '../imgEd/pastelSim.webp'
import EsfihaFechada from '../imgEd/esfihaFechada.jpg'
import RisoleCarne from '../imgEd/risoleCarneM.jpg'
import CroqueteCarne from '../imgEd/croqueteCarne.jpg'
import Coxinha from '../imgEd/coxinha.jpg'
import Quibe from '../imgEd/quibeFr.jpg'
import Bolinha from '../imgEd/bolinha.jpg'
import PaoQj from '../imgEd/paoQj.jpg'
import Croquete from '../imgEd/croqueteFg.webp'

import '../estilosEd/Panificacao.css'
import SideBar from "../../../componentes/SideBar/SideBar";

export const Panificacao = () => {

     return (
          <div className="panificacaoEd">
               <NavBarEd />
               <SideBar />

               <section className="secaoTxtPanificacao">
                    <h1 className="txtBemVindoPanificacao">
                         Panificação
                    </h1>

                    <div className="containerExplicacaoPanificacao">
                         <p className="txtexpliPanificacao">
                              Venha aprender a fazer pães, massas e salgados!
                         </p>
                    </div>
               </section>

               < div className="ConteudoPanificacao">
                    <div className="TituloPanificacao">
                         <h2> Pães </h2>
                    </div>


                    <div className="ContainerPanificacao">

                         <div className="CardDePanificacao">
                         <img className="imgReceita" src={PaoRolo} alt='Panificação'/>
                              <div className="ContainerImg">
                         <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=jT767XsYW3w" target="_blank" >Pão rolo de lã</a> 
                     
                              </div>
                         </div>

                         <div className="CardDePanificacao">
                         <img className="imgReceita" src={PaoIntegral} alt='Footruck'/>
                              <div className="ContainerImg">
                         <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=6BxU4nIqI6c" target="_blank" >Pão integral</a> 
                              </div>
                         </div>

                         <div className="CardDePanificacao">
                         <img className="imgReceita" src={PaoDoce} alt='Footruck'/>
                              <div className="ContainerImg">
                         <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=GS-THvcCYOU" target="_blank" >Pão doce </a> 
                              </div>
                         </div>

                         <div className="CardDePanificacao">
                         <img className="imgReceita" src={PaoFrios} alt='Footruck'/>
                              <div className="ContainerImg">
                         <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=2BSH0RaB8QY" target="_blank" >Pão de frios</a> 
                              </div>
                         </div>

                         <div className="CardDePanificacao">
                         <img className="imgReceita" src={PaoPanela} alt='Footruck'/>
                              <div className="ContainerImg">
                         <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=yVY2eoP8_YQ" target="_blank" >Pão na panela</a> 
                              </div>
                         </div>

                         <div className="CardDePanificacao">
                         <img className="imgReceita" src={PaoLeite} alt='Footruck'/>
                              <div className="ContainerImg">
                         <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=4urJdTuBZ6I" target="_blank" >Pão de leite</a> 
                              </div>
                         </div>

                         <div className="CardDePanificacao">
                         <img className="imgReceita" src={PaoFrances} alt='Footruck'/>
                              <div className="ContainerImg">
                         <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=LOVa5UgMffc" target="_blank" >Pão francês</a> 
                              </div>
                         </div>
                    </div>


                    <div className="ContainerSalgado">

                         <div className="TituloSalgado">
                              <h2> Salgados </h2>
                         </div>

                         <div className="ContainerSalgado">
                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={Italiano} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=6ffPBGwcv-8" target="_blank" >Italiano</a> 
                                   </div>
                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={Enroladinho} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=x7CJLs8wwrg" target="_blank" >Enroladinho de salsicha</a> 
                                   </div>
                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={PastelSim} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=1icfZ96PlMw" target="_blank" >Pastel simples</a> 
                                   </div>
                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={EsfihaFechada} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=-5MLc_HtmUI" target="_blank" >Esfiha de carne fechada</a> 
                                   </div>
                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={RisoleCarne} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=T2zk4C4G1xk" target="_blank" >Risole de carne moída</a> 
                                   </div>
                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={CroqueteCarne} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=Pp9v4tjcF0E" target="_blank" >Croquete de carne moída</a> 
                                   </div>
                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={Coxinha} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=0QmeCM2x9Mo" target="_blank" >Coxinha</a> 
                                   </div>

                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={Quibe} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=Pf0sgMLVNDw" target="_blank" >Quibe frito</a> 
                                   </div>

                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={Bolinha} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=NDHIQSGzOZU" target="_blank" >Bolinha de queijo</a> 
                                   </div>

                              </div>

                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={PaoQj} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=gphdJnI8yag" target="_blank" >Pão de queijo</a> 
                                   </div>

                              </div>


                              <div className="CardDePanificacao">
                              <img className="imgReceita" src={Croquete} alt='Footruck'/>
                                   <div className="ContainerImg">
                              <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=6B2608zuFtc" target="_blank" >Croquete de frango</a> 
                                   </div>

                              </div>
                         </div>

                    </div>
               </div>


          </div>
     )
};