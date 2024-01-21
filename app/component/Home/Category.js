import Link from 'next/link'
import WomenBG from "@/app/assets/images/banner_1.jpg"
import Accessories from "@/app/assets/images/banner_2.jpg"
import Men from "@/app/assets/images/banner_3.jpg"
import Container  from '../Container'
import  Flex  from '../Flex'
import Image from 'next/image'

export default function Category() {
  return (
    <div>
        <Container>
            <Flex className="flex-col md:flex-row items-center px-4 gap-8 mt-[30px]">
                 {/* women */}
                 <div className="women relative">
                    <Image src={WomenBG} alt="banner" />
                    <Link href="/shop" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-TopNavBG px-6 py-2">WOMEN'S</Link>
                </div>

                {/* ACCESSORIES'S */}
                <div className="ACCESSORIES relative">
                    <Image src={Accessories} alt="banner" />
                    <Link href="/shop" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-TopNavBG px-6 py-2">ACCESSORIES'S</Link>
                </div>

                {/* MEN'S */}
                <div className="Men relative">
                    <Image src={Men} alt="banner" />
                    <Link href="/shop" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-TopNavBG px-6 py-2">MEN'S</Link>
                </div>
            </Flex>
        </Container>
    </div>
  )
}
