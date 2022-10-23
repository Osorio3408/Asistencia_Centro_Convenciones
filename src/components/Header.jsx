import logo from "../assets/logo.png";

const Header = () => {
  let navbar = document.getElementById("navbar");

  const toggle_nav = () => {
    navbar.classList.toggle("hidden");
  };

  // Close menu is window size increases
  window.onresize = () => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth > 1050) {
      navbar.classList.add("hidden");
    }
  };

  return (
    <div>
      <nav class="bg-sky-900 flex text-teal-100 items-center justify-between flex-wrap pb-2 px-5">
        <div className="flex justify-center items-center text-xl  font-semibold">
          <img src={logo} alt="logo" className="mr-5 h-10 " />
          <p>Centro de Convenciones</p>
        </div>

        <div class="block lg:hidden">
          <button
            onClick={toggle_nav}
            class="flex flex-col px-3 py-2 border rounded border-gray-800 hover:text-white hover:border-white">
            <div class="w-6 h-1 bg-white"></div>
            <div class="w-6 h-1 bg-white my-1"></div>
            <div class="w-6 h-1 bg-white"></div>
          </button>
        </div>

        <div
          class="w-full lg:w-auto  lg:items-center text-justify lg:inline-block  hidden"
          id="navbar">
          <div class="lg:flex-grow text-2xl text-center space-x-3">
            <a href="#" class="block lg:inline-block hover:underline mt-4">
              Inicio
            </a>
            <a href="#" class="block lg:inline-block hover:underline mt-4">
              Eventos
            </a>
            <a
              href="/register"
              class="block lg:inline-block hover:underline mt-4 mb-3z">
              Registrarse
            </a>
            <a
              href="/login"
              class="block lg:inline-block hover:underline mt-4 mb-3z">
              Iniciar Sesion
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
