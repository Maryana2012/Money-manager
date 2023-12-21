import FormNewCost from "components/FormNewCost/FormNewCost";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import css from './Modal.module.css'

const Modal = ({onClose, openModal}) => {
   const [isOpenModal, setOpenModal] = useState(false);

   useEffect(()=>{
    setOpenModal(openModal);
   },[openModal])


   return (
   <>
     {isOpenModal &&  (<> <div className={css.backdrop}></div>
      <div className={css.modal}>
        <FormNewCost/>
      <button type="button" onClick={onClose} className={css.button}><AiOutlineClose /></button>
    </div></>)}
   </>
   )
}

export default Modal;