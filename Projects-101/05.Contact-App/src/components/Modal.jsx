import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from 'react-dom'

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
        {isOpen && (
            <>
                <div className="relative z-50 m-auto min-h-[200px] max-w-[380px] bg-white p-4">
                    <div className="flex justify-end">
                        <AiOutlineClose onClick={onClose} className="self-end text-2xl cursor-pointer"/>
                    </div>
                    {children}
                </div>
                <div onClick={onClose} className="absolute top-0 z-40 h-screen w-screen backdrop-blur"/>
            </>
        )}
    </>,
    document.getElementById('model-root')
  )
};


export default Modal;