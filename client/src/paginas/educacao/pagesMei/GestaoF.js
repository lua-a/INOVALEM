import React from "react";
import NavBarEd from "../componentEd/Nav.Bar";

import Capital from '../imgEd/capital.jpg'
import Fluxo2 from '../imgEd/fluxo2.jfif'
import Gasto from '../imgEd/gastos.jpg'
import Cotrole from '../imgEd/cotrole.jpg'
import Eficiente from '../imgEd/eficiente.webp'
import Inventario from '../imgEd/inventario.jpg'
import Aumentar from '../imgEd/aumentar.jfif'
import Planejamento from '../imgEd/planejamento.png'
import Gestao2 from '../imgEd/gestao2.jpeg'
import GestaoCrise from '../imgEd/gestaoCrise.webp'
import Estoque from '../imgEd/estoque.jpg'
import Fechamento from '../imgEd/fechamento.webp'

import '../estilosEd/Gestao.css'
import SideBar from "../../../componentes/SideBar/SideBar";

export const Gestao = () => {
     return (

          <div className="GestaoEducacao">
               <NavBarEd />
               <SideBar />

               <section className="secaoTxtGestão">
                    <h1 className="txtBemVindoGestao">
                         Gestão geral
                    </h1>

                    <div className="containerExplicacao">
                         <p className="txtexpli">
                              A área de gestão foi pensada para que o empreendedor possa conseguir melhorar sua gestão financeira de uma forma compreensivel e de fácil acesso.
                         </p>

                    </div>
               </section>

               <div className="ConteudoGestão">
                    <div className="TituloGestao">
                         <h2>Gestão de negócios</h2>
                    </div>

                    <div className="ContainerGestao">
                         <div className="CardDeGestao ">
                              <img className="imgReceita" src={Capital} alt='Gestão' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=z50quCqt0Xs" target="_blank" >Capital de giro e como calcular</a>

                              </div>
                         </div>

                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Fluxo2} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href="  https://www.youtube.com/watch?v=oZNCKXeyQs0" target="_blank" >Fluxo de caixa e como fazer</a>

                              </div>
                         </div>

                         <div className="CardDeGestao ">
                              <img className="imgReceita" src={Gasto} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=KG6mQCbRau4" target="_blank" >Separando gastos</a>

                              </div>
                         </div>




                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Cotrole} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=H5O-BHmkUh4" target="_blank" >Boas práticas para o controle de estoque</a>


                              </div>
                         </div>

                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Eficiente} alt='Microempreendedor' />

                              <div className="ContainerImg">
                                   <a className='linkTopico' href="  https://www.youtube.com/watch?v=P68CpNkCIbA" target="_blank" >Controle de estoque eficiente</a>


                              </div>
                         </div>

                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Inventario} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=iNW0Jluu31Q" target="_blank" > Fazendo o inventário da sua empresa</a>


                              </div>
                         </div>

                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Aumentar} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=nimtPXbfddE" target="_blank" >Como aumentar o lucro da sua empresa</a>


                              </div>
                         </div>

                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Planejamento} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=HnJxyS801ro" target="_blank" >Planejamento financeiro básico</a>


                              </div>
                         </div>


                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Gestao2} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=YhK0jVYq4IY" target="_blank" >Dicas para gestão financeira</a>


                              </div>
                         </div>

                         <div className="CardDeGestao">
                              <img className="imgReceita" src={GestaoCrise} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=pgjN9LFXGKo" target="_blank" >Gestão de crise</a>


                              </div>
                         </div>

                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Estoque} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=_aQf-tKNrTs" target="_blank" >Gestão de compras e estoque</a>


                              </div>
                         </div>

                         <div className="CardDeGestao">
                              <img className="imgReceita" src={Fechamento} alt='Microempreendedor' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=9mGtyBUVZX8" target="_blank" >Como fechar o caixa ao final do dia</a>


                              </div>
                         </div>


                    </div>
               </div>

          </div>




     );

};