import React, { useState } from "react";
import { toast } from "react-toastify";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      name,
      type,
      description,
      price: parseInt(price),
      image,
    };
    try {
      if (!name || !type || !description || !price || !image) {
        return toast.error("All fields are required");
      }
      const response = await fetch("http://localhost:5000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (!response) {
        throw new Error("Failed to add product");
      }
      toast.success("Product added to inventory");
      setName("");
      setType("");
      setDescription("");
      setImage("");
      setPrice("");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="flex flex-col gap-5 bg-gray-900 p-5 w-[600px]">
      <span className="text-white text-center font-extrabold text-2xl mb-3">
        Add new product
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* name */}
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold">Product name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="text-black bg-gray-300 px-2"
          />
        </div>
        {/* type */}
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold">Product type</span>
          <div className="flex flex-col gap-4">
            <label className="text-white">
              <input
                type="radio"
                name="type"
                value="Men"
                checked={type === "Men"}
                onChange={(e) => setType(e.target.value)}
              />{" "}
              Men
            </label>
            <label className="text-white">
              <input
                type="radio"
                name="type"
                value="Women"
                checked={type === "Women"}
                onChange={(e) => setType(e.target.value)}
              />{" "}
              Women
            </label>
            <label className="text-white">
              <input
                type="radio"
                name="type"
                value="Both"
                checked={type === "Both"}
                onChange={(e) => setType(e.target.value)}
              />{" "}
              Both
            </label>
          </div>
        </div>
        {/* description */}
        <div className="flex flex-col gap-2">
          <label htmlFor="desc" className="text-white font-bold">
            Product description
          </label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-2 bg-gray-300"
          ></textarea>
        </div>
        {/* price */}
        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="text-white font-bold ">
            Product price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="px-2 bg-gray-300"
          />
        </div>
        {/* image */}
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-white font-bold">
            Product image (url)
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="px-2 bg-gray-300"
          />
        </div>
        {/* submit */}
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-1 hover:bg-green-600 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
