import { Button } from "@radix-ui/themes";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import FullProduct from "./pages/FullProduct";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<FullProduct />} />
      </Routes>
    </>
  );
}

export default App;
