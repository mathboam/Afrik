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
        className={
          "flex flex-wrap  bg-gray-100 flex-row w-full justify-center space-x-6 pb-6 items-center"
        }
      >
        <ProductCard />
      </div>

      <Footer />
    </React.Fragment>
  );
}
