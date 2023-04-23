import React from "react";

export default function ModalAddContent ({isVisible, onClose, children}){
    if(!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose()
    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[500px]  flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <div className="p-2 bg-slate-300 rounded-lg ">{children}
                    
                </div>              
            </div>
        </div>
    );
}