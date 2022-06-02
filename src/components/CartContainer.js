import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import { CartItem } from "./CartItem";

export const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  // total = cartItems.map((item) => item.price * item.amount).reduce((a, b) => a + b, 0);
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>ksh {total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear out
        </button>
      </footer>
    </section>
  );
};
