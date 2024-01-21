"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Card from "../layout/Card";

export default function NewArrival() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(["all"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("product.json");
        const data = await response.json();
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching Data:", error);
      }
    };
    fetchData();
  }, []);

   // filtering function
   const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };
  // filtering function

    // show all products
    const showAll = () => {
        setFilteredItems(products);
        setSelectedCategory("all");
      };
      // show all products

  return (
    <div className="py-20">
        <Container>
            {/* heading */}
        <div className="text-center">
          <Heading title="NEW ARRIVALS" />
        </div>
        {/* heading */}

        {/* product shorting */}
        <div className="my-20">
          <div className="flex-wrap flex justify-center">
            <button className=" border border-borderOne px-5 py-2 rounded-sm text-base text-TopNavBG" onClick={showAll}>
              ALL
            </button>
            <button className=" border border-borderOne px-5 py-2 rounded-sm text-base text-TopNavBG" onClick={() => filterItems("Women's")}>
              WOMEN'S
            </button>
            <button className=" border border-borderOne px-5 py-2 rounded-sm text-base text-TopNavBG" onClick={() => filterItems("Accessories")}>
              ACCESSORIES
            </button>
            <button className=" border border-borderOne px-5 py-2 rounded-sm text-base text-TopNavBG" onClick={() => filterItems("Men's")}>
              MEN'S
            </button>
          </div>

          <Card filteredItems={filteredItems} />
        </div>
        {/* product shorting */}
        </Container>
    </div>
  );
}
