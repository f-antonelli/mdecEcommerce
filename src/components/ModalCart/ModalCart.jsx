import { DialogTitle } from "@material-ui/core"
import { Dialog } from "@mui/material"

const ModalCart = ({ open, handleClose, products }) => {
   return (
      <div>
         <Dialog
            onClose={handleClose}
            open={open} 
         >
            <DialogTitle>Complete sus datos</DialogTitle>
         </Dialog>
      </div>
   )
}

export default ModalCart
