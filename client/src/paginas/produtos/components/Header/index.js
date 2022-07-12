import React from "react";
import './style.css'
import logo from '../../Img/logo.svg'




const Header = () => {
  return (
    <>
      <div className="containerHeader">
        <img className='logo' src={logo} />
        <div class="titulo">
        </div>
      </div>

    </>
  );
};

export default Header;
