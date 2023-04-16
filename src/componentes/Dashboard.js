import React, {useState} from "react";
import { RiQrScan2Fill, RiUser6Fill, RiLogoutBoxLine, RiChatHistoryFill, RiWindyFill, RiMenuFoldLine, RiMenuUnfoldLine, RiNotification3Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill } from "react-icons/ri";

export default function Dashboard () {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () =>{
    setSidebar(!sidebar)
  }
  return (
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
      {/* Barra Lateral Izquierda */}
      <div className={`fixed lg:static w-[60%] md:w-[40%] lg:w-full top-0 z-50 transition-all ${sidebar ? "-left-0":"-left-full"} h-full w-full overflow-y-scroll bg-slate-200 col-span-1 p-4`}>
          {/* Logo */}
        <div className='text-center p-6'>
          <h1 className='font-bold tracking-[4px] text-2xl font-serif'>Start Alarm</h1>
          
        </div>
        <div className='flex flex-col justify-between h-[600px]'>

          {/* Menu */}
        
          <nav>
            <ul>
              <li>
                <a href='/dashboard' className='flex items-center gap-2 hover:bg-indigo-300 transition-colors mt-5 p-3 font-semibold hover:text-white rounded-lg text-lg text-gray-700'>
                  <RiQrScan2Fill />
                  Dashboard
                </a>
              </li>
              <li>
                <a href='/perfil' className='flex items-center gap-2 hover:bg-indigo-300 transition-colors mt-5 p-3 font-semibold hover:text-white rounded-lg text-lg text-gray-700'>
                  <RiUser6Fill />
                  Perfil
                </a>
              </li>
              <li>
                <a href='/historial' className='flex items-center gap-2 hover:bg-indigo-300 transition-colors mt-5 p-3 font-semibold hover:text-white rounded-lg text-lg text-gray-700'>
                  <RiChatHistoryFill />
                  Historial
                </a>
              </li>
            </ul>
          </nav>
          {/* Imagen */}
          <div className='flex flex-col'>
            <img src='/imagenes/ImagenDashboard.svg' alt="Imagen"/>
            <a href='/form' className='flex items-center gap-2 hover:bg-indigo-300 transition-colors mt-5 p-3 font-semibold hover:text-white rounded-lg text-lg text-gray-700'>
                  <RiLogoutBoxLine />
                  Salir
                </a>
          </div>

        
        </div>
      </div>  
      {/* Boton devuelta a barra izquierda */}
      <button className='block lg:hidden absolute bottom-2 right-2 bg-indigo-300 text-white rounded-full text-4xl p-3' 
      onClick={handleSidebar}>
        {sidebar ? <RiMenuUnfoldLine/> : <RiMenuFoldLine />}
        
      </button>
      {/* Contenido */}
      <div className='bg-white col-span-5'>
        {/* Cabecera */}
        <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-5 w-full">
          {/* Buscador */}
          <form className="w-full md:w-[50%] order-1 md:-order-none">
            <div className="relative">
              <RiSearch2Line className="absolute left-2 top-3"/>
              <input type="search" className="bg-slate-100 py-2 px-8 pr-4 rounded-lg w-full" placeholder="Buscar"/>
            </div>
          </form>
          {/* Notificaciones */}
          <nav className="w-full md:w-[50%] flex justify-center md:justify-end">
            <ul className="flex items-center gap-5">
              <li>
                <a href="/notificaciones" className="relative">
                  <RiNotification3Line className="text-2xl"/>
                  <RiCheckboxBlankCircleFill className="absolute right-0 -top-1 text-xs text-red-500"/>
                </a>
              </li>   
              <li>
                <a href="/perfiles" className="flex items-center gap-1">
                  Sara del Real
                  <RiArrowDownSLine />
                </a>
              </li>            
            </ul>
          </nav>
        </header>
        {/* Contenido */}
        <div className="bg-gray-200 p-4">
          {/* Titulo */}
          <div>
            <h1 className="text-3xl font-semibold pl-3 mb-20">Contenido</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="p-4 text-gray-500">Se han encontrado <span className="text-indigo-500 font-bold">3</span> resultados
            </p>
            <p className="flex items-center gap-2 p-4 text-gray-500 hover:cursor-pointer">
              Ordenar por <span className="text-indigo-500 font-bold"> Fecha</span>
              <RiArrowDownSLine/>
            </p>
          </div>
          {/* Informacion de Fechas */}
          <div className="bg-white py-20 px-10">
            
          </div>
        </div>
      </div>
    </div>
  )
}

