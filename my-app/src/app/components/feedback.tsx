import Image from "next/image";
import customers from "@/app/assets/OUR HAPPY CUSTOMERS.png";
import box1 from "@/app/assets/box1.png";
import box2 from "@/app/assets/box1.png";
import box3 from "@/app/assets/box1.png";
const Feedback = () =>{
    return(
        <div>
            <div className="ml-32 mt-20">
                <Image src={customers} alt="customers" />
            </div>
            <div className="flex justify-center">
            <div className="ml-32 mt-20">
                <Image src={box1} alt="customers" />
            </div>
            <div className="ml-32 mt-20">
                <Image src={box2} alt="customers" />
            </div>
            <div className="ml-32 mt-20">
                <Image src={box3} alt="customers" />
            </div>
            </div>
            
        </div>

    )
};
export default Feedback;