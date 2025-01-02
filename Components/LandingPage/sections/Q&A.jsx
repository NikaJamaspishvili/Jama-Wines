import { useState } from "react";

//I used css stylesheet in order to animate the website
import "./animation.css";

const QandA = () => {

 const [pressed,setPressed] = useState([]);

 const array = [
    {question:"What makes Jama Wines unique?",answer:"Our wines are crafted using traditional Kakhetian methods passed down for over 100 years."},
    {question:"Do you offer wine tasting?",answer:"Yes, we host wine tastings at our vineyard in Gremi,Eniseli and Yvareli!"},
    {question:"Are your wines organic?",answer:"Yes, we use natural and eco-friendly practices to produce our wines."},
    {question:"Can I order your wine online?",answer:"Absolutely! Visit our shop page to explore and order our wines directly."},
 ];

 function btnClick(index){
    if(pressed.includes(index)){
        setPressed(pressed.filter(item => item !== index));
    }else{
        setPressed([...pressed,index]);
    }
    }

return <div className="flex flex-col items-center md:flex-row gap-16 relative justify-between">
     <section className="flex flex-col gap-10 w-full">
      <h1 className="font-Almendra text-customBrown text-6xl text-center md:text-left">GET TO KNOW US</h1>

      <div className="border-2 border-black border-b-0">
      
    {array.map((result,index)=>{
return <section key={index} onClick={()=> btnClick(index)} className="border-b-2 border-black flex flex-col cursor-pointer p-3 gap-3">

<div className="flex flex-row justify-between  gap-2">
<h3 className="font-Baskerville text-customBrown text-xl ">{result.question}</h3>
<button className="text-xl">{pressed.includes(index) ? <i className="fa-solid fa-circle-minus"></i> : <i className="fa-solid fa-circle-plus"></i>}</button>
</div>

{pressed.includes(index) && <p className="text-[#9E845C] font-Baskerville text-sm pAnimate">{result.answer}</p>}
</section>

})} 
      </div>
      
     </section>

 <img className="md:w-1/2 w-2/3" src="../assets/Frame.png" alt="" />

    </div>

}
export default QandA;