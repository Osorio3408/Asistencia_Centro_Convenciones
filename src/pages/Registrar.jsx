import React from "react";
import Navbar_register from "../components/Navbar_register";
import logo from "../assets/logo.png";
import Footer_register from "../components/Footer_register";

const Registrar = () => {
  return (
    <>
      <Navbar_register />
      <div className="">
        <div className="image_header mt-4 w-36 mx-auto">
          <img src={logo} alt="" />
        </div>
        <div className="form  w-100 shadow-2xl h-px">
          <form action="" className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="w-56    border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su nombre completo"
            />
            <input
              type="text"
              className="w-56    mt-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su correo electronico"
            />
            <input
              type="text"
              className="w-56 mb-4 mt-4      border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Tipo de documento"
            />
            <input
              type="text"
              className="w-56  mb-4      border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese el numero de documento"
            />
            <input
              type="text"
              className="w-56 mb-4   border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su telefono"
            />
            <input
              type="text"
              className="w-56 mb-4   border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Ingrese su contraseña"
            />
            <input
              type="text"
              className="w-56    border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Repetir contraseña"
            />

            <div className="botones">
              <button className="bg-sky-900 hover:bg-sky-800 text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                Enviar
              </button>
              <button className="bg-sky-900 hover:bg-sky-800 text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                Volver
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer_register />
    </>
  );
};

export default Registrar;
