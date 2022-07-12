import React from "react";
import NavBarEd from "../componentEd/Nav.Bar";
import CarneAssada from '../imgEd/carneAssada.jpg'
import MacarraoChapa from '../imgEd/macarraoChapa.jpg'
import SanduicheSalmao2 from '../imgEd/sanduicheSalmao2.jpg'
import SeteBar from '../imgEd/seteBar.jpg'
import Polpetone from '../imgEd/polpetone3.jpg'
import Jambalaya from '../imgEd/jambalaya.jpg'
import AprendaHam from '../imgEd/aprendaHam2.jpg'
import '../estilosEd/Foodtruck.css'
import SideBar from "../../../componentes/SideBar/SideBar";

export const Foodtruck = () =>{

    return(

    <div className="Foodtrucks">
         <NavBarEd />
          <SideBar />

         <section className="secaoTxtFoodtruck">
          <h1 className="txtBemVindoFoodtruck">
                Foodtruck´s
          </h1>

            <div className="containerExplicacaoFoodtruck">
             <p className="txtexpliFoodtruck">
                 Na nossa visão de futuro, pretendemos fazer uma feira com Food containers, porém já estamos pesquisando receitas para colocar na nossa plataforma para que quando nosso evento acontecer você já estar preparado(a)! <br/>
                 <br/>
                 Nossa página ainda está em desenvolvimento, em breve novos conteúdos com melhor qualidade vão esta disponíveis em breve
              </p>
          </div>
         </section>

< div className="ConteudoFoodtruck"> 
      <div className= "TituloFoodtruck">
              <h2> Foodtrucks</h2>
         </div>
        

      <div className="ContainerFoodtruck">

       <div className="CardDeFoodtruck">
       <img className="imgReceita" src={CarneAssada} alt='Footruck'/>
           <div className="ContainerImg">
           <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=4HBkXetimr0" target="_blank" >Protos de carne assada</a>
           </div>
      </div>

      <div className="CardDeFoodtruck">
      <img className="imgReceita" src={MacarraoChapa} alt='Foodtruck'/>
           <div className="ContainerImg">
           <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=VwySg41N_jw" target="_blank" >Macarrão na chapa</a> 
           </div>
      </div>

      <div className="CardDeFoodtruck">
      <img className="imgReceita" src={SanduicheSalmao2} alt='Foodtruck'/>
           <div className="ContainerImg">
           <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=iTj_eWfGFzI" target="_blank" >Hamburguer de salmão </a> 
           </div>
        </div>

      <div className="CardDeFoodtruck">
      <img className="imgReceita" src={SeteBar} alt='Foodtruck'/>
           <div className="ContainerImg">
           <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=1246prZBpR4" target="_blank" >7 comidinhas de bar </a>
           </div>
      </div>

        <div className="CardDeFoodtruck">
        <img className="imgReceita" src={Polpetone} alt='Foodtruck'/>
           <div className="ContainerImg">
           <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=hKJE0Xw3kdE" target="_blank" >Polpetone</a> 
           </div>
      </div>

      <div className="CardDeFoodtruck">
      <img className="imgReceita" src={Jambalaya} alt='Foodtruck'/>
           <div className="ContainerImg">
           <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=pBe0DohhcA8" target="_blank" >Jambalaya</a>
           </div>
      </div>

      <div className="CardDeFoodtruck">
      <img className="imgReceita" src={AprendaHam} alt='Foodtruck'/>
           <div className="ContainerImg">
           <a  className='linkTopico'  href=" https://www.youtube.com/watch?v=8RiemKpfKIs" target="_blank" >Aprenda a fazer hambúguer </a>
           </div>
      </div>
</div>

   
  
    </div>
</div>

        
 );
};