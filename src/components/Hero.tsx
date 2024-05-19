import { Inter } from "next/font/google";
import Chat from "./Chat";

export const inter = Inter({
    subsets: ['latin'], 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Hero(){
    return (
        <div className={`${inter.className} flex`}>
            <h1>Hello World</h1>
            <Chat/>
        </div>
    )
} 