import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// STYLES
import "./ItemDetailContainer.scss";
import CircularProgress from "@mui/material/CircularProgress";
// ROUTER
import { useParams } from "react-router-dom";
// FIREBASE
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  async function getProducts(db) {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
      setLoader(false);
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getProducts(db);
  });

  return (
    <div className="container">
      {loader ? <CircularProgress /> : <ItemDetail data={product} />}
    </div>
  );
};

export default ItemDetailContainer;
