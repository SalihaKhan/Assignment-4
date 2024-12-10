import casual from "@/app/assets/Casual.png";
import Image from "next/image";
import heading from "@/app/assets/BROWSE BY dress STYLE.png";
import formal from "@/app/assets/Formal.png";
import party from "@/app/assets/party.png";
import gym from "@/app/assets/gym.png";
const Dressstyle = () => {
    return(

        <div className="bg-[#F0F0F0] w-[1239px] h-[866px] ml-32 rounded-[40px] mt-32 ">
            <div className="pt-10 pl-64" ><Image src={heading} alt="heading" /></div>
            <div className="flex">
            <div className="mt-14 ml-20">
                <Image src={casual} alt="casual" />
            </div>
            <div className="m-4 mt-14">
                <Image src={formal} alt="formal" />
            </div>
            </div>
            <div className="flex">
            <div className="ml-20 ">
                <Image src={party} alt="party" />
            </div>
            <div className="ml-4">
                <Image src={gym} alt="gym" />
            </div>
            </div>

        </div>
    )
};

export default Dressstyle;