"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegSquare, FaRegCheckSquare  } from "react-icons/fa";
// import AdditionInfo from "../AdditionInfo"
import Container from "../component/Container";
import Product from "../component/Product";
import Flex from "../component/Flex";
import BreadCrumbs from "../component/BreadCrumbs";

export default function page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("product.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching Data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <Container>
        <BreadCrumbs CurrentPage="Men's" className="mt-4 border-b" />
        <Flex className="justify-between flex-col md:flex-row mt-10">
          {/* sidebar  */}
          <div className="w-2/12">
            {/* Product Category  */}
            <div className="">
              {/* heading */}
              <h3 className="text-lg mb-5 text-TopNavBG">Product Category</h3>
              {/* heading */}

              <div className="flex flex-col gap-5 items-start border-b border-borderOne pb-[35px] mb-[50px]">
                <button className="text-sm text-footerText flex gap-1 items-center">
                  Men
                </button>
                <button className="text-sm text-primary flex gap-1 items-center">
                  <MdKeyboardDoubleArrowRight /> Women
                </button>
                <button className="text-sm text-footerText flex gap-1 items-center">
                  Accessories
                </button>
                <button className="text-sm text-footerText flex gap-1 items-center">
                  New Arrivals
                </button>
                <button className="text-sm text-footerText flex gap-1 items-center">
                  Collection
                </button>
                <button className="text-sm text-footerText flex gap-1 items-center">
                  Shop
                </button>
              </div>
            </div>
            {/* Product Category  */}

            {/* Filter by Size  */}
            <form className="border-b border-borderOne pb-[35px] mb-[50px]">
              {/* heading */}
              <h3 className="text-lg mb-5 text-TopNavBG">Sizes</h3>
              {/* heading */}
              <ul className="flex flex-col gap-5 items-start">
                <li className="flex gap-2 items-center">
                <input type="checkbox" className="accent-primary" /><span>S</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-primary" /> <span>M</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-primary" /> <span>L</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-primary" /> <span>XL</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-primary" /> <span>XXL</span>
                </li>
              </ul>
            </form>
            {/* Filter by Size  */}

            {/* Filter by Color  */}
            <div className="border-b border-borderOne pb-[35px] mb-[50px]">
              {/* heading */}
              <h3 className="text-lg mb-5 text-TopNavBG">Color</h3>
              {/* heading */}
              <ul className="flex flex-col gap-5 items-start">
                <li className="flex gap-2 items-center">
                <input type="checkbox" className="accent-primary" /> <span>Black</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-primary" /> <span>Pink</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-primary" /> <span>White</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-primary" /> <span>Blue</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input type="checkbox" className="accent-primary" /> <span>Orange</span>
                </li>
              </ul>
              <div className="show-more mt-5">
                <span className="text-primary">
                  <span className="mr-2">+</span>
                  Show More
                </span>
              </div>
            </div>
            {/* Filter by Color  */}
          </div>
          {/* sidebar  */}

          {/* main section */}
          <Flex className="w-9/12 flex-wrap items-center justify-center pb-16 gap-y-6">
          <Product products={products} />
          </Flex>
          {/* main section */}
        </Flex>
      </Container>
    </section>
  );
}
