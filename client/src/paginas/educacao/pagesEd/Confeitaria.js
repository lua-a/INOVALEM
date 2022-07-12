import React from "react";
import '../estilosEd/ConfeitariaEd.css'
import NavBarEd from "../componentEd/Nav.Bar";

import Bolo from '../imgEd/bolosimples2.jpg'
import BoloLaranja from '../imgEd/boloLaranja.webp'
import BoloBanana from '../imgEd/bolobanana.jpg'
import BoloMacaxeira from '../imgEd/boloMacaxeira.jpg'
import BoloLimao from '../imgEd/boloLimão.jpg'
import BoloLaranja2 from '../imgEd/boloLaranja2.jpg'
import BoloCenoura from '../imgEd/bolocenoura.webp'
import MousseMaracuja from '../imgEd/moussemaracuja.webp'
import MousseLimao from '../imgEd/mousselimao.webp'
import MousseChocolate from '../imgEd/moussechocolate.jpg'
import MousseMorango from '../imgEd/moussemorango.jpg'
import MousseManga from '../imgEd/moussemanga.jpg'
import MousseNinho from '../imgEd/mousseLeiteNinho.jpg'
import MousseAbacaxi from '../imgEd/mousseabacaxi.jpg'
import RecheioNinho from '../imgEd/recheioNinho.jpg'
import RecheioBriga from '../imgEd/recheioBriga.webp'
import RecheioCoco from '../imgEd/recheioCoco.jpg'
import RecheioMorango from '../imgEd/recheioMorango.jpg'
import RecheioOreo from '../imgEd/recheioOreo.jpg'
import Geleia from '../imgEd/geleia.webp'
import BrigadeiroOvomaltine from '../imgEd/brigadeiroOvomaltine.jpg'
import BrigadeiroMaracuja from '../imgEd/brigadeiroMaracuja.jpg'
import BrigadeiroAmendoim from '../imgEd/brigadeiroAmendoim.jpg'
import BrigadeiroBeijinho from '../imgEd/brigadeiroBeijinho.jpg'
import TrufaBeijinho from '../imgEd/trufaBeijinho.jpg'
import OlhoDeSogra from '../imgEd/olhoDeSogra.jpg'
import CamafeuNozes from '../imgEd/camafeuNozes.jpg'
import SideBar from "../../../componentes/SideBar/SideBar";


export const Confeitaria = () => {
     return (

          <div className="confeitariaEd">
               <NavBarEd />

               <section className="secaoTxtConfeitaria">
                    <div className="">
                         <SideBar />
                    </div>
                    <h1 className="txtBemVindoConfeitaria">
                         Confeitaria
                    </h1>

                    <div className="containerExplicacaoConfeitaria">
                         <p className="txtexpliConfeitaria">
                              Nossa área de confeitaria tem os melhores conteúdos pra você aprender a fazer bolos, recheios e mousses e muito mais!
                         </p>
                    </div>
               </section>

               <div className="ConteudoConfeitaria">

                    <div className="TituloConfeitaria ">
                    </div>
                    <div className="ContainerConfeitaria">

                         <div className="ContainerConfeitaria">
                              <div className="CardDeConfeitaria">
                                   <img className="imgReceita" src={Bolo} alt='bolos' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=hRnb2U8PbOo" target="_blank" >Bolo simples</a>
                                   </div>
                              </div>

                              <div className="CardDeConfeitaria">
                                   <img className="imgReceita" src={BoloLaranja} alt='bolos' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=vQNEvrI8p7M" target="_blank" >Laranja com glacê</a>
                                   </div>
                              </div>

                              <div className="CardDeConfeitaria ">
                                   <img className="imgReceita" src={BoloBanana} alt='bolos' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=JrvZo9uXDrk" target="_blank" >Banana caramelizado</a>
                                   </div>
                              </div>




                              <div className="CardDeConfeitaria">
                                   <img className="imgReceita" src={BoloMacaxeira} alt='bolos' />
                                   <div className="ContainerImg">
                                        <a className='linkTopico' href=" https://www.youtube.com/watch?v=DwfTDHCVgQ8" target="_blank" >Bolo de macaxeira</a>
                                   </div>
                              </div>
                         </div>

                         <div className="CardDeConfeitaria">
                              <img className="imgReceita" src={BoloLimao} alt='bolos' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=8ZgltBo_ebA" target="_blank" >Bolo de limão</a>
                              </div>
                         </div>

                         <div className="CardDeConfeitaria">
                              <img className="imgReceita" src={BoloLaranja2} alt='bolos' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=l1P37BgFt7s" target="_blank" >Bolo de laranja</a>
                              </div>
                         </div>

                         <div className="CardDeConfeitaria">
                              <img className="imgReceita" src={BoloCenoura} alt='bolos' />
                              <div className="ContainerImg">
                                   <a className='linkTopico' href=" https://www.youtube.com/watch?v=vVnrVQElpqM" target="_blank" >Bolo de cenoura</a>
                              </div>
                         </div>


                         < div className="ConteudoConfeitaria">
                              <div className="TituloConfeitaria ">
                                   <h2> Mousses</h2>
                              </div>


                              <div className="ContainerConfeitaria">

                                   <div className="CardDeConfeitaria">
                                        <img className="imgReceita" src={MousseMaracuja} alt='bolos' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=YdL2Y4LQEmw" target="_blank" >Mousse de maracujá</a>
                                        </div>
                                   </div>

                                   <div className="CardDeConfeitaria">
                                        <img className="imgReceita" src={MousseLimao} alt='bolos' />

                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=QcHEJY2rVZs" target="_blank" >Mousse de limão</a>
                                        </div>
                                   </div>

                                   <div className="CardDeConfeitaria">
                                        <img className="imgReceita" src={MousseChocolate} alt='bolos' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=UYtOwV7T3HM" target="_blank" >Mousse de chocolate</a>
                                        </div>
                                   </div>

                                   <div className="CardDeConfeitaria">
                                        <img className="imgReceita" src={MousseMorango} alt='bolos' />

                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=sLoP_TUnQ2Y" target="_blank" >Mousse de morango</a>
                                        </div>
                                   </div>

                                   <div className="CardDeConfeitaria">
                                        <img className="imgReceita" src={MousseManga} alt='bolos' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=OnwcqvCw1FU" target="_blank" >Mousse de manga</a>
                                        </div>
                                   </div>

                                   <div className="CardDeConfeitaria">
                                        <img className="imgReceita" src={MousseNinho} alt='bolos' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=-AdP9roAPao" target="_blank" >Mousse de leite ninho</a>
                                        </div>
                                   </div>

                                   <div className="CardDeConfeitaria">
                                        <img className="imgReceita" src={MousseAbacaxi} alt='bolos' />
                                        <div className="ContainerImg">
                                             <a className='linkTopico' href=" https://www.youtube.com/watch?v=YgeJ6FPAFUY" target="_blank" >Mousse de abacaxi</a>
                                        </div>
                                   </div>
                              </div>


                              <div className="ContainerConfeitaria">

                                   <div className="TituloConfeitaria">
                                        <h2>Recheios</h2>
                                   </div>

                                   <div className="ContainerConfeitaria">
                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={RecheioNinho} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=233V9MnNnw8" target="_blank" >Recheio de leite ninho</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={RecheioBriga} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=LAqqLjssva0" target="_blank" >Recheio de brigadeiro</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={RecheioCoco} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=SeuHUyg7WVk" target="_blank" >Recheio de prestígio</a>
                                             </div>
                                        </div>



                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={RecheioMorango} alt='bolos' />

                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=C6iVFdBxE5E" target="_blank" >Recheio de morango</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={RecheioOreo} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=xjURMvdtz3c" target="_blank" >Recheio de oreo</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={Geleia} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=yr38czJsf4E" target="_blank" >Geleia de morango</a>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                              <div className="ContainerConfeitaria">

                                   <div className="TituloConfeitaria">
                                        <h2>Doces para festa</h2>
                                   </div>

                                   <div className="ContainerConfeitaria">

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={BrigadeiroOvomaltine} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=vmi5XMgpvwg" target="_blank" >Brigadeiro de ovomaltine</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={BrigadeiroMaracuja} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=InybhM5Q-Rc" target="_blank" >Brigadeiro de maracujá</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={BrigadeiroAmendoim} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=SkPSZ_2InFs" target="_blank" >Brigadeiro de amendoim</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={BrigadeiroBeijinho} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=0piwOtEydE0" target="_blank" >Brigadeiro de beijinho</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={TrufaBeijinho} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=3R9E8PW-ohU" target="_blank" >Trufa de beijinho</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={OlhoDeSogra} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=xhb4_Hbtl9k" target="_blank" >Olho de sogra</a>
                                             </div>
                                        </div>

                                        <div className="CardDeConfeitaria">
                                             <img className="imgReceita" src={CamafeuNozes} alt='bolos' />
                                             <div className="ContainerImg">
                                                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=ZBJvuf2aOPY" target="_blank" >Camafeu de nozes</a>
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