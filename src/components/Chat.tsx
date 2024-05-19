import Image from "next/image"

export default function Chat() {
    return (
        <div className="absolute inset-y-0 right-0 w-[1200px] h-[710px] mr-4 mt-4 mb-4 bg-zinc-800 rounded">
            <section>
                {/* <div className="bg-zinc-300 w-20 h-20 rounded-full"></div> */}
                <Image src={'/img/pfp.jpg'} alt="pfp" width={50} height={50}/>
                <h2 className="text-white ml-8 mt-5 text-2xl">Piyush Paul</h2>
            </section>
        </div>   
    )
}