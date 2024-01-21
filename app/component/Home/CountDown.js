"use client";
import React, { useEffect, useRef, useState } from "react";
import Banner from "@/app/assets/images/deal-of-the-week.png";
import Heading from "../Heading";
import Container from "../Container";
import Image from "next/image";
import Flex from "../Flex";

export default function CountDown() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {

    const countDownDate = new Date("May 30, 2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  // componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="bg-CountDown">
        <Container>
            <div className="relative">
                <div>
                    <Image src={Banner} alt="banner"/>
                </div>

                <Flex className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:right-0 md:-translate-x-0 flex-col items-center">
                    <Heading title="Deal Of The Week" />

                    <Flex className=" mt-10 flex gap-4 text-primary">

                        <Flex className='bg-white text-center h-[50px] w-[50px] rounded-[50%] flex-col justify-center lg:h-[70px] lg:w-[70px] xl:w-[90px] xl:h-[90px]'>
                            <h3 className='font-medium xl:text-4xl text-base lg:text-2xl'>{days}</h3>
                            <p className='text-TopNavBG text-[10px] lg:text-sm '>Day</p>
                        </Flex>

                        <Flex className='bg-white text-center h-[50px] w-[50px] rounded-[50%] flex-col justify-center lg:h-[70px] lg:w-[70px] xl:w-[90px] xl:h-[90px]'>
                            <h3 className='font-medium xl:text-4xl text-base lg:text-2xl'>{hours}</h3>
                            <p className='text-TopNavBG text-[10px] lg:text-sm '>Hours</p>
                        </Flex>

                        <Flex className='bg-white text-center h-[50px] w-[50px] rounded-[50%] flex-col justify-center lg:h-[70px] lg:w-[70px] xl:w-[90px] xl:h-[90px]'>
                            <h3 className='font-medium xl:text-4xl text-base lg:text-2xl'>{minutes}</h3>
                            <p className='text-TopNavBG text-[10px] lg:text-sm '>Mins</p>
                        </Flex>

                        <Flex className='bg-white text-center h-[50px] w-[50px] rounded-[50%] flex-col justify-center lg:h-[70px] lg:w-[70px] xl:w-[90px] xl:h-[90px]'>
                            <h3 className='font-medium xl:text-4xl text-base lg:text-2xl'>{seconds}</h3>
                            <p className='text-TopNavBG text-[10px] lg:text-sm '>Sec</p>
                        </Flex>

                    </Flex>

                    <div className="btn mt-9 w-[140px] bg-TopNavBG text-CountDown text-center py-3 rounded-[3px]">
                        <a className='text-[10px] sm:text-xs md:text-sm lg:text-base' href="/shop">SHOP NOW</a>
                    </div>
                </Flex>
            </div>
        </Container>
    </div>
  );
}
