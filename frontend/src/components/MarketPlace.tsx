import React from "react";
import ProductCard from "./ProductCard.js";

export default function MarketPlace() {
  return (
    <div className="flex w-full min-h-screen content-between items-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
