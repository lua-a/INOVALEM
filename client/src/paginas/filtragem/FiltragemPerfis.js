import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../precificacao/api";
import { UseContextProvider } from "./contexts/StepperContext";

import FiltragemLogo from "./imgs-filtragem/FiltragemLogo.svg"
import "../filtragem/filtragem.css"
import { Stepper } from "./components/Stepper";
import { StepperControl } from "./components/StepperControl";



export function Filtragem() {

  const [currentStep, setCurrentStep] = useState(1);

  const [cpf, setCpf] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [holerite, setHolerite] = useState("");

  const [genero, setGenero] = React.useState("");  
  console.log(genero)

  const handleAdicionar = () => {
    const dados = {
      cpf: cpf,
      genero: genero,
      dataNasc: dataNasc,
      holerite: holerite,
    }
    console.log(dados)
    const response = api.post('/filtragem', dados)
  };

  const steps = [
    "CPF",
    "DATA DE NASCIMENTO",
    "GÊNERO",
    "COMPROVAÇÃO",
    "CONCLUSÃO",
  ];

  const displayStep = (step) => {
    switch (step) {

  //------------------------------------------- CPF ----------------------------------------------

      case 1:
        return (
          <div className="flex flex-col">
            <div className="mx-2 w-full flex-1">
              <div className="mt-3 h-6 text-sm font-bold uppercase leading-8 text-[#2C67F2]">
                DIGITE SEU CPF
              </div>
              <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <input
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                  name="cpf"
                  type="number"
                  pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                  placeholder=".../.../...-.."
                  required
                className="w-full appearance-none p-2 px-2 text-gray-800 rounded outline-none"
                />
              </div>
            </div>
          </div>
        )

  //------------------------------------------- DATA NASCIMENTO ----------------------------------------------

      case 2:
        return (
          <div className="flex flex-col ">
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-[#2C67F2] text-sm leading-8 uppercase">
                DATA DE NASCIMENTO
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={(e) => setDataNasc(e.target.value)}
                  value={dataNasc}
                  name="data"
                  type="date"
                  className="p-2 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
          </div>
        )

  //------------------------------------------- GENERO ----------------------------------------------

      case 3:
        return (
          <div className="flex flex-col ">

          <div className="font-bold h-6 mt-3 text-[#2C67F2] text-sm leading-8 uppercase">
            GÊNERO
          </div>
    
          <select value={genero} onChange={e => setGenero(e.target.value)} className="bg-white my-2 p-1 flex border border-gray-200 rounded" name="cars" id="cars">
            <option value="selecionar"> selecionar </option>
            <option value="masculino">masculino</option>
            <option value="feminino"> feminino </option>
            <option value="não-binário"> não-binário </option>
            <option value="prefiro não dizer"> prefiro não dizer </option>
          </select>
        </div>
        )
  
  //------------------------------------------- HOLERITE ----------------------------------------------

      case 4:
        return (
          <div className="flex flex-col ">
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-[#2C67F2] text-sm leading-8 uppercase">
                    ANEXE AQUI SEU HOLERITE OU DECLARAÇÃO DE RENDA
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={(e) => setHolerite(e.target.value)}
                        value={holerite}
                        name="address"
                        placeholder="Address"
                        type="file"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
          </div>
        )

  //------------------------------------------- FINAL ----------------------------------------------

      case 5:
        return (<div className="container md:mt-10">
        <div className="flex flex-col items-center">
          <div className="wrapper">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
  
          <div className="mt-3 text-xl font-semibold uppercase text-[#FF6F29]">
            PARABÉNS!
          </div>
          <div className="text-lg font-semibold text-gray-500 mb-4">
            Sua conta foi criada.
          </div>
          <Link to="/login">
            <button onClick={handleAdicionar} className="h-10 px-5 text-[#FF6F29] transition-colors bg-transparent duration-150 border border-[#FF6F29] rounded-lg focus:shadow-outline hover:bg-[#FF6F29] hover:text-green-100 cursor-pointer">
              Entrar
            </button>
          </Link>
        </div>
      </div>)
      default:
    }
  };


  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (

    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2 my-8 p-5">

      <div className="flex justify-center">
        <img className="w-1/4" src={FiltragemLogo} />
      </div>
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

