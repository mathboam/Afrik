import React from "react";
import ProductCard from "./ProductCard";
import Footer from "../../components/Footer";
import CheckOut from "../../components/CheckOut";

export default function Products(props) {
  return (
    <React.Fragment>
      <div>Products</div>
      <CheckOut />
      <div className={"flex flex-wrap flex-row justify-center items-center"}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Footer />
    </React.Fragment>
  );
}
