import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import Flex from "../component/Flex";

const title = "Contact Us";
const title2 = "Follow Us";
const desc =
  "There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.";
const phone = "(800) 686-6688";
const email = "thesakibdev@gmail.com";
const status = "Open hours: 8.00-18.00 Mon-Fri";
const offDay = "Sunday: Closed";

export default function ContactInfo() {
  return (
    <div className="md:mt-16 mt-6 lg:w-1/2">
      {/* heading description */}
      <div className="pr-[30px] text-left">
        <h1 className="text-2xl text-TopNavBG font-medium sm:text-4xl md:text-[40px] lg:text-5xl">
          {title}
        </h1>

        <p className="text-TopNavBG text-xs sm:text-sm md:text-base text-justify mt-5">
          {desc}
        </p>
      </div>
      {/* heading description */}

      {/* phone and email */}
      <div className="text-left">
        <p className="text-TopNavBG text-xs sm:text-sm md:text-base text-justify mt-5 ">
          {phone}
        </p>
        <p className="text-TopNavBG text-xs sm:text-sm md:text-base text-justify my-3 ">
          {email}
        </p>
      </div>
      {/* phone and email */}

      {/* opening closing and holiday */}
      <div className="text-left">
        <p className="text-TopNavBG text-xs sm:text-sm md:text-base text-justify my-3 ">
          {status}
        </p>
        <p className="text-TopNavBG text-xs sm:text-sm md:text-base text-justify">
          {offDay}
        </p>
      </div>
      {/* opening closing and holiday */}

      {/* social media link and icon */}
      <div className="text-left">
        {/* title */}
        <h3 className="mt-6 text-2xl text-TopNavBG font-medium sm:text-4xl md:text-[40px] lg:text-5xl">
          {title2}
        </h3>
        {/* title */}

        {/* social media icon */}
        <Flex className="flex gap-5 mt-3">
          <Link href="" className="w-[40px] h-[40px] rounded-[100%] hover:shadow-iconShadow hover:-translate-y-1 duration-500 bg-blue-600 flex items-center justify-center">
            <FaFacebookF className="text-white" size={20} />
          </Link>

          <Link href="" className="w-[40px] h-[40px] rounded-[100%] hover:shadow-iconShadow hover:-translate-y-1 duration-500 bg-sky-400 flex items-center justify-center">
            <FaTwitter className="text-white" size={20} />
          </Link>

          <Link href="" className="w-[40px] h-[40px] rounded-[100%] hover:shadow-iconShadow hover:-translate-y-1 duration-500 bg-green-600 flex items-center justify-center">
            <FaWhatsapp className="text-white" size={20} />
          </Link>

          <Link href="" className="w-[40px] h-[40px] rounded-[100%] hover:shadow-iconShadow hover:-translate-y-1 duration-500 bg-instagram flex items-center justify-center">
            <FaInstagram className="text-white" size={20} />
          </Link>
        </Flex>
        {/* social media icon */}
      </div>
      {/* social media link and icon */}
    </div>
  );
}
