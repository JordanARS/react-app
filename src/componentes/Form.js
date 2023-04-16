import * as React from 'react';


export default function Form(){
    return(
        
        <form className='bg-white px-10 py-20 rounded-e-3xl border-2 border-gray-400'>
            
            <h1 className='text-5xl font-semibold'>Bienvenido</h1>
            <p className='font-medium text-lg text-gray-700 mt-4'>
                ¡Bienvenido! Por favor ingrese sus datos</p>

            <div className='mt-5'>
                <div>
                    <label className='text-lg font-medium'>Correo</label>
                    <input className='w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-slate-50' placeholder='Ingrese su correo'/>
                </div>
                
                <div>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input className='w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-slate-50' placeholder='Ingrese su contraseña' type='password'/>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    
                    <button className='font-medium text-sky-500 ' type="">¿Ha olvidado su contraseña?</button>
                </div>
                <div className='mt-6 flex flex-col gap-y-4'>
                    
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 bg-indigo-200 font-semibold text-lg rounded-xl'>Ingresar</button>
                    

                </div>
            </div>  
        </form>
    );
}