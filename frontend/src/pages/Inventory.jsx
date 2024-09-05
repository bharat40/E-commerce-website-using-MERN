import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { FaArrowUp } from "react-icons/fa";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  // function to fetch api (to get data from database)
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/product");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getData();
  }, [<ProductCard />]);

  // function to go to top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };
  return (
    <div className="bg-black min-h-screen p-5">
      <h1 className="text-center text-white  font-extrabold text-2xl mb-3">
        Products in our inventory
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product) => {
          return (
            <ProductCard
              name={product.name}
              category={product.type}
              description={product.description}
              image={product.image}
              price={product.price}
              id={product._id}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
      <button
        className="p-3 rounded fixed right-5 bottom-5 bg-green-500 hover:bg-green-600"
        onClick={goToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Inventory;
