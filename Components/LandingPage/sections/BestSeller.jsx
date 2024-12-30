import { useEffect, useState } from "react"

const BestSeller = ({setCartCount}) => {

 const [next,setNext] = useState(0);
 const [liked,setLiked] = useState([]);
 const [cart,setCart] = useState([]);

    const array = [
        {title:"Teliani",price:99.00,img:"../public/assets/wine.png",liked:false},
        {title:"MUKUZANI",price:89.00,img:"../public/assets/wine(1).png",liked:false},
        {title:"MANAVI",price:55.00,img:"../public/assets/wine(2).png",liked:false},
        {title:"Gurjaani",price:45.00,img:"../public/assets/wine(2).png",liked:false},
        {title:"Gremi",price:125.00,img:"../public/assets/wine.png",liked:false},
        {title:"Eniseli",price:230.00,img:"../public/assets/wine(1).png",liked:false},

    ]

    function cartLogic(index){
        if(!cart.includes(index)){
            setCart([...cart,index])
            setCartCount(prev => prev + 1);
        }else{
            setCart(cart.filter(item => item !== index))
            setCartCount(prev => prev - 1);
        }
    }

    return <div>
        <h1 className="font-Almendra text-6xl text-customBrown text-center">OUR BEST SPIRIT</h1>
        <p className="font-Baskerville text-sm text-center mt-5 text-[#9E845C]">Take A Look At Our Handmade Wine: </p>
    
        <section className="flex flex-col lg:flex-row items-center gap-24 lg:gap-10 mt-16">
     {array.map((result,index)=>{
        if(!next && index <= 2 || next && index > 2){ 
        return <div className="bg-[#ebd9b9] relative w-2/3 rounded p-3 py-7 pl-16 gap-10 flex flex-col max-w-[430px] min-w-[270px]">
            <img src={result.img} className="absolute top-[-25px] left-0 w-14"/>
            <h1 className="font-Baskerville text-2xl text-customBrown">{result.title}</h1>

            <section className="flex justify-between items-center">
                <p className="text-2xl font-Baskerville text-customBrown"><p className="text-sm font-Baskerville italic text-[#9E845C]">IN STOCK</p>{result.price}$</p>
                <div className="flex border-2 border-[#9E845C]">
                    <button className={!liked.includes(index) ? "border-r-2 border-[#9E845C] p-2":"border-r-2 border-[#9E845C] p-2 text-white bg-red-500"} onClick={()=>{liked.includes(index) ? setLiked(liked.filter(item => item !== index)) : setLiked([...liked,index])}}><i class="fa-regular fa-heart"></i></button>

                    <button className={!cart.includes(index) ? "p-2" : "p-2 bg-green-400 text-white"} onClick={()=> cartLogic(index)}><i class="fa-solid fa-cart-shopping"></i>
                    </button>

                </div>
            </section>
        </div>
        }
     })}

</section>

        <section className="flex gap-6 mt-20 items-center justify-center">
          <button className="text-5xl" onClick={() => setNext(!next)}><i class="fa-solid fa-circle-arrow-left"></i></button>

          <div className="flex gap-2 text-base">
          <p className={!next && "text-gray-300 scale-125"}><i class="fa-solid fa-circle"></i></p>
          <p className={next && "text-gray-300 scale-125"}><i class="fa-solid fa-circle"></i></p>
          </div>

          <button className="text-5xl" onClick={() => setNext(!next)}><i class="fa-solid fa-circle-arrow-right"></i></button>
        </section>
    </div>
}

export default BestSeller;