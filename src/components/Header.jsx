import logo from '../assets/logo.png'
import { useState } from 'react'


const Header = () => {
  let Links =[
    {name:"Inicio",link:"/"},
    {name:"Registro",link:"/"},
    {name:"Iniciar Sesión",link:"/"},
    
    
  ];
  let [open,setOpen]=useState(false)
  return (
    <div className=' shadow-md w-full fixed top-0 left-0 bg-sky-800'>
      <div className=' md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className=' className="flex justify-center text-xl  font-semibold" cursor-pointer flex items-center'>
          <span className=' mr-1 pt-2'>
            <img src={logo} alt="logo" className=' w-20 h-20' />
          </span>
         <p className=''> Centro de Convenciones </p>
        </div>
        <div onClick={() =>setOpen(!open)} className=' text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close': 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-sky-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-lime-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Header