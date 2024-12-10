

import Image from "next/image";
import shop from "@/app/assets/SHOP.CO.png"
import Search from "@/app/assets/SearchBar.png";
import cart from "@/app/assets/Cart.png";
import info from '@/app/assets/Info.png';

const Navbar = () => {
    return(
        <div>
        <div className="bg-[#000000] h-[38px] relative w-[1440px] ">
            <p className="text-[#FFFFFF] font-normal text-sm leading-[18.9px] top-[9px] left-[544px] absolute text-center">Sign up and get 20% off to your first order.<span className="underline underline-offset-2 font-medium divide-solid">Sign Up Now</span> </p>
        </div>


        <div className="h-[48px] bg-[#FFFFFF] my-5 left-[100px] gap-[40px] w-[1240px] relative flex justify-around items-center ">
        <div >
           <Image src={shop} alt="Shop" />
        </div>

        <div className="gap-6  space-x-4 font-normal leading-[21.6px] ">
        <span>Shop</span>
        <span>On Sale</span>
        <span>New Arrivals</span>
        <span>Brands</span>
        </div>

        <div className="flex bg-[#F0F0F0] py-[12px] px-[16px] gap-3 rounded-[62px]">
            <Image src={Search} alt="search" />
            <input type="text" placeholder="Search for products..." className=" bg-[#F0F0F0] w-[577px]" />
        </div>

        <div className="gap-[14px] inline-flex">
            <Image src={cart} alt="cart" /> 
            <Image src={info} alt="info" /> 
        </div>
    
        </div>
        </div>
    )

};
export default Navbar;