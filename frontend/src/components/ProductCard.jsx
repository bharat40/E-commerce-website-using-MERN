import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";
import { useStore } from "../store/store";

const ProductCard = ({
  name,
  category,
  description,
  price,
  image,
  id,
  onDelete,
}) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      });

      if (!response) {
        return console.log("unable to delete");
      }
      toast.success("Product deleted");
      onDelete(id);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const addToCart = useStore((state) => state.addToCart);

  return (
    <div
      key={id}
      className="border flex flex-col  md:flex-row p-2  gap-3 w-[500px] bg-gray-900 hover:bg-gray-800"
    >
      <div className="w-[150px] h-[150px]">
        {/* product image */}
        <img
          src={image}
          alt="product-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-200">
        {/* product details */}
        <h1 className="font-bold">Name: {name}</h1>
        <h1 className="font-bold">Category: {category}</h1>
        <h1 className="font-bold">Description: {description}</h1>
        <h1 className="font-bold">Price: {price}</h1>
        <div className="flex gap-2">
          {/* update in db */}
          <button className="bg-green-300 flex items-center text-black py-1 px-2 rounded hover:bg-green-400 ">
            Update
            <CiEdit className="text-xl" />
          </button>
          {/* remove from db button */}
          <button
            className="bg-red-300 flex items-center text-black py-1 px-2 rounded hover:bg-red-400"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(id);
            }}
          >
            Delete
            <FaRegTrashAlt />
          </button>
          <button
            className="bg-blue-300 flex items-center text-black py-1 px-2 rounded hover:bg-blue-400"
            onClick={addToCart}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
