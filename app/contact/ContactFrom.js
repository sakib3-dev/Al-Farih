import React from 'react'
import Button from '../component/Button';
import Flex from '../component/Flex';

const title = "Get In Touch With Us!";
const desc = "Fill out the form below to recieve a free and confidential.";

export default function ContactFrom() {
  return (
    <div>
        {/* heading */}
        <div className="md:mt-16 mt-6 ">
            <h3 className="text-2xl text-TopNavBG font-medium sm:text-4xl md:text-[40px] lg:text-5xl">{title}</h3>
            
            <p className="text-TopNavBG text-xs sm:text-sm md:text-base text-justify mt-5">{desc}</p>
        </div>
        {/* heading */}
        <form action='post' className='mb-16'>

            <Flex className="flex flex-col">
            <input type="text" placeholder='Name' className='mt-[31px] mb-[15px] sm:mb-[19px] h-[50px] pl-5 border border-[#e5e5e5] focus:outline-none text-sm sm:text-base placeholder:sm:text-base placeholder:text-sm focus:border-TopNavBG ' />
            <input type="text" placeholder='Email' className='mb-[15px] sm:mb-[19px] h-[50px] pl-5 border border-[#e5e5e5] focus:outline-none text-sm sm:text-base placeholder:sm:text-base placeholder:text-sm focus:border-TopNavBG' />
            <input type="text" placeholder='Website' className='mb-[15px] sm:mb-[19px] h-[50px] pl-5 border border-[#e5e5e5] focus:outline-none text-sm sm:text-base placeholder:sm:text-base placeholder:text-sm focus:border-TopNavBG' />

            <textarea name="" id="" rows="3" placeholder='Message' className='mb-[15px] sm:mb-[19px] py-5 pl-5 border border-[#e5e5e5] focus:outline-none text-sm sm:text-base placeholder:sm:text-base placeholder:text-sm focus:border-TopNavBG'></textarea>

            <Button to="" title="Send Message" className="bg-TopNavBG text-white w-[165px]"/>
            </Flex>
        </form>
    </div>
  )
}
