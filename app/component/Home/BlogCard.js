import React from "react";
import Link from "next/link";
import Image from "next/image";
import Flex from "../Flex";

export default function BlogCard({ src, title, userInfo }) {
  return (
    <div className="relative group overflow-hidden px-[10px]">
      <Image src={src} alt="bannerImg" />
      <Flex className="flex-col justify-center items-center text-center absolute top-5 left-5 bg-white right-5 bottom-5 transition-all duration-700 transform scale-0 origin-center group-hover:scale-100">
        <h3 className="text-xl text-TopNavBG font-medium lg:text-2xl">
          {title}
        </h3>
        <p className="text-xs text-footerText uppercase mt-1">{userInfo}</p>
        <Link
          href={""}
          className="text-primary text-sm mt-3 border-b border-primary"
        >
          Read More
        </Link>
      </Flex>
    </div>
  );
}
