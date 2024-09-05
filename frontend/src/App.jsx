import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Header from "./components/Header";
import AddProductPage from "./pages/AddProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/addproduct" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
