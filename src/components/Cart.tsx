import { useContext } from "react";
import { ShopContext } from "../App/App";
import icon from "../assets/cart.png";
import "../styles/Cart.css";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  let totalItems = 0;
  if (cartItems.length > 0) {
    cartItems.map((item) => {
      if (!item.quantity) item.quantity = 1;
      totalItems += item.quantity;
      console.log(totalItems);
    });
  }
  return (
    <div className="cartContainer">
      <img src={icon} alt="cart" className="inputImg" />
      {cartItems.length > 0 && <div className="cartNum">{totalItems}</div>}
    </div>
  );
}
