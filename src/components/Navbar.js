import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
function Navbar() {
  const { cartItems, amount } = useSelector((state) => state.cart);
  // let amount = 0;
  // cartItems.forEach((element) => {
  //   amount += element.amount;
  // });
  // console.log(amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>The nav bar</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
