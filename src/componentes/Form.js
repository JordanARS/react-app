import * as React from 'react';
import {Link} from 'react-router-dom'

export default function Form(){
    return(
        
        <form className='px-10 py-20 rounded-e-3xl'>
            
            <h1 className='text-5xl text-white font-semibold'>Bienvenido</h1>
            <p className='font-medium text-lg text-gray-200 mt-4'>
                ¡Bienvenido! Por favor ingrese sus datos</p>

            <div className='mt-5'>
                <div>
                    <label className='text-lg text-white font-medium'>Correo</label>
                    <input className='w-full border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]' placeholder='Ingrese su correo'/>
                </div>
                
                <div className="mt-4">
                    <label className='text-lg text-white font-medium'>Contraseña</label>
                    <input className='w-full border border-gray-500 text-white rounded-xl p-3 mt-1 bg-[#1D2432]' placeholder='Ingrese su contraseña' type='password'/>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    
                    <button className='font-medium text-sky-300 ' type="">¿Ha olvidado su contraseña?</button>
                </div>
                <div className='mt-6 flex flex-col gap-y-4'>
                    
                    <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 bg-indigo-300 font-semibold text-lg text-center rounded-xl' to={"/contenido"}>Ingresar</Link>
                    

                </div>
            </div>  
        </form>
    );
}