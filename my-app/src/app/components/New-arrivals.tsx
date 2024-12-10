import shirt from "@/app/assets/blacktshirt.png";
import Image from "next/image";
import stars from "@/app/assets/Frame 35 (1).png";
import frame120 from "@/app/assets/Frame120.png";
import star from "@/app/assets/Star3.5.png";
import frame from "@/app/assets/Frame 59.png";
import jeans from "@/app/assets/Jeans.png";
import checkshirt from "@/app/assets/Checktshirt.png";
import num from "@/app/assets/$180.png";
import orangeshirt from "@/app/assets/orangeshirt.png";
import orangeprice from "@/app/assets/orangeprice.png";

const Arrivals = () => {
    return(
        <div> 
         <div><h1 className="font-bold leading-[57.6px] text-[48px] text-center pt-8">New Arrivals</h1></div>
         <div className="flex space-x-3">
         <div className="ml-32">
            <div className="bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px] mt-10  ">
                <div><Image src={shirt} alt="shirt" /></div>
            </div>
            <span><p className="font-bold">T-SHIRT WITH TAPE DETAILS</p></span>
            <span><Image src={stars} alt="shirt" /></span>
            <div>
                <span><Image src={frame120} alt="120" /></span>   
            </div> 
         </div>



         <div className="">
            <div className="bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px] mt-10  ">
                <div><Image src={jeans} alt="jeans" /></div>
            </div>
            <span><p className="font-bold">SKINNY FIT JEANS</p></span>
            <span><Image src={star} alt="star" /></span>
            <div>
                <span><Image src={frame} alt="120" /></span>   
            </div> 
         </div>

  
         <div className="">
            <div className="bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px] mt-10  ">
                <div><Image src={checkshirt} alt="shirt" /></div>
            </div>
            <span><p className="font-bold">CHECKERED SHIRT</p></span>
            <span><Image src={stars} alt="star" /></span>
            <div>
                <span><Image src={num} alt="180" /></span>   
            </div> 
         </div>

  
         <div >
            <div className="bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px] mt-10  ">
                <div><Image src={orangeshirt} alt="shirt" /></div>
            </div>
            <span><p className="font-bold">SLEEVE STRIPED T-SHIRT</p></span>
            <span><Image src={stars} alt="star" /></span>
            <div>
                <span><Image src={orangeprice} alt="130" /></span>   
            </div> 
         </div>
         </div>

        </div>
      

    )
};

export default Arrivals;