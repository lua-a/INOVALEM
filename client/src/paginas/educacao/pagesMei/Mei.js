import React from "react";
import NavBarEd from "../componentEd/Nav.Bar";

import MeiEd from '../imgEd/Mei.jpg'
import valorMei from '../imgEd/valorMei.jpg'
import Como from '../imgEd/comoF.jpg'
import Declaracao from '../imgEd/declaracao.jfif'
import beneficios from '../imgEd/beneficios.jpg'
import Deveres from '../imgEd/deveres.jpg'
import Fraude from '../imgEd/fraude.jpg'
import Negocio from '../imgEd/negocio.jpg'
import Baixa from '../imgEd/baixa.jpg'
import Das from '../imgEd/das.jpg'


import '../estilosEd/MeiEd.css'
import SideBar from "../../../componentes/SideBar/SideBar";

export const Mei = () => {
     return (
          <div className="MeiEducacao">
               <NavBarEd />
               <SideBar />
               <section className="secaoTxtMei">
                    <h1 className="txtBemVindoMei">
                         Microempreendedor
                    </h1>

                    <div className="containerExplicacao">
                         <p className="txtexpli">
                              Essa área foi pensada para o Microempreendedorque ainda tem dúvidas em relação a como emitir notas, como ser e abrir uma conta mei e muito mais!
                         </p>
                    </div>
               </section>

               <div className="ConteudoMei">
                    <div className="ContainerMei">
                         <div className="TituloMei">
                              <h2>Para Microempreendedores</h2>
                         </div>

                         <div className="ContainerMei">
                              <div className="CardMei ">
                                   <img className="imgReceita" src={MeiEd} alt='Microempreendedor' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/embed/wMUS4gGklgY" target="_blank" >Como abrir um Mei</a>


                                   </div>
                              </div>

                              <div className="CardMei">
                                   <img className="imgReceita" src={valorMei} alt='Microempreendedor' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=QdaMvcEYRCw" target="_blank" >Qual valor para ser Mei</a>


                                   </div>
                              </div>

                              <div className="CardMei ">
                                   <img className="imgReceita" src={Como} alt='Microempreendedor' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=ZeirpO8S-B4" target="_blank" >Como se formalizar</a>


                                   </div>
                              </div>




                              <div className="CardMei">
                                   <img className="imgReceita" src={Declaracao} alt='Microempreendedor' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=CDTNztUs8uc" target="_blank" >Declaração anual</a>


                                   </div>
                              </div>
                         </div>


                         < div className="ConteudoIdv">


                              <div className="ContainerIdv">

                                   <div className="CardMei">
                                        <img className="imgReceita" src={beneficios} alt='Microempreendedor' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/embed/UGfy7PVlk7Q" target="_blank" >Benefícios Mei</a>

                                        </div>
                                   </div>

                                   <div className="CardMei">
                                        <img className="imgReceita" src={Deveres} alt='Microempreendedor' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/embed/vmCa7ZzpxJ8" target="_blank" >Quais são as atividades permitidas pelo Mei</a>

                                        </div>
                                   </div>

                                   <div className="CardMei">
                                        <img className="imgReceita" src={Fraude} alt='Microempreendedor' />

                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/embed/2mEwx06XuFY" target="_blank" >Cuidando das fraudes</a>

                                        </div>
                                   </div>

                                   <div className="CardMei">
                                        <img className="imgReceita" src={Negocio} alt='Microempreendedor' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/embed/sdDRjCz18gk" target="_blank" >Como funciona os tipos de negócio para Meis</a>

                                        </div>
                                   </div>

                                   <div className="CardMei">
                                        <img className="imgReceita" src={Baixa} alt='Microempreendedor' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/embed/eDRM3WQOer8" target="_blank" >Aprenda a dar baixa </a>

                                        </div>
                                   </div>

                                   <div className="CardMei">
                                        <img className="imgReceita" src={Das} alt='Microempreendedor' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href="  https://www.youtube.com/embed/QZ2I4tUcf8A" target="_blank" >Como geras DAS</a>

                                        </div>
                                   </div>

                              </div>
                         </div>

                    </div>
               </div>
          </div>

     );
};