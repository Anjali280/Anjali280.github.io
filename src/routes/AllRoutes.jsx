import React from "react";
import { Route, Routes } from "react-router-dom";

import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import Orders from "../components/Orders";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}
