import "./cart.css";
import { useEffect,useState } from "react";

function Cart({setCartCount,setShowCart,cart,setCart}){

 const [value,setValue] = useState(0);
 const [checkedOut,setCheckedOut] = useState(false);

useEffect(()=>{

setValue(0);
 
array.map((result,index)=>{
    if(cart.includes(index)){
        setValue(prev => prev + result.price);
    }
}) 
},[])

useEffect(()=>{

 if(checkedOut){
    const timer = setTimeout(()=>{
        setCart([]);
        setCartCount(0);
    },5000)

    return ()=>clearInterval(timer);
}

},[checkedOut])

    const array = [
        {title:"Teliani",price:99.00,img:"../assets/wine.png",},
        {title:"MUKUZANI",price:89.00,img:"../assets/wine(1).png",},
        {title:"MANAVI",price:55.00,img:"../assets/wine(2).png",},
        {title:"Gurjaani",price:45.00,img:"../assets/wine(2).png",},
        {title:"Gremi",price:125.00,img:"../assets/wine.png",},
        {title:"Eniseli",price:230.00,img:"../assets/wine(1).png",},
    ]

  function smallCheckout(id){
   setValue(prev => prev - array[id].price);
   setCart(cart.filter(item => item !== id));
   setCartCount(prev => prev - 1);
  }

    return <div className="entrance overflow-y-auto fixed w-[90%] h-[90%] max-w-[1300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-30 rounded-2xl items-center flex flex-col gap-10 bg-[#F5EBDA] border-4 border-[#161006] py-10">
      <button className="absolute right-5 top-5 text-4xl" onClick={()=>setShowCart(false)}><i class="fa-solid fa-circle-xmark text-red-500"></i></button>

      <h1 className= "hidden md:block w-full text-7xl text-center py-5 font-Almendra border-b-2 border-gray-500">Cart Items</h1>

     {cart.length > 0 ? <><section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 w-[80%] justify-items-center max-md:mt-20
      max-xl:max-w-[660px]">

    {cart.map((id,index)=>{
        return  <div key={index} className="bg-[#ebd9b9] relative w-2/3 rounded p-3 py-7 pl-16 gap-10 flex flex-col max-w-[430px] min-w-[270px]">
        <img src={[array[id].img]} className="absolute top-[-25px] left-0 w-14"/>
        <h1 className="font-Baskerville text-2xl text-customBrown">{array[id].title}</h1>

        <section className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
        <p className="text-sm font-Baskerville italic text-[#9E845C]">IN STOCK</p>
        <p className="text-2xl font-Baskerville text-customBrown">{array[id].price}$</p>
          </div>
          <button className="bg-green-500 rounded-xl text-white p-2 font-Almendra text-xl hover:scale-105 duration-100" onClick={()=>smallCheckout(id)}>checkout</button>
        </section>
    </div>
    })}
      </section>

      <section className="flex flex-col items-center gap-5 mt-10">
        <h1 className="font-Almendra text-3xl">Total: <span className="font-serif text-red-500">{value}$</span></h1>
        <button className={`${checkedOut && "btnAnimation"} font-Baskerville text-xl bg-green-600 text-white p-3`} onClick={()=>setCheckedOut(true)}>{checkedOut ? <i class="fa-solid fa-check"></i> : "CHECKOUT"}</button>
      </section></>: <section className="flex flex-col w-full h-full items-center justify-center text-red-500 gap-5">
         <h1 className="text-3xl font-sans">Cart is Empty</h1>
         <i class="fa-solid fa-cart-arrow-down text-6xl"></i>
        </section>}
    </div>
}

export default Cart;