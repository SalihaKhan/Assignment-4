import Image from "next/image";
import "@/app/fonts/css/Satoshi.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Arrivals from "./components/New-arrivals";
import Topselling from "./components/topselling";
import Dressstyle from "./components/dressstyle";
import Feedback from "./components/feedback";
import Footer from "./components/footer";


export default function Home (){
  return(
    <div className='Satoshi-Light '  style= {{fontFamily:"Satoshi-Light"}}>
      <Navbar />
      <Hero />
      <Arrivals />
      <Topselling />
      <Dressstyle />
      <Feedback />
      <Footer />
    </div>

  )
};