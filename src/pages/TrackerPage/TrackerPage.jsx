import Modal from "components/Modal/Modal";
import { useState } from "react";

const TrackerPage =()=>{
    const [openModal, setOpenModal] = useState(false);
    
    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }
    console.log(openModal)
    return(
        <>
        <button type="button" onClick={handleOpenModal}>Create new cost</button>
        <Modal onClose={handleCloseModal} openModal={openModal}/>
        </>
    )
} 
export default TrackerPage;