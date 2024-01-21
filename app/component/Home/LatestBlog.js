import React from "react";
import BlogIMG1 from "@/app/assets/images/blog_1.jpg";
import BlogIMG2 from "@/app/assets/images/blog_2.jpg";
import BlogIMG3 from "@/app/assets/images/blog_3.jpg";
import Heading from "../Heading";
import BlogCard from "./BlogCard";
import Flex from "../Flex";

export default function LatestBlog() {
  return (
    <div className="py-6 lg:py-20 px-4">
      <div className="container mx-auto">
        {/* heading */}
        <div className="text-center mb-20">
          <Heading title="Latest Blog" />
        </div>

        <Flex className="flex-col gap-5 lg:flex-row justify-between">
          <BlogCard
            src={BlogIMG1}
            title="Here are the trends I see coming this fall"
            userInfo="BY ADMIN | DEC 01, 2017"
          />

          <BlogCard
            src={BlogIMG2}
            title="Here are the trends I see coming this fall"
            userInfo="BY ADMIN | DEC 01, 2017"
          />

          <BlogCard
            src={BlogIMG3}
            title="Here are the trends I see coming this fall"
            userInfo="BY ADMIN | DEC 01, 2017"
          />
        </Flex>
      </div>
    </div>
  );
}
