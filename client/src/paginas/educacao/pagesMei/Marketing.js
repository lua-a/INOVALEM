import React from "react";
import NavBarEd from "../componentEd/Nav.Bar";

import Texto from '../imgEd/texto.jpg'
import MarketingDigital from '../imgEd/marketingDigital.jpg'
import Clientes from '../imgEd/clientes.jpg'
import Bombar from '../imgEd/bombar.jpg'
import Comecar from '../imgEd/comecar.jpg'
import IdvEd from '../imgEd/idvEd.jpg'
import Duvida from '../imgEd/duvida.jpg'
import Paleta from '../imgEd/paleta.jpg'

import '../estilosEd/Marketing.css'
import SideBar from "../../../componentes/SideBar/SideBar";

export const Marketing = () => {
  return (

    <div className="MarketingEducacao">
      <NavBarEd />
      <SideBar />



      <section className="secaoTxtMarketing">
        <h1 className="txtBemVindoMarketing">
          Marketing digital
        </h1>

        <div className="containerExplicacao">
          <p className="txtexpli">
            Luz, câmera e ação! <br />
            Nossa área de Marketing digital ensina você a como fazer divulgações da sua loja <br /> e do seu produto de forma eficaz e produtiva!
          </p>

        </div>
      </section>

      <div className="ConteudoMarketing">

        <div className="ContainerDivulgação">
          <div className="TituloMarketing">
            <h2>Como divulgar</h2>
          </div>

          <div className="ContainerMarketing">
            <div className="CardDeGestao ">
              <img className="imgReceita" src={Texto} alt='Marketing' />
              <div className="ContainerImg">
                <a className='linkTopico' href=" https://www.youtube.com/watch?v=4arxnvrtWAw" target="_blank" >Como divulgar nas redes sociais</a>
              </div>
            </div>

            <div className="CardDeGestao">
              <img className="imgReceita" src={MarketingDigital} alt='Marketing' />
              <div className="ContainerImg">
                <a className='linkTopico' href=" https://www.youtube.com/watch?v=NbEpbW9cllI" target="_blank" >Vantagens do Marketing digital</a>
              </div>
            </div>

            <div className="CardDeGestao ">
              <img className="imgReceita" src={Clientes} alt='Marketing' />
              <div className="ContainerImg">
                <a className='linkTopico' href=" https://www.youtube.com/watch?v=9U_G4gtMWMM&t=1s" target="_blank" >Como atrair cliente usando rede social</a>
              </div>
            </div>




            <div className="CardDeGestao">
              <img className="imgReceita" src={Bombar} alt='Marketing' />
              <div className="ContainerImg">
                <a className='linkTopico' href=" https://www.youtube.com/watch?v=VcEPt-DGs_8" target="_blank" >Como bombar nas redes sociais</a>
              </div>
            </div>
          </div>


          < div className="ConteudoIdv">
            <div className="TituloIdentidade">
              <h2>Criando identidade visual</h2>
            </div>

            <div className="ContainerIdv">



              <div className="CardDeGestao">
                <img className="imgReceita" src={Comecar} alt='Marketing' />
                <div className="ContainerImg">
                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=vJxzZiXOPyE" target="_blank" > Onde começar na identidade visual </a>


                </div>
              </div>

              <div className="CardDeGestao">
                <img className="imgReceita" src={IdvEd} alt='Marketing' />
                <div className="ContainerImg">
                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=TJy07wmtkX0" target="_blank" >O que é identidade visual</a>


                </div>
              </div>

              <div className="CardDeGestao">
                <img className="imgReceita" src={Duvida} alt='Marketing' />
                <div className="ContainerImg">
                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=WaBRBpDW4Ng" target="_blank" >Branding, Marca e identidade visual</a>


                </div>
              </div>

              <div className="CardDeGestao">
                <img className="imgReceita" src={Paleta} alt='Marketing' />
                <div className="ContainerImg">
                  <a className='linkTopico' href=" https://www.youtube.com/watch?v=Q-sqHrQcuP4" target="_blank" >Escolhendo paleta de cores</a>


                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  );
};