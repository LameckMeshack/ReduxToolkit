import React from "react";
import { useDispatch } from "react-redux";
import { clearChart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

export const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all Items from your shopping cart? </h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn  confirm-btn"
            onClick={() => {
              dispatch(clearChart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(clearChart())}
          >
            clear
          </button>
        </div>
      </div>
    </aside>
  );
};
