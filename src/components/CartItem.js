import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  decreaseAmount,
  increaseAmount,
} from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";
export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">Ksh {price * amount}</h4>
        <button className="remove-btn" onClick={() => dispatch(deleteItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseAmount(id))}
        >
          <ChevronUp />
        </button>
        {/* <p className="amount">{amount <= 0 ? (amount = 1) : amount}</p> */}
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(deleteItem(id));
              return;
            }
            dispatch(decreaseAmount(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
