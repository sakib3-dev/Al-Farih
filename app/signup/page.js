"use client";
import React, { useEffect, useState } from "react";
import Heading from "../component/Heading";
import BreadCrumbs from "../component/BreadCrumbs";
import Container from "../component/Container";
import Flex from "../component/Flex";
import Button from "../component/Button";
import Image from "next/image";
import BannerIMG from "@/app/assets/images/signup.jpg";
import googleIcon from "@/app/assets/images/google-logo.png";
import facebookIcon from "@/app/assets/images/facebook-logo.png";
import axios from "axios";
import "react-date-picker/dist/DatePicker.css";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";

const ValuePiece = Date | null;
const Value = ValuePiece | [ValuePiece, ValuePiece];

export default function signup() {
  const [all, setAll] = useState([]);
  useEffect(() => {
    async function all() {
      let data = await axios.get("https://restcountries.com/v3.1/all");
      // console.log(data);
      setAll(data.data);
    }
    all();
  }, []);

  // date picker function
  const [value, onChange] = useState(new Date());

  return (
    <section className="md:py-32 py-24  px-4">
      <Container>
        <div>
          <BreadCrumbs CurrentPage="Sign Up" className="border-b mt-5 mb-10" />
          <Heading title="Registration" />
        </div>

        <Flex className="flex-col md:flex-row items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            {/* description */}
            <div className="md:my-20 my-5 ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>
            {/* heading */}
            <div>
              <h3 className="md:text-4xl text-xl font-bold text-TopNavBG">
                Your Personal Details
              </h3>
            </div>

            {/* from */}
            <form action="post">
              {/* name */}
              <Flex className="justify-between flex-col sm:flex-row">
                {/* first name */}
                <div className="md:w-2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    First Name
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="text"
                    required
                    placeholder="enter your first name"
                  />
                </div>
                {/* last name */}
                <div className="w-md:2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Last Name
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="text"
                    required
                    placeholder="enter your last name"
                  />
                </div>
              </Flex>

              {/* email and phone */}
              <Flex className="justify-between flex-col sm:flex-row">
                {/* email */}
                <div className="md:w-2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Email Address
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="email"
                    required
                    placeholder="example@gmail.com"
                  />
                </div>
                {/* phone number */}
                <div className="md:w-2/5 mt-5  md:pl-4">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Phone
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="number"
                    required
                    placeholder="enter Mobile Number"
                  />
                </div>
              </Flex>
              {/* birthday and gender */}
              <Flex className="justify-between flex-col sm:flex-row">
                {/* birthday */}
                <div className="md:w-2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Email Address
                  </label>
                  <div>
                    <DatePicker
                      onChange={onChange}
                      value={value}
                      format="d/M/y"
                      className="border border-borderOne p-2  rounded-md w-full"
                      required
                    />
                  </div>
                </div>
                {/* Gender */}
                <div className="md:w-2/5 mt-5  md:pl-4">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Gender
                  </label>
                  <select className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </Flex>

              {/* address */}

              {/* heading */}
              <div className="my-5">
                <h3 className="md:text-4xl text-xl font-bold text-TopNavBG">
                  New Customer
                </h3>
              </div>

              <Flex className="justify-between flex-col sm:flex-row">
                {/* address */}
                <div className="md:w-2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Address
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="text"
                    required
                    placeholder="4279 Zboncak Port Suite 6212"
                  />
                </div>
                {/* City */}
                <div className="md:w-2/5 mt-5  md:pl-4">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    City
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="text"
                    required
                    placeholder="Your City"
                  />
                </div>
              </Flex>

              <Flex className="justify-between flex-col sm:flex-row">
                {/* Post Code */}
                <div className="md:w-2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Post Code
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="number"
                    required
                    placeholder="4279"
                  />
                </div>
              </Flex>
              {/* address */}

              {/* heading */}
              <div className="my-5">
                <h3 className="md:text-4xl text-xl font-bold text-TopNavBG">
                  Your Password
                </h3>
              </div>

              {/* password */}
              <Flex className="justify-between flex-col sm:flex-row">
                {/* password */}
                <div className="md:w-2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Password
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="password"
                    required
                    placeholder="******"
                  />
                </div>
                {/* Repeat Password */}
                <div className="md:w-2/5 mt-5  md:pl-4">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Repeat Password
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base valid:border-green-500"
                    type="password"
                    required
                    placeholder="******"
                  />
                </div>
              </Flex>

              {/* button */}
              <Flex className="items-center">
                <button
                  type="submit"
                  className="border border-borderOne px-6 py-2 bg-white mt-5  hover:bg-TopNavBG hover:text-white duration-700"
                >
                  Sign Up
                </button>
              </Flex>

              {/* sign up api */}
              <div className="mt-5">
                <h3 className="md:text-3xl text-xl font-bold text-TopNavBG">
                  Login With
                </h3>
                <Flex className="gap-5 mt-5">
                  <div className="h-10">
                    <Image
                      className="w-10"
                      src={googleIcon}
                      alt="google logo"
                    />
                  </div>
                  <div className="h-10">
                    <Image
                      className="w-10"
                      src={facebookIcon}
                      alt="facebook logo"
                    />
                  </div>
                </Flex>
              </div>
            </form>
          </div>

          {/* banner */}
          <div className="md:w-1/2 order-1 md:order-2">
            <Image src={BannerIMG} alt="banner" />
          </div>
        </Flex>
      </Container>
    </section>
  );
}
