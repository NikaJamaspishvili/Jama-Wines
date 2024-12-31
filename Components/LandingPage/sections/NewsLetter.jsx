import { input } from "framer-motion/client";
import { useState } from "react";

const NewsLetter = () => {
 
 const [inputValue,setInputValue] = useState("");

 function btnClick(){
 setInputValue('');
 }

    return <div className="p-4 flex flex-col gap-5 text-center max-w-[550px] mx-auto">
        <h1 className="text-6xl font-Almendra text-customBrown">We Have Offer</h1>
        <p className="text-base font-Baskerville text-[#9E845C]">Send us your email and if you come up in random we will let you visit us for free!</p>

        <section className="mt-8 flex flex-col gap-4 items-center">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border-b-2 border-black w-3/4 bg-transparent text-center text-customBrown italic font-Baskerville text-base outline-none p-1" type="text" placeholder="Your Email..."/>

            <button className="hover:scale-105 duration-150 bg-[#AF6900] text-[#FAF7F2] w-1/2 h-12 text-center font-Baskerville rounded btnAnimation" onClick={btnClick}>SEND</button>
        
        </section>
     </div>
}

export default NewsLetter;