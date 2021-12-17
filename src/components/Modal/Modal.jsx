import './Modal.scss'

const Modal = ({ children, isOpen, closeModal }) => {

   const handleContainerClick = e => e.stopPropagation();
   
   return (
      <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
         <div className="modal-container" onClick={handleContainerClick}>
            { children }
         </div>
      </article>
   )
}

export default Modal
