import React, { useState, useEffect } from "react";
//import { listProducts } from "../services/ProductsService";

interface ProductCardProps{
  children: import("react").ReactNode;
}

export default function ProductCard({children}: ProductCardProps) {
  //const [products, setProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "kh2 ps2",
      price: 150,
    },
    {
      id: 2,
      name: "kh ps2",
      price: 80,
    },
  ];

  // useEffect(() => {
  //   listProducts()
  //     .then((response) => {
  //       setProducts(response.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <>
      {products.map((product) => (
        <div
          className="bg-black w-35 h-35 rounded-lg bg-gradient-to-b from-blue-800 to-purple-800 flex flex-col content-between items-center shadow-lg shadow-blue-800/80 ease-in-out duration-300 hover:scale-105"
          key={product.id}
        >
          <img
            className="bg-blue-500 h-15 w-15 m-1 rounded-lg"
            src=""
            alt="test"
          />
          <h1 className="bg-white m-1">{product.name}</h1>
          <p className="bg-red-400 m-1">{product.price}</p>
        </div>
      ))}
    </>
  );
};