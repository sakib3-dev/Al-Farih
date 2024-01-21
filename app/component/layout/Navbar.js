"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import {
  FaAngleDown,
  FaSignInAlt,
  FaUserPlus,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import Container from "../Container";
import Flex from "../Flex";
import Image from "next/image";
import Heading from "../Heading";
import Img from "../../assets/images/sneakers.jpg";

export default function Navbar() {
  const menuItem = [
    { text: "HOME", link: "/" },
    { text: "SHOP", link: "/shop" },
    { text: "NEWS", link: "/news" },
    { text: "CONTACT", link: "/contact" },
  ];

  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  // const [header, setHeader] = useState(false);

  // // header logic
  // const scrollHeader = () => {
  //   if(window.scrollY >= 200){
  //     setHeader(true);
  //   }else {
  //     setHeader(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHeader);

  //   return () => {
  //     window.addEventListener('scroll', scrollHeader);
  //   }
  // }, [])
  // // header logic

  // navbar logic
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  // cart logic
  const handleCart = () => {
    setCart(!cart);
  };
  const closeCart = () => {
    setCart(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <main>
        {/* header top */}
        <div className="header-top bg-TopNavBG text-brandOne px-4 py-3 text-xs">
          <Container>
            <Flex className="xl:justify-between justify-center items-center">
              {/* header top title */}
              <div>
                <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
              </div>
              {/* header top title */}

              {/* header top menu */}
              <div className="hidden xl:block">
                <ul>
                  <li className="px-5 relative group overflow-hidden hover:overflow-visible">
                    <Link href="">
                      <Flex className="items-center gap-2">
                        My Account
                        <span>
                          <FaAngleDown />
                        </span>
                      </Flex>
                    </Link>

                    {/* drop down section */}
                    <ul className="absolute right-0 bg-white w-full text-center opacity-0 z-20 shadow-DropDownShadow group-hover:opacity-100 transition-all">
                      <li className="py-3">
                        <Link
                          href="login"
                          className="border-b border-brandOne px-3 py-2  text-brandTwo hover:text-brandOne duration-500"
                        >
                          <FaSignInAlt size={20} className="inline-flex pr-2" />
                          <span>Login In</span>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link
                          href="/signup"
                          className="px-3 py-2  text-brandTwo hover:text-brandOne duration-500"
                        >
                          <FaUserPlus size={20} className="inline-flex pr-2" />
                          <span>Registration</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* header top menu */}
            </Flex>
          </Container>
        </div>
        {/* header top */}

        {/* header bottom */}
        <div className="shadow-HeaderShadow py-3 px-4 bg-white">
          <nav>
            <Container>
              <Flex className="justify-between items-center">
                {/* logo */}
                <div className="">
                  <Link href="" className="text-2xl text-brandTwo">
                    {/* <span className="text-yellow-600 pr-1">FARIH</span> */}
                    <Image src={Logo} className="md:w-[150px] w-[80px]" />
                  </Link>
                </div>
                {/* logo */}

                {/* menu */}
                <Flex className="items-center hidden md:flex">
                  <ul>
                    <Flex className="flex justify-center">
                      {menuItem.map((val, i) => (
                        <li key={i} className="p-5">
                          <Link
                            href={val.link}
                            className="hover:text-brandOne duration-300 text-xs"
                          >
                            {val.text}
                          </Link>
                        </li>
                      ))}
                    </Flex>
                  </ul>
                </Flex>

                {/* Icon */}
                <div>
                  <ul>
                    <Flex className="gap-1 items-center">
                      <li className="h-[30px] w-[30px] md:h-10 md:w-10 text-xs md:text-sm flex items-center justify-center">
                        <Link
                          href=""
                          className="hover:text-brandOne duration-300"
                        >
                          <FaSearch />
                        </Link>
                      </li>
                      <li className="h-[30px] w-[30px] md:h-10 md:w-10 text-xs md:text-sm flex items-center justify-center">
                        <Link
                          href=""
                          className="hover:text-brandOne duration-300"
                        >
                          <FaUser />
                        </Link>
                      </li>
                      <li
                        className="h-[30px] w-[30px] md:h-10 md:w-10 text-xs md:text-sm bg-[#eceff6] flex items-center justify-center rounded-[50%] relative"
                        onClick={handleCart}
                      >
                        <Link
                          href=""
                          className="hover:text-brandOne duration-300 text-TopNavBG"
                        >
                          <FaShoppingCart />
                          <span className="absolute md:right-0 -top-2 -right-1 md:h-5 h-[15px] w-[15px] md:w-5 bg-primary text-white flex items-center justify-center rounded-[50%] md:text-xs text-[10px]">
                            2
                          </span>
                        </Link>
                      </li>
                    </Flex>
                  </ul>
                </div>
                {/* menu */}

                {/* toggle item */}
                <Flex className="md:hidden items-center">
                  {menu ? (
                    <FaTimes
                      size={25}
                      onClick={handleChange}
                      className="hover:text-brandOne"
                    />
                  ) : (
                    <FaBars
                      size={25}
                      onClick={handleChange}
                      className="hover:text-brandOne"
                    />
                  )}
                </Flex>
                {/* toggle item */}
              </Flex>
            </Container>
          </nav>
        </div>
        {/* header bottom */}

        {/* mobile menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-white text-brandOne font-semibold text-base pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 "`}
        >
          <ul>
            {menuItem.map((val, i) => (
              <li key={i} className="p-5 border-b border-brandOne">
                <Link href={val.link} className="" onClick={closeMenu}>
                  {val.text}
                </Link>
              </li>
            ))}
            <li>
              <div className="">
                <ul>
                  <li className="px-5 py-5 relative group overflow-hidden hover:overflow-visible">
                    <Link href="">
                      <Flex className="items-center gap-2">
                        My Account
                        <span>
                          <FaAngleDown />
                        </span>
                      </Flex>
                    </Link>

                    {/* drop down section */}
                    <ul className="absolute right-0 bg-white w-full text-center opacity-0 z-20 shadow-DropDownShadow group-hover:opacity-100 transition-all">
                      <li className="py-3">
                        <Link
                          onClick={closeMenu}
                          href="/login"
                          className="border-b border-brandOne px-3 py-2  text-brandTwo hover:text-brandOne duration-500"
                        >
                          <FaSignInAlt size={20} className="inline-flex pr-2" />
                          <span>Login In</span>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link
                          onClick={closeMenu}
                          href="/signup"
                          className="px-3 py-2  text-brandTwo hover:text-brandOne duration-500"
                        >
                          <FaUserPlus size={20} className="inline-flex pr-2" />
                          <span>Registration</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* mobile menu */}

        {/* cart */}
        <div
          className={`${
            cart ? "translate-x-0 bg-white" : " -translate-x-full bg-white"
          } absolute py-4 flex flex-col font-semibold text-base pt-8 pb-4 gap-8 w-full lg:w-1/3 h-full  transition-transform duration-300 bg-white `}
        >
          <Container className="border-b border-brandOne">
            <div className="border-b border-borderOne pb-4 px-4 md:px-8">
              <Heading title="Cart" className="" />
            </div>
            <div className="border-b border-borderOne pb-4 bg-white">
              <Flex className="mt-5 justify-between px-4 md:px-8">
                <div>
                  <Image
                    src={Img}
                    alt="product"
                    className="w-[100px] h-[110px]"
                  />
                </div>
                <Flex className="flex-col gap-4">
                  <h3>EasyStide Blue Comfort Fit Jeans</h3>

                  <p>Color: Blue</p>
                  <p>Size: 30</p>
                  <Flex className="justify-between">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      defaultValue={1}
                      required
                      className="focus:outline-none border border-TopNavBG w-20 text-center"
                    />
                    <p>Tk. 1699</p>
                  </Flex>
                </Flex>
              </Flex>

              <Flex className="mt-5 justify-between px-4 md:px-8 bg-white">
                <div>
                  <Image
                    src={Img}
                    alt="product"
                    className="w-[100px] h-[110px]"
                  />
                </div>
                <Flex className="flex-col gap-4">
                  <h3>EasyStide Blue Comfort Fit Jeans</h3>

                  <p>Color: Blue</p>
                  <p>Size: 30</p>
                  <Flex className="justify-between">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      defaultValue={1}
                      required
                      className="focus:outline-none border border-TopNavBG w-20 text-center"
                    />
                    <p>Tk. 1699</p>
                  </Flex>
                </Flex>
              </Flex>
            </div>

            <div className="text-center bg-white">
              <Flex className="justify-between px-4 lg:px-8">
                <h3>SUBTOTAL</h3>
                <p>TK. 6,796</p>
              </Flex>

              <p className="my-4">
                Shipping, taxes, and discount codes calculated at checkout.
              </p>

              <Flex className="items-center justify-center flex-col px-4 lg:px-8">
                <Link
                  href=""
                  className="bg-black w-full mt-5 text-center text-white rounded-md py-2"
                >
                  <Flex className="flex-col ">
                    <p>PLACE ORDER</p>
                    <p>BIKASH / NOGOD</p>
                  </Flex>
                </Link>

                <Link
                  href=""
                  className="bg-black w-full mt-5 text-center text-white rounded-md py-2"
                >
                  <Flex className="flex-col ">
                    <p>PROCEED TO CHECKOUT</p>
                    <p>BIKASH / NOGOD / CRED CARDS / CASH ON DELIVERY</p>
                  </Flex>
                </Link>
              </Flex>
            </div>
          </Container>
        </div>
        {/* cart */}
      </main>
    </header>
  );
}
