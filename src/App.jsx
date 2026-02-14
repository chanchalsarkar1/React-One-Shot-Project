import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import categoryContext from "./context/category";
import Home from "./components/Home";

const App = () => {
  const [view, setView] = useState("men's clothing")
  const fetchProduct = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/1");
      const data = await res.json();
      console.log("Product Data:", data);
    } catch (error) {
      console.log("Error in fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <categoryContext.Provider value={{view, setView}}>
    <div className="bg-zinc-800 text-white h-auto min-h-screen">
      <Navbar />
      <h1 className="text-3xl text-center text-white">{view.toUpperCase()} PRODUCTS</h1>
      <Home />
      <Footer />
    </div>
    </categoryContext.Provider>
  );
};

export default App;