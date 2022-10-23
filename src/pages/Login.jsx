import React from "react";
import Footer_login from "../components/Footer_login";
import Navbar_login from "../components/Navbar_login";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <>
      <Navbar_login />
      <div className="">
        <div className="image_header mb-10 w-36 mx-auto mt-4">
          <img src={logo} alt="" />
        </div>
        <div className="form  w-100 shadow-2xl h-px">
          <form action="" className="flex flex-col justify-center items-center">
            <input
              type="email"
              className="w-56 border-solid border-2 mb-5 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Correo electonico..."
            />
            <input
              type="password"
              className="w-56 mb-10 mt-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
              placeholder="Contraseña..."
            />

            <div className="botones">
              <button className="bg-sky-900 hover:bg-sky-800 text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                Enviar
              </button>
              <button className="bg-sky-900 hover:bg-sky-800  text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                Volver
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer_login />
    </>
  );
};

export default Login;
