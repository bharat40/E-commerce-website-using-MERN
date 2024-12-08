import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";

const Header = () => {
  const cartCount = useStore((state) => state.cart.length);
  return (
    <div className="text-white bg-black border-b flex justify-between px-10 items-center">
      <div>
        {/* logo */}
        <span className="font-extrabold text-xl text-green-500">GharBazar</span>
      </div>
      <div>
        {/* navitems */}
        <ul className="flex gap-3 font-bold">
          <Link to="/register">
            <li className="text-green-500 hover:text-green-400">
              Register/Login
            </li>
          </Link>
          <Link to="/">
            <li className="text-green-500 hover:text-green-400">Home</li>
          </Link>
          <Link to="/inventory">
            <li className="text-green-500 hover:text-green-400">Inventory</li>
          </Link>
          <Link to="/cart">
            <li className="text-green-500 hover:text-green-400">
              Cart {cartCount}
            </li>
          </Link>
          <Link to="/addproduct">
            <li className="text-green-500 hover:text-green-400">
              Create product
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
