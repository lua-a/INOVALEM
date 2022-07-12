export function StepperControl ({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-slate-200 bg-white py-2 px-4 border-2 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#2C67F2] hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Voltar
      </button>

      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-[#FF6F29] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover: hover:text-white border-0"
      >
        {currentStep === steps.length - 1 ? "PRÓXIMO" : "PRÓXIMO"}
      </button>
    </div>
  );
}
