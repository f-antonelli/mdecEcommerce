import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Dialog } from "@mui/material";
import { useState } from "react";
import db from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import "./ModalCart.scss";

const ModalCart = ({ open, handleClose, products, totalToPay }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const sendOrder = () => {
    let order = {};
    order.buyer = formData;
    order.items = products;
    order.total = totalToPay;
    pushOrder(order);
    handleClose();
  };

  const pushOrder = async (order) => {
    const orderFirebase = collection(db, "orders");
    const orden = await addDoc(orderFirebase, order);

    toast.success(`La orden ${orden.id} se completo con exito!`);
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open} className="container-modalcart">
        <DialogTitle className="title">Complete sus datos</DialogTitle>
        <DialogContent className="dialogcontent">
          <Box component="form" className="container-form">
            <TextField
              label="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-textfield"
            />
            <TextField
              label="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-textfield"
            />
            <TextField
              label="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              className="input-textfield"
            />
            <Button onClick={sendOrder} className="button-modal">
              Finalizar compra
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default ModalCart;
