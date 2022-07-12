import React from "react";
import NavBarEd from "../componentEd/Nav.Bar";

import MacarraoPanela from '../imgEd/macarraopanela.jpg'
import MacarraoNinho from '../imgEd/macarraoNinho.webp'
import MacarraoGratinado from '../imgEd/macarraoGratinado.webp'
import MacarraoLinguica from '../imgEd/macarraoLinguica.webp'
import Torta from '../imgEd/tortaCremosa.jpg'
import Lasanha from '../imgEd/lasanha.jpg'

import FricasseFrango from '../imgEd/fricasseFrango.jpg'
import FricasseCarne from '../imgEd/fricasseCarne.webp'
import FricasseBacalhau from '../imgEd/fricasseBacalhau.webp'
import FricasseCamarao from '../imgEd/fricasseCamarao.webp'
import FricasseCarneM from '../imgEd/fricasseCarneMoida.jpg'
import FricasseCarneSol from '../imgEd/fricasseCarneSol.webp'
import FricasseLegume from '../imgEd/fricasseLegume.jpg'

import ArrozLinguica from '../imgEd/arrozLinguica.jpg'
import ArrozCaipira from '../imgEd/arrozCaipira2.webp'
import ArrozCarreteiro from '../imgEd/arrozCarreteiro.jpg'
import ArrozForno from '../imgEd/arrozForno.jpg'
import ArrozCremoso from '../imgEd/arrozCremoso.webp'
import ArrozFrango from '../imgEd/arrozFrango.webp'
import ArrozMar from '../imgEd/arrozMar.webp'

import Feiojada from '../imgEd/feijoada.jpg'
import FeijaoCamarao from '../imgEd/feijaoCamarao.jpg'
import FeijaoCostela from '../imgEd/feijaoCostela.jpg'
import FeijaoVerde from '../imgEd/feijaoVerde.jpg'
import FeijaoSimples from '../imgEd/feijaoSimples.jpg'
import FeijaoTropeiro from '../imgEd/feijaoTropeiro.jpg'
import FeijaoMexicano from '../imgEd/feijaoMexicano.jpg'

import CarneLaranja from '../imgEd/CarneLaranja.jpg'
import CarneSimples from '../imgEd/carneSimples.jpg'
import CarneBatata from '../imgEd/carneBatata.webp'
import Costela from '../imgEd/costela.jpg'
import Bife from '../imgEd/bife.jpg'
import CarneDesfiada from '../imgEd/carneDesfiada.jpg'
import CarnePorco from '../imgEd/carnePorco.jpg'

import Caçarola from '../imgEd/caçarola.jpg'
import Paella from '../imgEd/paella.jpg'
import Espaguete from '../imgEd/espaguete.webp'
import Peixe from '../imgEd/peixe.jpg'
import PeixeCremoso from '../imgEd/peixecremoso.jpg'
import PeixeGrelhado from '../imgEd/peixeGrelhado.jpg'
import PeixeFarofa from '../imgEd/peixeFarofa.jpg'



import '../estilosEd/ComidaEd.css'
import SideBar from "../../../componentes/SideBar/SideBar";

export const Comidas = () => {
     return (

          <div className="comidasEd">

               <section className="secaoTxtComida">
                    <NavBarEd />
                    <SideBar />

                    <h1 className="txtBemVindoComida">
                         Comidas prontas
                    </h1>

                    <div className="containerExplicacaoComida">
                         <p className="txtexpliComida">
                              Nessa área pensamos em colocar comidas prontas para você que faz <br /> apenas entregas com marmitex e para quem ja tem um comércio físico!
                         </p>
                    </div>
               </section>

               <div className="TituloComida ">
                    <h2> Receita de Massa </h2>
               </div>
               <div className="ConteudoComida">

                    <div className="ContainerComida">

                         <div className="ContainerComida">
                              <div className="CardDeComida">
                                   <img className="imgReceita" src={MacarraoPanela} alt='Comidas prontas' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=JMUGThqq7Lg" target="_blank" >Macarrão na panela de pressão</a>
                                   </div>
                              </div>

                              <div className="CardDeComida">
                                   <img className="imgReceita" src={MacarraoNinho} alt='Comidas prontas' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=SLh7XmcAVuI&t=2s" target="_blank" >Ninho com presunto e queijo</a>
                                   </div>
                              </div>

                              <div className="CardDeComida">
                                   <img className="imgReceita" src={MacarraoGratinado} alt='Comidas prontas' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=jfRIXahsFaQ" target="_blank" >Macarrão com frango gratinado</a>
                                   </div>
                              </div>
                         </div>

                         <div className="CardDeComida">
                              <img className="imgReceita" src={MacarraoLinguica} alt='Comidas prontas' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=C3XxduURqS0&t=3s" target="_blank" >Macarrão com linguiça</a>
                              </div>
                         </div>

                         <div className="CardDeComida">
                              <img className="imgReceita" src={Torta} alt='Comidas prontas' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=fMsVrGxR75M&t=1s" target="_blank" >Torta de frango cremosa</a>
                              </div>
                         </div>

                         <div className="CardDeComida">
                              <img className="imgReceita" src={Lasanha} alt='Comidas prontas' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=-17gHiKIUAU&t=1s" target="_blank" >Lansanha bolonhesa ao molho branco</a>
                              </div>
                         </div>


                         < div className="ConteudoComida">
                              <div className="TituloComida ">
                                   <h2>  Receita de Fricassê </h2>
                              </div>


                              <div className="ContainerComida">

                                   <div className="CardDeComida">
                                        <img className="imgReceita" src={FricasseFrango} alt='Comidas prontas' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=3t7lsSE1kY0" target="_blank" >Fricassê de frango</a>
                                        </div>
                                   </div>

                                   <div className="CardDeComida">
                                        <img className="imgReceita" src={FricasseCarne} alt='Comidas prontas' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=4IR0DdqDUrg" target="_blank" >Fricassê de carne</a>
                                        </div>
                                   </div>

                                   <div className="CardDeComida">
                                        <img className="imgReceita" src={FricasseBacalhau} alt='Comidas prontas' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=WaEtKJqD23Q" target="_blank" >Fricassê de bacalhau</a>
                                        </div>
                                   </div>

                                   <div className="CardDeComida">
                                        <img className="imgReceita" src={FricasseCamarao} alt='Comidas prontas' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=uEyQEwG1FJ4" target="_blank" >Fricassê de camarão</a>
                                        </div>
                                   </div>

                                   <div className="CardDeComida">
                                        <img className="imgReceita" src={FricasseCarneM} alt='Comidas prontas' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=IeqUM9jz4u0" target="_blank" >Fricassê de carne moída</a>
                                        </div>
                                   </div>

                                   <div className="CardDeComida">
                                        <img className="imgReceita" src={FricasseCarneSol} alt='Comidas prontas' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=GxOI_SlfoHQ" target="_blank" >Fricassê de carne de sol </a>
                                        </div>
                                   </div>

                                   <div className="CardDeComida">
                                        <img className="imgReceita" src={FricasseLegume} alt='Comidas prontas' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=66lm6Lj2p-E" target="_blank" >Fricassê de legumes</a>
                                        </div>
                                   </div>
                              </div>


                              <div className="ContainerComida">

                                   <div className="TituloComida">
                                        <h2> Receitas de arroz</h2>
                                   </div>

                                   <div className="ContainerComida">

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={ArrozLinguica} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=WFY9OD6-FsE" target="_blank" >Arroz com linguiça</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={ArrozCaipira} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=AntiF_IDQcc" target="_blank" >Arroz caipira</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={ArrozCarreteiro} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=F6FeqV0UCFc" target="_blank" >Arroz carreteiro</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={ArrozForno} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=8Sf4Dog2pfc" target="_blank" >Arroz de forno</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={ArrozCremoso} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=k_ORAYRwWy0" target="_blank" >Arroz cremoso</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={ArrozFrango} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=-ON-YjbsVqM" target="_blank" >Arroz com frango</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={ArrozMar} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=SwffPxUkb3Y" target="_blank" >Arroz com frutos do mar</a>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                              <div className="ContainerComida">

                                   <div className="TituloComida">
                                        <h2> Receitas de feijão</h2>
                                   </div>

                                   <div className="ContainerComida">
                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={Feiojada} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=XSVSbnn1x3M" target="_blank" >Feijoada</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={FeijaoCamarao} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=Kg8HXhHJB54" target="_blank" >Feijão branco com camarão</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={FeijaoCostela} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=Gt8xUCK7KV0" target="_blank" >Feijão branco com costela suína</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={FeijaoVerde} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=NrHI315TXHc" target="_blank" >Feijão verde cremoso</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={FeijaoSimples} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=cNuf6HXk7BU" target="_blank" >Feijão simples</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={FeijaoTropeiro} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=IjrkMoK0GG0" target="_blank" >Feijão tropeiro</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={FeijaoMexicano} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=8nZYWhGhuuM" target="_blank" >Feijão mexicano</a>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                              <div className="ContainerComida">

                                   <div className="TituloComida">
                                        <h2> Receitas de carne</h2>
                                   </div>

                                   <div className="ContainerComida">
                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={CarneLaranja} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=R3vWqDqWO7Y" target="_blank" >Carne de panela com laranja</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={CarneSimples} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=X-Vi2JUdUG8" target="_blank" >Carne de panela simples</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={CarneBatata} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=sJrCuNFS-2s" target="_blank" >Carne de panela com batata</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={Costela} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=sJkI1pwhu30" target="_blank" >Costela</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={Bife} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=vNavk4v4_Ys" target="_blank" >Bife à parmegiana</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={CarneDesfiada} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=XgsDd7FvviQ" target="_blank" >Carne de panela desfiada</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={CarnePorco} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=uu3gEgOiMmQ" target="_blank" >Costela de porco assada</a>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                              <div className="ContainerComida">

                                   <div className="TituloComida">
                                        <h2> Receitas de frutos do mar</h2>
                                   </div>

                                   <div className="ContainerComida">
                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={Caçarola} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=dNwHYrhYS-Y" target="_blank" >Caçarola de frutos do mar</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={Paella} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=5qMAaYt219g" target="_blank" >Paella de frutos do mar</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={Espaguete} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=1zCj7sMmq1s" target="_blank" >Spaghetti com frutos do mar</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={Peixe} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=G_laXaH10AE" target="_blank" >Peixe de forno</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={PeixeCremoso} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=9T_dvsVALkY" target="_blank" >Peixe de forno cremoso</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={PeixeGrelhado} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=69MOPVOfow4" target="_blank" >Peixe grelhado com legumes</a>
                                             </div>
                                        </div>

                                        <div className="CardDeComida">
                                             <img className="imgReceita" src={PeixeFarofa} alt='Comidas prontas' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=hn2h-5C7BX8" target="_blank" >Peixe recheado com farofa</a>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                         </div>
                    </div>
               </div>
          </div>




     );
};