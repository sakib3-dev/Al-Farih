'use client';
import React, { useEffect, useState, useRef } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Product from "../Product";

export default function BestSeller() {
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
    <div>
      <Container>
        
          <Product products={products} />
        
      </Container>
    </div>
  );
}
