import React, { useState } from "react";

const ProductCard = ({ name, category, description, price, image }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  let backgroundColor = "";
  if (category === "Men") {
    backgroundColor = "bg-blue-100";
  } else if (category === "Women") {
    backgroundColor = "bg-pink-100";
  } else {
    backgroundColor = "bg-gray-100";
  }
  return (
    <div
      className={`border p-2 flex gap-3 w-[500px] ${backgroundColor} hover:bg-white ${
        isClicked ? "border-black " : "border-gray-300"
      }`}
      onClick={handleClick}
    >
      <div className="w-[150px] h-[150px]">
        {/* product image */}
        <img src={image} alt="product-image" className="w-full h-full" />
      </div>
      <div>
        {/* product details */}
        <h1 className="font-bold">Name: {name}</h1>
        <h1>Category: {category}</h1>
        <h1>Description: {description}</h1>
        <h1>Price: {price}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
