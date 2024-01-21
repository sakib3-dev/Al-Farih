"use client";
import React, { useState } from "react";
import CateBreadCrumbs from "../component/layout/CateBreadCrumbs";
import Container from "../component/Container";
import Flex from "../component/Flex";
import Image from "next/image";
import thumb1 from "@/app/assets/images/single_1.jpg";
import thumb2 from "@/app/assets/images/single_2.jpg";
import thumb3 from "@/app/assets/images/single_3.jpg";
import desc1 from "@/app/assets/images/desc_1.jpg";
import desc2 from "@/app/assets/images/desc_2.jpg";
import desc3 from "@/app/assets/images/desc_3.jpg";

import { FaCircle, FaStar, FaStarHalfAlt, FaTruck } from "react-icons/fa";
import Link from "next/link";
import AdditionalInfo from "../component/AdditionalInfo";
import Heading from "../component/Heading";

export default function productDetailsPage() {
  const [showTab, setShowTab] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handlePlus = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const handleTab = (e) => {
    setShowTab(e);
  };
  return (
    <section className="py-32 px-4 md:py-36">
      <Container>
        {/* heading */}
        <CateBreadCrumbs CurrentPage="Product Details" cate="Men's" />
        {/* heading */}
        <main>
          <Flex className="flex-col md:flex-row items-center py-10 md:py-20 justify-between">
            <Flex className="md:w-8/12 flex-col md:flex-row justify-center md:justify-between">
              <figure className="md:w-2/12 order-last md:order-first">
                <ul>
                  <Flex className="md:flex-col mt-5 gap-5 md:gap-0">
                    <li className="pb-4">
                      <Image src={thumb1} />
                    </li>
                    <li className="pb-4">
                      <Image src={thumb2} />
                    </li>
                    <li className="pb-4">
                      <Image src={thumb3} />
                    </li>
                  </Flex>
                </ul>
              </figure>
              {/* main screen */}
              <div className="md:w-9/12">
                <Image src={thumb1} />
              </div>
              {/* main screen */}
            </Flex>
            {/* details section */}
            <div className="md:w-4/12">
              {/* product name */}
              <h3 className="text-2xl md:text-4xl text-TopNavBG font-semibold">
                Pocket cotton sweatshirt
              </h3>
              {/* product details */}
              <p className="text-sm text-footerText font-medium my-8">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut...
              </p>

              {/* offer */}
              <Flex className="gap-2 items-center justify-center bg-borderOne py-3">
                <FaTruck size={20} className="text-stone-400" />{" "}
                <span className="uppercase text-base text-TopNavBG">
                  FREE DELIVERY
                </span>
              </Flex>

              {/* price and ratting */}
              <Flex className="justify-between mt-5 mb-4 flex-col">
                <p className="line-through text-breadCrumbs font-medium text-sm">
                  $629.99
                </p>
                <div className="flex justify-between items-end">
                  <p className="mt-1 text-primary text-2xl">$495.00</p>

                  {/* ratting */}
                  <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </Flex>

              {/* select color */}
              <Flex className="justify-between">
                <h3 className="text-sm text-TopNavBG">Select Color:</h3>
                <div>
                  <Flex className="gap-5">
                    <FaCircle />
                    <FaCircle className="text-red-500" />
                    <FaCircle className="text-green-500" />
                  </Flex>
                </div>
              </Flex>

              <Flex className="items-center justify-between mt-5 flex-wrap">
                <h3 className="text-sm text-TopNavBG">Quantity:</h3>

                {/* Quantity box */}
                <Flex className="border h-10 w-32 items-center justify-between">
                  <button
                    className=" px-2.5 hover:text-brandOne font-bold text-xl text-TopNavBG"
                    onClick={handleMinus}
                  >
                    -
                  </button>
                  <div>{quantity}</div>
                  <button
                    className=" px-2.5 hover:text-brandOne font-bold text-xl text-TopNavBG"
                    onClick={handlePlus}
                  >
                    +
                  </button>
                </Flex>
                {/* Quantity box */}

                {/* checkout button */}
                <Link
                  href=""
                  className="bg-black w-full text-center text-white rounded-md p-2 mt-5 md:mt-0"
                >
                  <Flex className="flex-col text-xs">
                    <p>PLACE ORDER</p>
                    <p>BIKASH / NOGOD</p>
                  </Flex>
                </Link>
                {/* checkout button */}
              </Flex>
            </div>
            {/* details section */}
          </Flex>
          <hr />

          {/* Description Review and Additional Info */}
          <ul className="flex gap-5 flex-wrap mt-10 md:mt-20 justify-between">
            <button
              className={
                showTab === 1
                  ? "text-primary border-b border-primary uppercase"
                  : "uppercase"
              }
              onClick={() => handleTab(1)}
            >
              description
            </button>
            <button
              className={
                showTab === 2
                  ? "text-primary border-b border-primary uppercase"
                  : "uppercase"
              }
              onClick={() => handleTab(2)}
            >
              Additional Info
            </button>
            <button
              className={
                showTab === 3
                  ? "text-primary border-b border-primary uppercase"
                  : "uppercase"
              }
              onClick={() => handleTab(3)}
            >
              Review (2)
            </button>
          </ul>
          <div className="my-10 md:my-20">
            {/* Description */}
            <div className={showTab === 1 ? "block" : "hidden"}>
              <Flex className="flex-col md:flex-row md:justify-between">
                <div className="md:w-5/12">
                  {/* Title */}
                  <div className="mb-10 md:mb-14">
                    <Heading title="Description" />
                  </div>
                  {/* description */}
                  <div className="md:pr-10 text-left">
                    {/* product name */}
                    <h3 className="text-2xl md:text-4xl text-TopNavBG font-semibold">
                      Pocket cotton sweatshirt
                    </h3>
                    {/* product details */}
                    <p className="text-sm text-footerText font-medium my-8">
                      Nam tempus turpis at metus scelerisque placerat nulla
                      deumantos solicitud felis. Pellentesque diam dolor,
                      elementum etos lobortis des mollis ut...
                    </p>
                  </div>
                  {/* image */}
                  <div>
                    <Image src={desc1} alt="description" />
                  </div>
                  {/* description */}
                  <div className="mt-5 md:pr-10 text-left">
                    {/* product name */}
                    <h3 className="text-2xl md:text-4xl text-TopNavBG font-semibold">
                      Pocket cotton sweatshirt
                    </h3>
                    {/* product details */}
                    <p className="text-sm text-footerText font-medium my-8">
                      Nam tempus turpis at metus scelerisque placerat nulla
                      deumantos solicitud felis. Pellentesque diam dolor,
                      elementum etos lobortis des mollis ut...
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12">
                  {/* image */}
                  <div>
                    <Image src={desc2} alt="description" />
                  </div>
                  {/* description */}
                  <div className="mt-5 md:pr-10 text-left">
                    {/* product name */}
                    <h3 className="text-2xl md:text-4xl text-TopNavBG font-semibold">
                      Pocket cotton sweatshirt
                    </h3>
                    {/* product details */}
                    <p className="text-sm text-footerText font-medium my-8">
                      Nam tempus turpis at metus scelerisque placerat nulla
                      deumantos solicitud felis. Pellentesque diam dolor,
                      elementum etos lobortis des mollis ut...
                    </p>
                  </div>
                  {/* image */}
                  <div className="mt-5">
                    <Image src={desc3} alt="description" />
                  </div>
                </div>
              </Flex>
            </div>
            {/* Description */}

            {/* Additional Info */}
            <div className={showTab === 2 ? "block" : "hidden"}>
              {/* title */}
              <div className="mb-10 md:mb-14">
                <Heading title="Additional Info" />
              </div>
              {/* Info */}
              <div className="text-sm text-footerText">
                <p className="mb-5">
                  COLOR: <span>Gold,Red</span>
                </p>
                <p>
                  SIZE: <span>L,M,XL</span>
                </p>
              </div>
            </div>
            {/* Additional Info */}
            {/* Review */}
            <div className={showTab === 3 ? "block" : "hidden"}>
              <div className="mb-10 md:mb-14">
                <Heading title="Review" />
              </div>
              <main>
                <Flex className="flex-col md:flex-row">
                  {/* Review Info */}
                  <div className="md:w-1/2">
                    {/* user pic and comment */}
                    <Flex className="flex-col md:flex-row gap-5">
                      {/* user pic and ratting */}
                      <div>
                        <div className="w-[70px] h-[70px] rounded-full bg-gray-500"></div>
                        {/* ratting */}
                        <Flex className="mt-2 md:mt-5 text-yellow-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </Flex>
                      </div>
                      {/* comment */}
                      {/* user name and date */}
                      <div className="mt-5 md:mt-0">
                        <p className="text-sm text-primary py-2">27 Aug 2016</p>
                        <p className="text-base text-TopNavBG py-2">
                          Brandon William
                        </p>
                        <p className="text-sm text-footerText py-2">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </Flex>
                    {/* user pic and comment */}
                    {/* user pic and comment */}
                    <Flex className="flex-col md:flex-row gap-5">
                      {/* user pic and ratting */}
                      <div>
                        <div className="w-[70px] h-[70px] rounded-full bg-gray-500"></div>
                        {/* ratting */}
                        <Flex className="mt-2 md:mt-5 text-yellow-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </Flex>
                      </div>
                      {/* comment */}
                      {/* user name and date */}
                      <div className="mt-5 md:mt-0">
                        <p className="text-sm text-primary py-2">27 Aug 2016</p>
                        <p className="text-base text-TopNavBG py-2">
                          Brandon William
                        </p>
                        <p className="text-sm text-footerText py-2">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </Flex>
                    {/* user pic and comment */}
                  </div>
                  {/* Review Info */}
                  {/* Review input section */}
                  <div className="md:w-1/2 mt-5 md:mt-0">
                    <form>
                      <label>Add Review</label>
                      <div>
                        <input
                          id="name"
                          type="text"
                          placeholder="Name*"
                          className="w-full py-2 pl-3 focus:outline-none border border-borderOne mt-5"
                        />
                        <input />
                        <input
                          id="email"
                          type="email"
                          placeholder="Email*"
                          className="w-full py-2 pl-3 focus:outline-none border border-borderOne mt-5"
                        />
                        <input />
                      </div>

                      {/* ratting part */}
                      <Flex className="items-center gap-6">
                        <label>Your Rating:</label>
                        <Flex className="text-yellow-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </Flex>
                      </Flex>
                      <textarea id="review-message" name="message" placeholder="your Review" rows="4" required data-error="Please, leave us a review." className="w-full border border-borderOne mt-5 pl-5 pt-4 focus:outline-none"  />

                      {/* submit button */}
                      <button className="w-[170px] border-none text-sm text-white font-medium uppercase bg-primary py-2 rounded-md">SUBMIT</button>
                    </form>
                  </div>
                  {/* Review input section */}
                </Flex>
              </main>
            </div>
            {/* Review */}
          </div>
          <hr />
          {/* Description Review and Additional Info */}

          {/* Other additional info */}
          <AdditionalInfo className="mt-10 md:mt-0" />
          {/* Other additional info */}
        </main>
      </Container>
    </section>
  );
}
