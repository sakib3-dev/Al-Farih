import {
  FaEnvelopeOpen,
  FaFacebook,
  FaHeadphones,
  FaInstagram,
  FaLocationArrow,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Container from "../Container";
import Flex from "../Flex";

const title = "CUSTOMER SUPPORT";
const subTitle = "CONTACT INFO";
const customerSupportList = [
  { text: "Help And Ordering", link: "/" },
  { text: "Privacy Policy", link: "/" },
  { text: "Return & Cancellation", link: "/" },
  { text: "Delivery Schedule", link: "/" },
  { text: "Get a Call", link: "/" },
  { text: "Online Enquiry", link: "/" },
  { text: "My Account", link: "/" },
];

export default function Footer() {
  return (
    <footer className="px-4 bg-CountDown">
      <Container>
        <Flex className="flex-col md:flex-row  justify-between">

            {/* logo and desc */}
          <div className="logo-desc md:w-2/12">
            {/* logo */}
            <div className="logo mb-6 py-3">
              <Image className="md:w-[150px] w-[80px]" src={Logo} alt="logo" />
            </div>
            <div className="mb-3">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus fugiat commodi placeat.
              </p>
            </div>
            <Flex className="gap-2">
              <FaFacebook /> <FaTwitter /> <FaYoutube /> <FaInstagram />
              <FaWhatsapp />
            </Flex>
          </div>

          {/* customer support  */}
          <div className="customer text-left py-3">
            {/* title  */}
            <div className="title mb-6 underline text-primary">
              <h3>{title}</h3>
            </div>

            {/* list  */}
            <div className="text-left w-full">
              <ul>
                {customerSupportList.map((val, i) => (
                  <li key={i} className="pb-3">
                    <a href={val.link}>{val.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* contact part  */}
          <div className="contact py-3">
            <div className="mb-6 text-primary underline">
              <h3>{subTitle}</h3>
            </div>

            <div className="">
              <div>
                <Flex className="items-center gap-2">
                  <FaLocationArrow /> Location
                </Flex>
                <div>
                  <p>205 Olazu Familla, Herba Street Front USA</p>
                </div>
              </div>

              <div className="mt-4">
                <Flex className="items-center gap-2">
                  <FaEnvelopeOpen /> Email
                </Flex>
                <div>
                  <p>thesakibdev@gmail.com</p>
                </div>
              </div>

              <div className="mt-4">
                <Flex className="items-center gap-2">
                  <FaHeadphones /> CALL US
                </Flex>
                <div>
                  <p>+88016100000</p>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </footer>
  );
}
