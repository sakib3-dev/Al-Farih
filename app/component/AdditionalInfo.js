import React from "react";
import { FaMoneyBillAlt, FaTruck, FaUndo, FaRegClock } from "react-icons/fa";
import Container from "./Container";
import Flex from "./Flex";

export default function AdditionalInfo({ className }) {
  return (
    <div className={`px-4 xl:py-20 ${className}`}>
      <Container>
        <Flex className="flex-col lg:flex-row mx-auto items-center gap-5 lg:gap-0">
          {/* shipping */}
          <Flex className="gap-4 items-center bg-benefitBG px-5 w-[285px] py-8">
            <FaTruck size={25} className="text-primary" />
            <div className="">
              <h3 className="font-medium text-xs text-TopNavBG lg:text-sm">
                FREE SHIPPING
              </h3>
              <p className="text-[#51545f] text-xs">
                Suffered Alteration in Some Form
              </p>
            </div>
          </Flex>

          {/* Delivery */}
          <Flex className="gap-4 items-center bg-benefitBG px-5 w-[285px] py-8">
            <FaMoneyBillAlt size={25} className="text-primary" />
            <div className="">
              <h3 className="font-medium text-xs text-TopNavBG lg:text-sm">
                CASH ON DELIVERY
              </h3>
              <p className="text-[#51545f] text-xs">
                The Internet Tend To Repeat
              </p>
            </div>
          </Flex>

          {/* Return */}
          <Flex className="gap-4 items-center bg-benefitBG px-5 w-[285px] py-8">
            <FaUndo size={25} className="text-primary" />
            <div className="">
              <h3 className="font-medium text-xs text-TopNavBG lg:text-sm">
                45 DAYS RETURN
              </h3>
              <p className="text-[#51545f] text-xs">
                Making it Look Like Readable
              </p>
            </div>
          </Flex>

          {/* Opening */}
          <Flex className="gap-4 items-center bg-benefitBG px-5 w-[285px] py-8">
            <FaRegClock size={25} className="text-primary" />
            <div className="">
              <h3 className="font-medium text-xs text-TopNavBG lg:text-sm">
                OPENING ALL WEEK
              </h3>
              <p className="text-[#51545f] text-xs">8AM - 09PM</p>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
