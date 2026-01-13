import React, { useState, useEffect } from "react";
//import { listProducts } from "../services/ProductsService";

export default function ProductCard() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-black w-35 h-35 rounded-lg mr-5 ml-5 flex flex-col content-between items-center shadow-lg shadow-black ease-in-out duration-300 hover:scale-105 cursor-pointer"
    >
      <img className="bg-blue-500 h-15 w-15 m-1 rounded-lg" src="" alt="test" />
      <h1 className="bg-white m-1">Name</h1>
      <p className="bg-red-400 m-1">Test</p>
    </div>
  );
}

// Linear Gradient example
// bg-[linear-gradient(0deg,rgba(80,171,240,1)_0%,rgba(116,205,60,1)_10%,rgba(255,219,91,1)_20%,rgba(231,234,169,1)_30%,rgba(255,240,191,1)_40%,rgba(255,255,255,1)_50%,rgba(255,240,191,1)_60%,rgba(231,234,169,1)_70%,rgba(255,219,91,1)_80%,rgba(116,205,60,1)_90%,rgba(80,171,240,1)_100%))]

// const productCardVariants = cva({
//   variants:{

//   }
// })
