import { useState } from "react";
import Product from "../Product/Product";
import React from "react";
function Products() {
  let allProduct = [
    {
      name: "oppo",
      price: 4000,
      id: 1,
      count: 2,
      onSale: false,
      desc: "The OPPO smartphone combines sleek design with powerful performance, offering a seamless user experience. Featuring a vibrant AMOLED display, advanced camera system, and long-lasting battery, it's perfect for both work and entertainment. With fast charging and a user-friendly interface, OPPO delivers innovation at your fingertips.",
    },
    {
      name: "iphone",
      price: 4000,
      id: 2,
      count: 3,
      onSale: true,
      desc: "The iPhone offers a premium experience with its sleek design, powerful A-series chip, and advanced camera system. It delivers smooth performance, secure features, and seamless integration across the Apple ecosystem.",
    },
    {
      name: "nokia",
      price: 8000,
      id: 3,
      count: 5,
      onSale: false,
      desc: "Nokia phones are known for their durable build, reliable performance, and clean Android experience. With long battery life and regular security updates, they offer dependable functionality for everyday use.",
    },
    {
      name: "samsung",
      price: 6000,
      id: 4,
      count: 2,
      onSale: true,
      desc: "Samsung phones combine cutting-edge technology with stylish design, featuring vibrant displays and powerful processors. With advanced cameras and a wide range of models, they cater to both premium and budget-conscious users.",
    },
    {
      name: "realme",
      price: 2000,
      id: 4,
      count: 2,
      onSale: true,
      desc: "Samsung phones combine cutting-edge technology with stylish design, featuring vibrant displays and powerful processors. With advanced cameras and a wide range of models, they cater to both premium and budget-conscious users.",
    },
    {
      name: "vivo",
      price: 6000,
      id: 4,
      count: 2,
      onSale: false,
      desc: "Samsung phones combine cutting-edge technology with stylish design, featuring vibrant displays and powerful processors. With advanced cameras and a wide range of models, they cater to both premium and budget-conscious users.",
    },
    {
      name: "apple",
      price: 15000,
      id: 4,
      count: 2,
      onSale: true,
      desc: "Samsung phones combine cutting-edge technology with stylish design, featuring vibrant displays and powerful processors. With advanced cameras and a wide range of models, they cater to both premium and budget-conscious users.",
    },
  ];
  let [products, setProduct] = useState(allProduct);

  function deletProduct(prodId) {
    let newArr = structuredClone(products);
    let updatedArr = newArr.filter((prod) => {
      return prod.id !== prodId;
    });
    setProduct(updatedArr);
  }
  return (
    <>
      <div style={{ backgroundColor: "#1abc9c" }}>
        <div className="container py-3 d-flex flex-column justify-content-center align-items-center">
          <h2 style={{ marginTop: "10px" }}>products list</h2>
          {products.map((prod) => {
            return <Product myprod={prod} deleteFunction={deletProduct} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
