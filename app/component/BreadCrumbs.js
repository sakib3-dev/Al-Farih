import React from "react";
import Flex from "./Flex";
import Link from "next/link";
import { FaAngleRight  } from "react-icons/fa";

export default function BreadCrumbs({className, CurrentPage }) {
  return (
    <>
      <Flex className={`${className}  pb-4 gap-3`}>
        <Link className="text-footerText" href="/"><Flex className="items-center gap-3">Home <FaAngleRight /></Flex></Link>
        <Link className="text-breadCrumbs" href="">{CurrentPage}</Link>
      </Flex>
      {/* <hr /> */}
    </>
  );
}
