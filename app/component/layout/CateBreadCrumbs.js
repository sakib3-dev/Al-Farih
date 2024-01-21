import React from "react";
import Flex from "../Flex";
import Link from "next/link";
import { FaAngleRight  } from "react-icons/fa";

export default function CateBreadCrumbs({className, CurrentPage, cate }) {
  return (
    <>
      <Flex className={`${className}  pb-4 gap-3`}>
        <Link className="text-footerText text-xs md:text-base" href="/"><Flex className="items-center gap-3">Home <FaAngleRight /></Flex></Link>
        <Link className="text-footerTex text-xs md:text-base" href="/"><Flex className="items-center gap-3">{cate} <FaAngleRight /></Flex></Link>
        <Link className="text-breadCrumbs text-xs md:text-base" href="">{CurrentPage}</Link>
      </Flex>
      <hr />
    </>
  );
}
