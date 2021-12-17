import useModal from "../../hooks/useModal"
import Modal from "../Modal/Modal"

const Modals = () => {
   const [isOpenModal1, openModal1, closeModal1] = useModal(false);

   return (
      <div>
         <h2>Modales</h2>
         <button onClick={openModal1}>modal 1</button>
         <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h2>modal</h2>
            <p>recheto</p>
         </Modal>
      </div>
   )
}

export default Modals
