import "./LandingPage/style.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Navbar = ({cartCount,scrollToSection}) => {

 const [clicked, setClicked] = useState(false);

 const navigate = useNavigate();

 function btnClick(title){

  scrollToSection(title);

  if(window.innerWidth < 768) setClicked(false);
 }

    return <div className="bg-primary flex justify-end md:justify-between gap-10 fixed w-[95%] md:w-[90%] max-w-[1300px] mx-auto z-20 md:py-1 py-4">
         <section className="hidden md:visible items-center justify-items- md:flex gap-4">
             <img className="w-20 " src="../public/Assets/logo.svg" alt="logo" />
             <h1 className="text-3xl font-Almendra text-customBrown]">Jama Wines</h1>
         </section>
         
         <section className=" flex md:flex-row md:gap-20 items-center gap-6"> 
    <button className={`md:hidden right-20 text-4xl z-20 transition-all duration-300 ease-in ${clicked ? 'rotate-180' : 'rotate-0'}`}
       onClick={() => setClicked(!clicked)}><i className="fa-solid fa-bars"></i></button>
            {clicked || window.innerWidth > 768 ? <div className="font-Almendra fixed top-0 left-0 w-full h-full flex flex-col gap-14 justify-center items-center text-6xl text-[#623D2A] bg-white md:relative md:p-0 md:bg-transparent md:text-xl md:top-0 md:flex-row md:gap-6 navbarDiv z-10">
           <p className="cursor-pointer" onClick={()=>btnClick('home')}>Home</p>
           <p className="cursor-pointer" onClick={()=>navigate('/shop')}>Shop</p>
           <p className="cursor-pointer" onClick={()=>btnClick('history')}>History</p>
           <p className="cursor-pointer" onClick={()=>btnClick('bestseller')}>Bestseller</p>
           <p className="cursor-pointer" onClick={()=>btnClick('contact')}>Contact</p>
            </div>:null}
   <div className="w-10 cursor-pointer relative z-20" onClick={()=>navigate('/cart')}>
   <img className="w-8 cursor-pointer" src="../public/Assets/cart icon.svg" alt="cart icon" />
   <span className="absolute md:right-[-5px] right-0 top-[-5px] bg-[#623D2A] text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">{cartCount}</span>
   </div>

         </section>
    </div>
}

export default Navbar;