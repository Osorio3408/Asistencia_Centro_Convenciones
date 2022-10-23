import React from "react";

const Footer_login = () => {
  return (
    <>
      <footer class="w-full p-4 fixed bottom-0 text-center bg-sky-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-sky-900  ">
        <span class="text-sm text-center justify-center items-center hover:underline text-gray-500 sm:text-center dark:text-teal-100">
          <a href="#">¿Se te olvidó la contraseña?</a>
        </span>
        <ul class="flex flex-wrap items-center mt-3 justify-center text-sm text-gray-500 dark:text-teal-100 sm:mt-0">
          <li>
            <a href="/" class="mr-4 hover:underline md:mr-6 ">
              ¿No tienes cuenta?
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer_login;
