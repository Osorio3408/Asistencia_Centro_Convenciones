import logo from '../assets/logo.png'

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
        <nav
       class="bg-sky-700 flex text-white items-center justify-between flex-wrap pb-2 px-5"
     >
   
       <div>
         <img src={logo} alt="logo" className='mr-5 h-10' />
       </div>
       
       <div class="block lg:hidden">
         <button
           onclick="toggle_nav()"
           class="flex flex-col px-3 py-2 border rounded border-gray-800 hover:text-white hover:border-white"
         >
           <div class="w-6 h-1 bg-white"></div>
           <div class="w-6 h-1 bg-white my-1"></div>
           <div class="w-6 h-1 bg-white"></div>
         </button>
       </div>
 
     
       <div
         class="w-full lg:w-auto block lg:flex lg:items-center lg:inline-block  hidden"
         id="navbar"
       >
         <div class="lg:flex-grow text-2xl text-center space-x-3">
           <a href="#" class="block lg:inline-block hover:text-green-400 mt-4">
             Home
           </a>
           <a href="#" class="block lg:inline-block hover:text-green-400 mt-4">
             Events
           </a>
           <a
             href="#"
             class="block lg:inline-block hover:text-green-400 mt-4 mb-3z"
           >
             Register
           </a>
           <a
             href="#"
             class="block lg:inline-block hover:text-green-400 mt-4 mb-3z"
           >
             Login
           </a>
         
         </div>
       </div>
     </nav>
    </div>
  )
}

export default Header