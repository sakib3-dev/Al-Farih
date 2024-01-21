import AdditionalInfo from "./component/AdditionalInfo";
import Banner from "./component/Home/Banner";
import BestSeller from "./component/Home/BestSeller";
import Category from "./component/Home/Category";
import CountDown from "./component/Home/CountDown";
import LatestBlog from "./component/Home/LatestBlog";
import NewArrival from "./component/Home/NewArrival";

export default function Home() {
  return (
    <main className="py-20 md:py-32">
      <Banner/>
      <Category/>
      <NewArrival/>
      <CountDown/>
      {/* <BestSeller/> */}
      <AdditionalInfo/>
      <LatestBlog/>
    </main>
  )
}
