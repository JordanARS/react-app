import React, {useState} from "react";
import { RiQrScan2Fill, RiUser6Fill, RiLogoutBoxLine, RiChatHistoryFill, RiWindyFill, RiMenuFoldLine, RiMenuUnfoldLine, RiNotification3Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill, RiAddCircleLine } from "react-icons/ri";

export default function Dashboard () {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () =>{
    setSidebar(!sidebar)
  }
  return (
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
      {/* Barra Lateral Izquierda */}
      <div className={`fixed border-e border-gray-600 lg:static w-[60%] md:w-[40%] lg:w-full top-0 z-50 transition-all ${sidebar ? "-left-0":"-left-full"} h-full w-full overflow-y-scroll bg-[#0F1523] col-span-1 p-4`}>
          {/* Logo */}
        <div className='text-center p-6'>
          <h1 className='font-bold tracking-[4px] text-2xl font-serif text-white'>Start Alarm</h1>
          
        </div>
        <div className='flex flex-col justify-between h-[600px]'>

          {/* Menu */}
        
          <nav>
            <ul>
              <li>
                <a href='/dashboard' className='flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white'>
                  <RiQrScan2Fill />
                  Dashboard
                </a>
              </li>
              <li>
                <a href='/perfil' className='flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white'>
                  <RiUser6Fill />
                  Perfil
                </a>
              </li>
              <li>
                <a href='/historial' className='flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white'>
                  <RiChatHistoryFill />
                  Historial
                </a>
              </li>
              <li>
              <a href='/form' className='flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white'>
                  <RiLogoutBoxLine />
                  Salir
                </a>
              </li>
            </ul>
          </nav>
          {/* Imagen */}
          {/* <div className='flex flex-col'>
            <img src='/imagenes/ImagenDashboard.svg' alt="Imagen"/>
          </div> */}

        
        </div>
      </div>  
      {/* Boton devuelta a barra izquierda */}
      <button className='block lg:hidden fixed bottom-2 right-2 bg-indigo-300 text-white rounded-fulzl text-4xl p-3' 
      onClick={handleSidebar}>
        {sidebar ? <RiMenuUnfoldLine/> : <RiMenuFoldLine />}
        
      </button>
      {/* Contenido */}
      <div className='bg-[#111827] col-span-5 '>
        {/* Cabecera */}
        <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-5 w-full border-b border-gray-700">
          {/* Buscador */}
          <form className="w-full md:w-[50%] order-1 md:-order-none">
            <div className="relative">
              <RiSearch2Line className="text-white absolute left-2 top-3"/>
              <input type="search" className="bg-[#111827] py-2 px-8 pr-4 rounded-lg outline-none text-white w-full" placeholder="Buscar..."/>
            </div>
          </form>
          {/* Notificaciones */}
          <nav className="w-full md:w-[50%] flex justify-center md:justify-end">
            <ul className="flex items-center gap-5">
              <li>
                <a href="/notificaciones" className="relative">
                  <RiNotification3Line className="text-2xl text-white"/>
                  <RiCheckboxBlankCircleFill className="absolute right-0 -top-1 text-xs text-red-500"/>
                </a>
              </li>   
              <li>
                <a href="/perfiles" className="flex items-center gap-1 text-white">
                  Sara del Real
                  <RiArrowDownSLine />
                </a>
              </li>            
            </ul>
          </nav>
        </header>
        
          {/* Titulo */}
          <div className="border-b border-gray-600">
            <h1 className="flex text-white text-3xl font-semibold pl-6 mt-3 mb-4">Contenido</h1>
          </div>
          {/* Contenido */}
        <div className="bg-[#111827] p-4 ">
          {/* <div>
            <button className="flex">
            < RiAddCircleLine/>
            Añadir
            </button>
          </div> */}
          {/* Resultados y Fechas */}
          <div className="flex items-center justify-between">
            <p className="p-4 text-gray-300">Se han encontrado <span className="text-indigo-500 font-bold">3</span> resultados
            </p>
            <p className="flex items-center gap-2 p-4 text-gray-300 hover:cursor-pointer">
              Ordenar por <span className="text-indigo-500 font-bold"> Fecha</span>
              <RiArrowDownSLine/>
            </p>
          </div>
            
          {/* Informacion de Fechas */}
          <div href="/historial" className="flex flex-col md:flex-row border-2 border-transparent hover:border-gray-600 bg-[#1F2937] mb-5 pl-4 rounded-3xl p-4 shadow-lg transition-all">
            {/* Titulo y texto */}
            <div className="w-full md:w-[80%]">
              <h1 className="text-2xl text-white font-semibold font-serif mb-4">Titulo</h1>            
              <input className="bg-[#1F2937] text-white border-b p-4 w-[80%] rounded-lg outline-none mb-2" placeholder="Ingresa la información necesaria"></input>
            </div>
            {/* Fechas a la derecha */}
            <div className="w-full md:w-[20%] flex flex-col items-end">
              <h2 className="text-2xl text-gray-300 mb-4 ">17/04/2023</h2>
              <p className="text-gray-200">Hace 2 días</p>
            </div>
          </div>
          <div href="/historial" className="flex flex-col md:flex-row border-2 border-transparent hover:border-gray-600 bg-[#1F2937] mb-5 pl-4 rounded-3xl p-4 shadow-lg transition-all">
            {/* Titulo y texto */}
            <div className="w-full md:w-[80%]">
              <h1 className="text-2xl text-white font-semibold font-serif mb-4">Titulo</h1>            
              <input className="bg-[#1F2937] text-white border-b p-4 w-[80%] rounded-lg outline-none mb-2" placeholder="Ingresa la información necesaria"></input>
            </div>
            {/* Fechas a la derecha */}
            <div className="w-full md:w-[20%] flex flex-col items-end">
              <h2 className="text-2xl text-gray-300 mb-4 ">17/04/2023</h2>
              <p className="text-gray-200">Hace 2 días</p>
            </div>
          </div>
          <div href="/historial" className="flex flex-col md:flex-row border-2 border-transparent hover:border-gray-600 bg-[#1F2937] mb-5 pl-4 rounded-3xl p-4 shadow-lg transition-all">
            {/* Titulo y texto */}
            <div className="w-full md:w-[80%]">
              <h1 className="text-2xl text-white font-semibold font-serif mb-4">Titulo</h1>            
              <input className="bg-[#1F2937] text-white border-b p-4 w-[80%] rounded-lg outline-none mb-2" placeholder="Ingresa la información necesaria"></input>
            </div>
            {/* Fechas a la derecha */}
            <div className="w-full md:w-[20%] flex flex-col items-end">
              <h2 className="text-2xl text-gray-300 mb-4 ">17/04/2023</h2>
              <p className="text-gray-200">Hace 2 días</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

