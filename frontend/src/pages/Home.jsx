import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
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
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-center  font-extrabold text-2xl mb-3">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
