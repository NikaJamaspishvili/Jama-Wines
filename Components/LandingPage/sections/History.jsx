import { forwardRef } from "react";

const History = forwardRef((props,ref) => {

 const array = [
   {count:1,title:"VINEYEARD",description:"Visit and take a tour"},    
   {count:2,title:"PRODUCT",description:"Old family recipes"},
   {count:3,title:"HISTORY",description:"Meet a tradition that lasts"}
  ];

 const array2  = [
    {id:1,title:"TELIANI",description:"Famous white wine with Rkatsiteli and green",img:"../images/mwvane.jpg"},
    {id:2,title:"MUKUZANI",description:"Famous wine made from Saferavi grapes",img:"../images/saferavi.avif"},
    {id:3,title:"MANAVI",description:"It is made from the green variety grown in the Manavi",img:"../images/saferavi.jpg"},
 ];

   return <div ref={ref} className="flex flex-col gap-20 bg-[#F5EBDA]">
        <section className="flex flex-col md:flex-row md:justify-around gap-10 m-auto md:w-full max-w-[850px]">
         {array.map((result,index)=>{
        return <div className="flex items-center gap-2">
        <h1 className="text-7xl md:text-5xl text-[#AF6900] font-Almendra">0{result.count}.</h1>
        <div className="flex flex-col border-b-2 border-[#AF6900] gap-2 p-2">
            <h2 className="text-xl md:flex-base text-[#482817] font-Baskerville">{result.title}</h2>
            <p className="text-[#9E845C] font-Baskerville italic text-lg md:text-sm">{result.description}</p>
        </div>
        </div>
         })} 
        </section>

        <section className="flex flex-col items-center md:flex-row md:justify-around w-full gap-5 relative">
            <img className="absolute top-1/3 right-[-100px] w-1/2 rounded max-md:hidden" src="../images/village(2).png" alt="" />
            <img className="absolute top-1/3 left-[200px]" src="../assets/tree.png" alt="" />
            <div className="flex flex-col items-center md:items-start gap-5 md:gap-7">
            <h1 className="text-6xl text-customBrown font-Almendra text-center md:text-left">OUR HISTORY</h1>
            <p className="text-center md:text-left text-[#9E845C] text-sm font-Baskerville max-w-[500px]">For nearly 100 years, Jama Wines has upheld the proud tradition of our ancestors, crafting exceptional wines with unwavering dedication to quality. From the very beginning, we have perfected the art of winemaking, preserving Kakheti's rich heritage in every bottle. Our wines have received high praise from many famous Georgian and European connoisseurs who have cherished and celebrated their exquisite taste.</p>
            <button onClick={()=> props.scrollToSection("bestseller")} className="text-[#FAF7F2] bg-[#AF6900] rounded w-1/2 p-3 text-xl font-Baskerville hover:scale-[1.02] hover:ml-[20px] duration-200 z-10">SEE MORE</button>
            </div>

           <img className="rounded md:w-1/2 max-w-[400px]  md:max-w-[600px]" src="../images/history_section_image.jpg" alt="" />
        </section>

        <section className="flex flex-col gap-10">
       <h1 className="text-center text-6xl text-customBrown font-Almendra">Wine Types We Offer: </h1>
       <div className="flex flex-col md:flex-row gap-7 text-center">
        {array2.map((result,index)=> <div key={result.id} className="flex flex-col gap-3 p-2 bg-[#ebd9b9] rounded-lg md:w-full">
        <h1 className="font-Baskerville text-2xl text-customBrown">{result.title}</h1>
        <p className="font-Baskerville italic text-[#9E845C]">{result.description}</p>
       <img className="rounded-xl max-w-[400px] md:w-[100%] m-auto" src={result.img}/>
       </div>
       )}
        </div>
        </section>
    </div>
})


export default History;