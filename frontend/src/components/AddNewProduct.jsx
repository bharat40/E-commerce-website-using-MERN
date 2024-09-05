import React from "react";

const AddNewProduct = () => {
  return (
    <div className="flex flex-col gap-5 bg-gray-900 p-5 w-[600px]">
      <span className="text-white text-center font-extrabold text-2xl mb-3">
        Add new product
      </span>
      {/* title */}
      <div className="flex flex-col gap-2">
        <span className="text-white font-bold">Product title</span>
        <input type="text" className="text-black px-2" />
      </div>
      {/* type */}
      <div className="flex flex-col gap-2">
        <span className="text-white font-bold">Product type</span>
        <div className="flex flex-col gap-4">
          <label className="text-white">
            <input type="radio" name="type" value="1" /> Men
          </label>
          <label className="text-white">
            <input type="radio" name="type" value="2" /> Women
          </label>
          <label className="text-white">
            <input type="radio" name="type" value="3" /> Both
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
          className="px-2"
        ></textarea>
      </div>
      {/* price */}
      <div className="flex flex-col gap-2">
        <label htmlFor="price" className="text-white font-bold">
          Product price
        </label>
        <input type="number" name="price" id="price" className="px-2" />
      </div>
      {/* image */}
      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="text-white font-bold">
          Product image (url)
        </label>
        <input type="text" name="image" id="image" className="px-2" />
      </div>
      {/* submit */}
      <button className="bg-green-500 text-white font-bold py-1 hover:bg-green-600 ">
        Submit
      </button>
    </div>
  );
};

export default AddNewProduct;
