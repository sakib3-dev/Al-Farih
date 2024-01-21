import React from "react";
import Container from "../component/Container";
import Flex from "../component/Flex";
import Heading from "../component/Heading";
import BreadCrumbs from "../component/BreadCrumbs";
import Image from "next/image";
import { FaRegClock, FaSearch, FaTags } from "react-icons/fa";
import BlogIMG from "@/app/assets/images/blogOne.png";
import Link from "next/link";

export default function news() {
  return (
    <div className="py-20 md:py-36 px-4">
      <div className="text-center py-10">
        {/* heading */}
        <Heading title="News" />
        {/* heading */}
        <BreadCrumbs
          CurrentPage="News"
          className="justify-center items-center mt-5"
        />
      </div>
      <Container>
        <Flex className="gap-5 flex-col md:flex-row md:justify-between justify-center ">
          <main className="md:w-8/12 order-1">
            <div className="">
              <div className="blog p-4  border border-borderOne relative mb-8 bg-white rounded ">
                {/* blog image */}
                <div className="blog-img mb-8 overflow-hidden">
                  <Image
                    className="hover:scale-125 duration-1000"
                    src={BlogIMG}
                    alt="blog thumb"
                  />
                </div>

                {/* blog title */}
                <h3 className="blog-title text-2xl mb-2">
                  PLID Treatment Options in Bangladesh
                </h3>

                {/* blog info */}
                <div className="blog-info mb-4 text-sm">
                  <div className="post-left">
                    <ul>
                      <Flex className="items-center">
                        <li className="mb-1 mr-5">
                          <div className="post-author">
                            <span>Super Admin</span>
                          </div>
                        </li>

                        <li className="mb-1 mr-5">
                          <Flex className="items-center gap-1">
                            <FaRegClock className="text-primary" /> "09 Dec
                            2023"
                          </Flex>
                        </li>

                        <li className="mb-1 mr-0">
                          <Flex className="items-center gap-1">
                            <FaTags className="text-primary" /> "Information"
                          </Flex>
                        </li>
                      </Flex>
                    </ul>
                  </div>
                </div>

                {/* blog Content */}
                <div className="blog-content relative">
                  <h2 className="text-3xl font-medium text-TopNavBG mb-1">
                    PLID Treatment Options in Bangladesh
                    {/* dynamic name */}
                  </h2>

                  <p className="text-sm mb-8">
                    অনেক মানুষ PLID শব্দটি ব্যবহার করে। আমাদের দেশের বেশির ভাগ
                    মানুষ যাদের পিঠে ব্যথা আছে তারা পিএলআইডি বা অস্টিওপোরোসিসকে
                    দায়ী করেন, কিন্তু এটি মোটেও সত্য...
                  </p>

                  <Link
                    className="underline inline-block text-base p-0 text-primary font-bold"
                    href="/"
                  >
                    View News
                  </Link>
                </div>
              </div>

              <div className="blog p-4  border border-borderOne relative mb-8 bg-white rounded ">
                {/* blog image */}
                <div className="blog-img mb-8 overflow-hidden">
                  <Image
                    className="hover:scale-125 duration-1000"
                    src={BlogIMG}
                  />
                </div>

                {/* blog title */}
                <h3 className="blog-title text-2xl mb-2">
                  PLID Treatment Options in Bangladesh
                </h3>

                {/* blog info */}
                <div className="blog-info mb-4 text-sm">
                  <div className="post-left">
                    <ul>
                      <Flex className="items-center">
                        <li className="mb-1 mr-5">
                          <div className="post-author">
                            <span>Super Admin</span>
                          </div>
                        </li>

                        <li className="mb-1 mr-5">
                          <Flex className="items-center gap-1">
                            <FaRegClock className="text-primary" /> "09 Dec
                            2023"
                          </Flex>
                        </li>

                        <li className="mb-1 mr-0">
                          <Flex className="items-center gap-1">
                            <FaTags className="text-primary" /> "Information"
                          </Flex>
                        </li>
                      </Flex>
                    </ul>
                  </div>
                </div>

                {/* blog Content */}
                <div className="blog-content relative">
                  <h2 className="text-3xl font-medium text-TopNavBG mb-1">
                    PLID Treatment Options in Bangladesh
                    {/* dynamic name */}
                  </h2>

                  <p className="text-sm mb-8">
                    অনেক মানুষ PLID শব্দটি ব্যবহার করে। আমাদের দেশের বেশির ভাগ
                    মানুষ যাদের পিঠে ব্যথা আছে তারা পিএলআইডি বা অস্টিওপোরোসিসকে
                    দায়ী করেন, কিন্তু এটি মোটেও সত্য...
                  </p>

                  <Link
                    className="underline inline-block text-base p-0 text-primary font-bold"
                    href="/"
                  >
                    View News
                  </Link>
                </div>
              </div>

              <div className="blog p-4  border border-borderOne relative mb-8 bg-white rounded ">
                {/* blog image */}
                <div className="blog-img mb-8 overflow-hidden">
                  <Image
                    className="hover:scale-125 duration-1000"
                    src={BlogIMG}
                  />
                </div>

                {/* blog title */}
                <h3 className="blog-title text-2xl mb-2">
                  PLID Treatment Options in Bangladesh
                </h3>

                {/* blog info */}
                <div className="blog-info mb-4 text-sm">
                  <div className="post-left">
                    <ul>
                      <Flex className="items-center">
                        <li className="mb-1 mr-5">
                          <div className="post-author">
                            <span>Super Admin</span>
                          </div>
                        </li>

                        <li className="mb-1 mr-5">
                          <Flex className="items-center gap-1">
                            <FaRegClock className="text-primary" /> "09 Dec
                            2023"
                          </Flex>
                        </li>

                        <li className="mb-1 mr-0">
                          <Flex className="items-center gap-1">
                            <FaTags className="text-primary" /> "Information"
                          </Flex>
                        </li>
                      </Flex>
                    </ul>
                  </div>
                </div>

                {/* blog Content */}
                <div className="blog-content relative">
                  <h2 className="text-3xl font-medium text-TopNavBG mb-1">
                    PLID Treatment Options in Bangladesh
                    {/* dynamic name */}
                  </h2>

                  <p className="text-sm mb-8">
                    অনেক মানুষ PLID শব্দটি ব্যবহার করে। আমাদের দেশের বেশির ভাগ
                    মানুষ যাদের পিঠে ব্যথা আছে তারা পিএলআইডি বা অস্টিওপোরোসিসকে
                    দায়ী করেন, কিন্তু এটি মোটেও সত্য...
                  </p>

                  <Link
                    className="underline inline-block text-base p-0 text-primary font-bold"
                    href="/"
                  >
                    View News
                  </Link>
                </div>
              </div>

              <div className="blog p-4  border border-borderOne relative mb-8 bg-white rounded ">
                {/* blog image */}
                <div className="blog-img mb-8 overflow-hidden">
                  <Image
                    className="hover:scale-125 duration-1000"
                    src={BlogIMG}
                  />
                </div>

                {/* blog title */}
                <h3 className="blog-title text-2xl mb-2">
                  PLID Treatment Options in Bangladesh
                </h3>

                {/* blog info */}
                <div className="blog-info mb-4 text-sm">
                  <div className="post-left">
                    <ul>
                      <Flex className="items-center">
                        <li className="mb-1 mr-5">
                          <div className="post-author">
                            <span>Super Admin</span>
                          </div>
                        </li>

                        <li className="mb-1 mr-5">
                          <Flex className="items-center gap-1">
                            <FaRegClock className="text-primary" /> "09 Dec
                            2023"
                          </Flex>
                        </li>

                        <li className="mb-1 mr-0">
                          <Flex className="items-center gap-1">
                            <FaTags className="text-primary" /> "Information"
                          </Flex>
                        </li>
                      </Flex>
                    </ul>
                  </div>
                </div>

                {/* blog Content */}
                <div className="blog-content relative">
                  <h2 className="text-3xl font-medium text-TopNavBG mb-1">
                    PLID Treatment Options in Bangladesh
                    {/* dynamic name */}
                  </h2>

                  <p className="text-sm mb-8">
                    অনেক মানুষ PLID শব্দটি ব্যবহার করে। আমাদের দেশের বেশির ভাগ
                    মানুষ যাদের পিঠে ব্যথা আছে তারা পিএলআইডি বা অস্টিওপোরোসিসকে
                    দায়ী করেন, কিন্তু এটি মোটেও সত্য...
                  </p>

                  <Link
                    className="underline inline-block text-base p-0 text-primary font-bold"
                    href="/"
                  >
                    View News
                  </Link>
                </div>
              </div>

              <div className="blog p-4  border border-borderOne relative mb-8 bg-white rounded ">
                {/* blog image */}
                <div className="blog-img mb-8 overflow-hidden">
                  <Image
                    className="hover:scale-125 duration-1000"
                    src={BlogIMG}
                  />
                </div>

                {/* blog title */}
                <h3 className="blog-title text-2xl mb-2">
                  PLID Treatment Options in Bangladesh
                </h3>

                {/* blog info */}
                <div className="blog-info mb-4 text-sm">
                  <div className="post-left">
                    <ul>
                      <Flex className="items-center">
                        <li className="mb-1 mr-5">
                          <div className="post-author">
                            <span>Super Admin</span>
                          </div>
                        </li>

                        <li className="mb-1 mr-5">
                          <Flex className="items-center gap-1">
                            <FaRegClock className="text-primary" /> "09 Dec
                            2023"
                          </Flex>
                        </li>

                        <li className="mb-1 mr-0">
                          <Flex className="items-center gap-1">
                            <FaTags className="text-primary" /> "Information"
                          </Flex>
                        </li>
                      </Flex>
                    </ul>
                  </div>
                </div>

                {/* blog Content */}
                <div className="blog-content relative">
                  <h2 className="text-3xl font-medium text-TopNavBG mb-1">
                    PLID Treatment Options in Bangladesh
                    {/* dynamic name */}
                  </h2>

                  <p className="text-sm mb-8">
                    অনেক মানুষ PLID শব্দটি ব্যবহার করে। আমাদের দেশের বেশির ভাগ
                    মানুষ যাদের পিঠে ব্যথা আছে তারা পিএলআইডি বা অস্টিওপোরোসিসকে
                    দায়ী করেন, কিন্তু এটি মোটেও সত্য...
                  </p>

                  <Link
                    className="underline inline-block text-base p-0 text-primary font-bold"
                    href="/"
                  >
                    View News
                  </Link>
                </div>
              </div>

              <div className="blog p-4  border border-borderOne relative mb-8 bg-white rounded ">
                {/* blog image */}
                <div className="blog-img mb-8 overflow-hidden">
                  <Image
                    className="hover:scale-125 duration-1000"
                    src={BlogIMG}
                  />
                </div>

                {/* blog title */}
                <h3 className="blog-title text-2xl mb-2">
                  PLID Treatment Options in Bangladesh
                </h3>

                {/* blog info */}
                <div className="blog-info mb-4 text-sm">
                  <div className="post-left">
                    <ul>
                      <Flex className="items-center">
                        <li className="mb-1 mr-5">
                          <div className="post-author">
                            <span>Super Admin</span>
                          </div>
                        </li>

                        <li className="mb-1 mr-5">
                          <Flex className="items-center gap-1">
                            <FaRegClock className="text-primary" /> "09 Dec
                            2023"
                          </Flex>
                        </li>

                        <li className="mb-1 mr-0">
                          <Flex className="items-center gap-1">
                            <FaTags className="text-primary" /> "Information"
                          </Flex>
                        </li>
                      </Flex>
                    </ul>
                  </div>
                </div>

                {/* blog Content */}
                <div className="blog-content relative">
                  <h2 className="text-3xl font-medium text-TopNavBG mb-1">
                    PLID Treatment Options in Bangladesh
                    {/* dynamic name */}
                  </h2>

                  <p className="text-sm mb-8">
                    অনেক মানুষ PLID শব্দটি ব্যবহার করে। আমাদের দেশের বেশির ভাগ
                    মানুষ যাদের পিঠে ব্যথা আছে তারা পিএলআইডি বা অস্টিওপোরোসিসকে
                    দায়ী করেন, কিন্তু এটি মোটেও সত্য...
                  </p>

                  <Link
                    className="underline inline-block text-base p-0 text-primary font-bold"
                    href="/"
                  >
                    View News
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <article className="md:w-4/12 order-2">
            {/* search bar */}
            <div className="border rounded border-borderOne py-5 px-2">
              <Flex className="items-center w-full">
                <input
                  placeholder="Search..."
                  className="focus:outline-none border border-r-0 border-borderOne pl-4 py-2 rounded-md w-10/12"
                />
                <div className="py-3 rounded-tr rounded-br text-white bg-green-600 w-2/12 cursor-pointer">
                  <FaSearch className="mx-auto" />
                </div>
              </Flex>
            </div>

            {/* latest post */}
            <div className="mt-10 border rounded border-borderOne ">
              <div className="py-5 px-4">
                {/* heading */}
                <h3>Latest Post</h3>
              </div>

              <div className="border-t border-borderOne px-4">
                {/* blog Container */}
                <div>
                  {/* blog */}
                  <Flex className="mt-5 relative">
                    {/* blog Image  */}
                    <div className="blog-img w-24 rounded overflow-hidden relative">
                      <Link href="">
                        <Image
                          src={BlogIMG}
                          alt="post"
                          className="hover:scale-125 duration-1000"
                        />
                      </Link>
                    </div>
                    {/* blog Info */}
                    <div className="px-2">
                      <Link href="">
                        <h3 className="text-xs hover:text-primary duration-700">
                          Seamless Online Doctor Consultation Services Just For
                          You
                        </h3>
                      </Link>
                      <p className="text-[10px]">11 Jan 2024</p>
                    </div>
                  </Flex>

                  {/* blog */}
                  <Flex className="mt-5 relative">
                    {/* blog Image  */}
                    <div className="blog-img w-24 rounded overflow-hidden relative">
                      <Link href="">
                        <Image
                          src={BlogIMG}
                          alt="post"
                          className="hover:scale-125 duration-1000"
                        />
                      </Link>
                    </div>
                    {/* blog Info */}
                    <div className="px-2">
                      <Link href="">
                        <h3 className="text-xs hover:text-primary duration-700">
                          Seamless Online Doctor Consultation Services Just For
                          You
                        </h3>
                      </Link>
                      <p className="text-[10px]">11 Jan 2024</p>
                    </div>
                  </Flex>

                  {/* blog */}
                  <Flex className="mt-5 relative">
                    {/* blog Image  */}
                    <div className="blog-img w-24 rounded overflow-hidden relative">
                      <Link href="">
                        <Image
                          src={BlogIMG}
                          alt="post"
                          className="hover:scale-125 duration-1000"
                        />
                      </Link>
                    </div>
                    {/* blog Info */}
                    <div className="px-2">
                      <Link href="">
                        <h3 className="text-xs hover:text-primary duration-700">
                          Seamless Online Doctor Consultation Services Just For
                          You
                        </h3>
                      </Link>
                      <p className="text-[10px]">11 Jan 2024</p>
                    </div>
                  </Flex>

                  {/* blog */}
                  <Flex className="mt-5 relative">
                    {/* blog Image  */}
                    <div className="blog-img w-24 rounded overflow-hidden relative">
                      <Link href="">
                        <Image
                          src={BlogIMG}
                          alt="post"
                          className="hover:scale-125 duration-1000"
                        />
                      </Link>
                    </div>
                    {/* blog Info */}
                    <div className="px-2">
                      <Link href="">
                        <h3 className="text-xs hover:text-primary duration-700">
                          Seamless Online Doctor Consultation Services Just For
                          You
                        </h3>
                      </Link>
                      <p className="text-[10px]">11 Jan 2024</p>
                    </div>
                  </Flex>

                  {/* blog */}
                  <Flex className="mt-5 relative">
                    {/* blog Image  */}
                    <div className="blog-img w-24 rounded overflow-hidden relative">
                      <Link href="">
                        <Image
                          src={BlogIMG}
                          alt="post"
                          className="hover:scale-125 duration-1000"
                        />
                      </Link>
                    </div>
                    {/* blog Info */}
                    <div className="px-2">
                      <Link href="">
                        <h3 className="text-xs hover:text-primary duration-700">
                          Seamless Online Doctor Consultation Services Just For
                          You
                        </h3>
                      </Link>
                      <p className="text-[10px]">11 Jan 2024</p>
                    </div>
                  </Flex>
                </div>
                {/* blog Container */}
              </div>
            </div>

            {/* blog categories */}
            <div className="mt-10 border rounded border-borderOne ">
              <div className="py-5 px-4">
                {/* heading */}
                <h3>Latest Post</h3>
              </div>

              {/* category */}
              <div className="py-5 px-4 border-t">
                <Link href="">
                  <h3>Information</h3>
                </Link>
              </div>
            </div>
          </article>
        </Flex>
      </Container>
    </div>
  );
}
