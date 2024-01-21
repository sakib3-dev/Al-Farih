import React from "react";
import Heading from "../component/Heading";
import BreadCrumbs from "../component/BreadCrumbs";
import Container from "../component/Container";
import Flex from "../component/Flex";
import Button from "../component/Button";
import Image from "next/image";
import BannerIMG from "@/app/assets/images/signup.jpg";
import googleIcon from "@/app/assets/images/google-logo.png";
import facebookIcon from "@/app/assets/images/facebook-logo.png";

export default function login() {
  return (
    <section className="md:py-32 py-24  px-4">
      <Container>
        <div>
          <BreadCrumbs CurrentPage="Login" className="border-b mt-5 mb-10" />
          <Heading title="Login" />
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
                Returning Customer
              </h3>
            </div>

            {/* from */}
            <form action="post">
              {/* email and phone */}
              <Flex className="justify-between flex-col sm:flex-row">
                {/* email */}
                <div className="md:w-2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Email Address
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base"
                    type="email"
                    required
                    placeholder="example@gmail.com"
                  />
                </div>
              {/* password */}
                <div className="md:w-2/5 mt-5">
                  <label className="block text-base font-medium sm:text-xl mb-3">
                    Password
                  </label>
                  <input
                    className="focus:outline-none border border-borderOne pl-2 py-2 rounded-md w-full focus:border-TopNavBG placeholder:text-xs sm:text-base"
                    type="password"
                    required
                    placeholder="******"
                  />
                </div>
              </Flex>



              {/* button */}
              <Flex className="items-center justify-center">
                <button
                  type="submit"
                  className="border border-borderOne px-6 py-2 bg-white mt-5  hover:bg-TopNavBG hover:text-white duration-700"
                >
                  Log in
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

            {/* sign up section */}
            <div>
              {/* heading */}
              <h3 className="md:text-4xl text-xl font-bold text-TopNavBG mt-5">
                New Customer
              </h3>

              {/* description */}
              <p className="my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>

              <Button to={"/signup"} title="Continue" className="bg-TopNavBG" />
            </div>
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
