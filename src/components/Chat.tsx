import Image from "next/image"
import Chatbox from "./Chatbox"

export default function Chat() {
    return (
        // <div className="absolute inset-y-0 right-0 w-[1200px] h-[710px] mr-4 mt-4 mb-4 bg-zinc-800 rounded">
        <div className="flex flex-wrap mr-4 mt-4 mb-4 bg-zinc-800 rounded min-h-screen w-full divide-y">
            
            <div className="flex flex-auto ">
                <div className="ml-6 mt-4">
                    <Image src={'/img/pfp.jpg'} alt="pfp" width={50} height={50} className="rounded-full flex flex-row"/>
                </div>
                <div className="ml-5 mt-6">
                    <h2 className="text-white text-2xl font-semibold">Piyush Paul</h2>
                </div>
            </div>
            <div className="w-full h-full mt-4 border-3">
                <div className="w-[377px] h-[81px] px-[23px] py-7 mt-8 ml-6 bg-zinc-900 rounded-[15px] justify-start items-center gap-2.5 inline-block">
                    <div className="w-[333px] self-stretch text-stone-300 text-[21px] font-normal font-['Inter']">Hey, what's <br /> ksdsd <br /> up!!</div>
                </div>
            </div>
        </div>
        
    )
}