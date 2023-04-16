import * as React from 'react';
import { RiQrScan2Fill, RiUser6Fill, RiLogoutBoxLine, RiChatHistoryFill, RiWindyFill } from "react-icons/ri";

export default function Dashboard () {

 
  return (
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
      {/* Barra Lateral Izquierda */}
      <div className='fixed lg:static top-0 left-0 h-full w-full overflow-y-scroll bg-slate-200 col-span-1 p-4'>
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
      {/* Contenido */}
      <div className='bg-white col-span-5'>Hola2</div>
    </div>
  )
}

