import React from "react";
import ProductCard from "./ProductCard";
import Footer from "../../components/Footer";
import CheckOut from "../../components/CheckOut";
import NavBar from "../../components/NavBar";
import Search from "../../components/Filter";

export default function Products(props) {
  return (
    <React.Fragment>
      <NavBar />
      <Search />
      <CheckOut />

      <div
        className={"flex flex-wrap flex-row w-full justify-center itmes center"}
      >
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
