import React from "react";
import { useStore } from "../store/store";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, emptyCart } = useStore();

  return (
    <div className="p-5 text-gray-200">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="mt-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <div>
                <h1 className="font-bold">{item.name}</h1>
                <p>{item.category}</p>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove <FaRegTrashAlt />
              </button>
            </div>
          ))}
          <button
            className="mt-5 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={emptyCart}
          >
            Empty Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
