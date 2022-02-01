import { useContext } from "react";
import cart from "../../assets/nav/cart.svg";
import CartContext from "../../context/CartContext";
import useModal from "../../hooks/useModal";
import "./CartWidget.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import { Delete } from "@mui/icons-material";

export default function CartWidget() {
  const [isOpenModalNav, openModalNav, closeModalNav] = useModal(false);
  const { products, removeCart, removeAllCart } = useContext(CartContext);

  const closeOutside = (e) => {
    if (e.target.className === "container-cart active") closeModalNav();
  };

  return (
    <>
      <img src={cart} alt="cart" onClick={() => openModalNav()} />
      <div
        className={`container-cart ${isOpenModalNav && "active"}`}
        onClick={closeOutside}
      >
        <div className={`cart ${isOpenModalNav && "active"}`}>
          <h2>Cart</h2>
          <hr />
          {products.map((product) => {
            return (
              <div className="cart__item" key={product.id}>
                <img
                  src={`../../assets/imgproducts/${[product.img]}`}
                  alt={product.img}
                />
                <h3>{product.name}</h3>
                <p>{product.quantity}</p>
                <p>{product.price}</p>
                <RemoveIcon
                  className="itemRemove"
                  onClick={() => removeCart(product)}
                />
              </div>
            );
          })}
          {products.length !== 0 && (
            <div className="trash" onClick={() => removeAllCart()}>
              <Delete />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
