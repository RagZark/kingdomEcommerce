import React from "react";

let dummyProduct = {
  name: "KH2 Deluxe",
  price: "$30.00",
  stockQuantity: 30,
  visible: true,
};

function ProductCard() {
  return (
    <>
      <div>
        <h1>{dummyProduct.name}</h1>
        <p>{dummyProduct.price}</p>
        <p>{dummyProduct.stockQuantity}</p>
      </div>
    </>
  );
}

export default ProductCard;
