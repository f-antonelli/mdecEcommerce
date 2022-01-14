import { Box, Button, DialogContent, DialogTitle, TextField } from "@material-ui/core"
import { Dialog } from "@mui/material"
import { useState } from "react"
import db from '../../firebase'
import { addDoc, collection } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
const ModalCart = ({ open, handleClose, products, totalToPay }) => {
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      mail: ''
   })

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({...formData, [name] : value})
   }

   const sendOrder = () => {
      let order = {};
      order.buyer = formData;
      order.items = products;
      order.total = totalToPay;
      pushOrder(order);
      handleClose();
   }
   
   const pushOrder = async (order) => {
      const orderFirebase = collection(db, 'orders');
      const orden = await addDoc(orderFirebase, order);
      
      toast.success(`La orden ${orden.id} se completo con exito!`);
   } 

   return (
      <div>
         <Dialog
            onClose={handleClose}
            open={open} 
         >
            <DialogTitle>Complete sus datos</DialogTitle>
            <DialogContent>
               <Box component='form'>
                  <TextField label='name' name="name" value={formData.name} onChange={handleChange} />
                  <TextField label='phone' name="phone" value={formData.phone} onChange={handleChange} />
                  <TextField label='mail' name="mail" value={formData.mail} onChange={handleChange} />
                  <Button onClick={sendOrder}>Finalizar compra</Button>
               </Box>
            </DialogContent>
         </Dialog>
         <Toaster
            position="bottom-center"
            reverseOrder={false}
         />
      </div>
   )
}

export default ModalCart
