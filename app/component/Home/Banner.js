import React from "react";
import Button from "../Button";
import Container from "../Container";

export default function Banner() {
  return (
    <div className="py-12 lg:py-32 home-slider">
      <Container>
        <div className="w-3/5 px-4 h-full pt-40">
          <p className="text-xs xl:text-sm text-TopNavBG">
            SPRING / SUMMER COLLECTION 2017
          </p>

          <h1 className="xl:text-7xl text-2xl my-5">
            Get up to 30% Off New Arrivals
          </h1>

          <Button to="/shop" className="mt-2 bg-primary" title="SHOP NOW" />
        </div>
      </Container>
    </div>
  );
}
