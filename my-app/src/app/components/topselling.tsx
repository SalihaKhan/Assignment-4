import greenshirt from "@/app/assets/greenshirt.png";;
import Image from "next/image";
import frame35 from "@/app/assets/Frame 35.png";
import frame212 from "@/app/assets/$212 (1).png";
import frame40 from "@/app/assets/Frame 40.png";
import frame from "@/app/assets/$145.png";
import courageshirt from "@/app/assets/courageshirt.png";
import short from "@/app/assets/short.png";
import stars from "@/app/assets/$80.png";
import jean from "@/app/assets/fadedjean.png";
import price from "@/app/assets/210.png";
import frame232 from "@/app/assets/$232.png"
import button from "@/app/assets/button.png";
import frame80 from "@/app/assets/$80.png";
import view from "@/app/assets/View all.png";

const Topselling = () => {
    return(
        <div> 
         <div><h1 className="font-bold leading-[57.6px] text-[48px] text-center pt-8">New Arrivals</h1></div>
         <div className="flex space-x-3">
         <div className="ml-32">
            <div className="bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px] mt-10  ">
                <div><Image src={greenshirt} alt="shirt" /></div>
            </div>
            <span><p className="font-bold">VERTICAL STRIPED SHIRT</p></span>
            <span><Image src={frame35} alt="shirt" /></span>
            <div className="flex space-x-3">
                <span><Image src={frame212} alt="212" /></span>   
                <span><Image src={frame232} alt="232" /></span> 
                <span><Image src={button} alt="btn" /></span> 
            </div> 
         </div>



         <div className="">
            <div className="bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px] mt-10  ">
                <div><Image src={courageshirt} alt="jeans" /></div>
            </div>
            <span><p className="font-bold">COURAGE GRAPHIC T-SHIRT</p></span>
            <span><Image src={frame40} alt="star" /></span>
            <div>
                <span><Image src={frame} alt="145" /></span>   
            </div> 
         </div>

  
         <div className="">
            <div className="bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px] mt-10  ">
                <div><Image src={short} alt="shirt" /></div>
            </div>
            <span><p className="font-bold">CHECKERED SHIRT</p></span>
            <span><Image src={frame40} alt="star" /></span>
            <div>
                <span><Image src={frame80} alt="80" /></span>   
            </div> 
         </div>

  
         <div >
            <div className="bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px] mt-10  ">
                <div><Image src={jean} alt="jeans" /></div>
            </div>
            <span><p className="font-bold">FADED SKINNY JEANS</p></span>
            <span><Image src={frame40} alt="star" /></span>
            <div>
                <span><Image src={price} alt="210" /></span>   
            </div> 
         </div>
         </div>

         <div><button className="ml-[630px] mt-5"><Image src={view} alt="btn" /></button></div>

        </div>
      

    )
};

export default Topselling;