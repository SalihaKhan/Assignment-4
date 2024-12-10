import Image from "next/image";
import numbers from "@/app/assets/Numbers.png";
import rectangle from "@/app/assets/Rectangle 2.png";
import versache from "@/app/assets/Group.png";
import zara from "@/app/assets/zara-logo-1 1.png";
import gucci from "@/app/assets/gucci-logo-1 1.png";
import prada from "@/app/assets/prada-logo-1 1.png";
import kelvin from "@/app/assets/Group (1).png";

const Hero = () =>{
    return(
        <div>
            <div className="bg-[#F2F0F1] w-[1440px] h-[663px] mt-15 grid grid-cols-2 ">
            <div>
            <div className="w-[577px] h-[173px]  pl-32 pt-20">
                <h1 className="font-bold text-[64px] leading-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            </div>
            <div className="w-[545px] h-[33px] pl-32 pt-28">
                <p className="font-normal text-base leading-[22px] ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            </div>
            <div className="bg-[#000000] ml-[122px] rounded-[62px] mt-20 w-[210px] h-[52px]  py-4 px-[60px]">
                <button className="  text-[#FFFFFF] font-medium text-base  leading-[21.6px] h-[22px] w-[75px]"  >Shop Now</button>
            </div>
            <div className=" top-[607px] h-[74px]  w-[596px] ml-32 mt-10 gap-8">
                <Image src={numbers} alt="numbers" />
            </div>
            </div>
            <div>
            <div className="relative top-80">
                <Image src={rectangle} alt="Picture" className="w-[408] h-[613]"/>
            </div>
            </div>
           
          
            
        </div>
        <div className="bg-[#000000] w-[1440px] h-[122px] flex justify-around pt-9 px-20 gap-8 ">
            <div><Image src={versache} alt="logo" /></div>
            <div><Image src={zara} alt="logo" /></div>
            <div><Image src={gucci} alt="logo" /></div>
            <div><Image src={prada} alt="logo" /></div>
            <div><Image src={kelvin} alt="logo" /></div>

        </div>
        </div>

    )
};
export default Hero;