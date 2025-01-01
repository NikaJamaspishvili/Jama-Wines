import { div, input } from "framer-motion/client";
import { useEffect, useState } from "react";

const NewsLetter = () => {
 
 const [inputValue,setInputValue] = useState("");
 const [btnStatus,setBtnStatus] = useState('');

 useEffect(()=>{

 if(btnStatus === "loading"){
const timer = setTimeout(() => {
    setBtnStatus('done');
    setInputValue('');
  }, 5000);
 
 return () => clearTimeout(timer);
 } 

 if(btnStatus === "done"){
    const timer = setTimeout(() => {
        setBtnStatus('');
      }, 3000);
     
     return () => clearTimeout(timer);
}

 },[btnStatus]);

 function onClick(){
 if(btnStatus === ""){
    if(inputValue.trim() !== ""){
        setBtnStatus("loading");
    }else{
        alert("Please enter your email first!");
    } 
}
}

    return <div className={`max-w-[550px] mx-auto p-2 rounded-xl ${btnStatus === "loading" && "backgroundDiv"}`}>
      <div className="p-6 flex flex-col gap-5 text-center max-w-[550px] mx-auto z-10 bg-[#F5EBDA]">
        <h1 className="text-6xl font-Almendra text-customBrown">We Have Offer</h1>
        <p className="text-base font-Baskerville text-[#9E845C]">Send us your email and if you come up in random we will let you visit us for free!</p>

        <section className="mt-8 flex flex-col gap-4 items-center">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border-b-2 border-black w-3/4 bg-transparent text-center text-customBrown italic font-Baskerville text-base outline-none p-1" type="text" placeholder="Your Email..."/>
            <button className={`hover:scale-105 duration-150 bg-[#AF6900] text-[#FAF7F2] w-1/2 h-12 text-center font-Baskerville rounded ${btnStatus === "done" && "bg-green-400 circle"}`} onClick={onClick}>{btnStatus === "loading" ? <i class="fa-solid fa-spinner spinnerAnimation"></i> : btnStatus === "done" ? <i class="fa-solid fa-check"></i> : "SEND"}</button>
        </section>
     </div>
     </div> 
}

export default NewsLetter;