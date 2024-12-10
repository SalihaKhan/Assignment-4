import shop2 from "@/app/assets/SHOP.CO (2).png";
import Image from "next/image";
import footer from "@/app/assets/footer.png";
import social from "@/app/assets/Social.png";
import company from "@/app//assets/Company.png";
import resources from "@/app/assets/Resources.png";
import faq from "@/app/assets/FAQ.png";
import help from "@/app/assets/Help.png";
import giants from "@/app/assets/giants.png";


const Footer = () => {
    return(
        <div className="bg-[#F0F0F0]  w-[1441px]  h-[499px]"> 
            <div className="ml-32 mt-28 "><Image src={footer} alt="footer" /></div>
            <div className=" -mt-20 flex space-x-3">
                <div className="pt-36 pl-32">
                    <div>
                    <Image src={shop2} alt="shop" />
                    </div>
                    <div>
                        <p className="w-72 mt-6">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    </div>
                    <div >
                    <Image src={social} alt="shop" className="mt-8" />
                    </div>
                </div>

                <div>
                    <div className="flex flex-col pt-36 pl-20 space-y-4">
                        <div><Image src={company} alt="company" /></div>
                        <span className="font-normal">About</span>
                        <span className="font-normal">Features</span>
                        <span className="font-normal">Work</span>
                        <span className="font-normal">Careers</span>   
                    </div> 
                </div>


                <div>
                    <div className="flex flex-col pt-36 pl-20 space-y-4">
                        <div><Image src={help} alt="company" /></div>
                        <span className="font-normal">Customer Support</span>
                        <span className="font-normal">Delivery Details</span>
                        <span className="font-normal">Terms and Condition</span>
                        <span className="font-normal">Privacy Policy</span>   
                    </div> 
                </div>


                

                <div>
                    <div className="flex flex-col pt-36 pl-20 space-y-4">
                        <div><Image src={faq} alt="company" /></div>
                        <span className="font-normal">Account</span>
                        <span className="font-normal">Manage Deliveries</span>
                        <span className="font-normal">Orders</span>
                        <span className="font-normal">Payments</span>   
                    </div> 
                </div>


                
                <div>
                    <div className="flex flex-col pt-36 pl-20 space-y-4">
                        <div><Image src={resources} alt="company" /></div>
                        <span className="font-normal">Free eBooks</span>
                        <span className="font-normal">Development Tutorial</span>
                        <span className="font-normal">How to -Blog</span>
                        <span className="font-normal">Youtube Playlist</span>   
                    </div> 
                </div>
               
            </div>
      
            <hr className="w-[1240px] ml-32 -mt-32"/>
            <div className="flex justify-between items-center flex-auto pt-36">
            <div className="ml-32">Shop.co © 2000-2023, All Rights Reserved</div>
            <div><Image src={giants} alt="company" className="mr-16" /></div>
            </div>

        </div>

    )
};
export default Footer;