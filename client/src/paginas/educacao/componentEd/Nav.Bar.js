import React from 'react'
import Logo from '../imgEd/logo.svg'


const NavBarEd = () => {

  return (
    <>

      <nav className='NavBarEducacao'>

        <img className='logoEd' src={Logo} alt="Inovalem" />

        <ul className='Nav__list'>

          <li className='NavListItem'>Culinária
            <ul className='NavComDrop'>

              <li><a className='linkTopico' href="/Comidas">Comidas prontas</a> </li>
              <li><a className='linkTopico' href="/Confeitaria">Confeitaria</a></li>
              <li><a className='linkTopico' href="/Foodtruck">Foodtruck´s</a></li>
              <li><a className='linkTopico' href="/Panificacao">Panificação</a></li>
            </ul>
          </li>

          <li className='NavListItem'>Empreendedor
            <ul className='NavComDrop'>

              <li><a className='linkTopico' href="/Meis">Meis</a></li>
              <li><a className='linkTopico' href="/GestaoFinaceira">Gestão Geral</a></li>
              <li><a className='linkTopico' href="/MarketingDigital">Marketing digital</a></li>
            </ul>
          </li>
        </ul>
      </nav>


    </>
  )
}

export default NavBarEd 