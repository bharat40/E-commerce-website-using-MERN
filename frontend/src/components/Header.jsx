import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white bg-black border-b flex justify-between px-10 items-center">
      <div>
        {/* logo */}
        <span className="font-extrabold text-xl text-green-500">GharBazar</span>
      </div>
      <div>
        {/* navitems */}
        <ul className="flex gap-3 font-bold">
          <Link to="/">
            <li className="text-green-500 hover:text-green-400">Home</li>
          </Link>
          <Link to="/inventory">
            <li className="text-green-500 hover:text-green-400">Inventory</li>
          </Link>
          <Link to="/cart">
            <li className="text-green-500 hover:text-green-400">Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
