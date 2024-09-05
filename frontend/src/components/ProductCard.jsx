import React, { useState } from "react";

const ProductCard = ({ name, category, description, price, image }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`border p-2 flex gap-3 w-[500px] bg-gray-900 hover:bg-gray-800 ${
        isClicked ? "border-green-500 border-4" : "border-gray-300"
      }`}
      onClick={handleClick}
    >
      <div className="w-[150px] h-[150px]">
        {/* product image */}
        <img src={image} alt="product-image" className="w-full h-full object-cover" />
      </div>
      <div className="text-gray-200">
        {/* product details */}
        <h1 className="font-bold">Name: {name}</h1>
        <h1 className="font-bold">Category: {category}</h1>
        <h1 className="font-bold">Description: {description}</h1>
        <h1 className="font-bold">Price: {price}</h1>
        <div className="flex gap-2">
          {/* add to cart button */}
          <button className="bg-green-300 text-black py-1 px-2 rounded hover:bg-green-400">
            add to cart
          </button>
          {/* remove from cart button */}
          <button className="bg-red-300 text-black py-1 px-2 rounded hover:bg-red-400">
            remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
