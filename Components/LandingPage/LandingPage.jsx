import Navbar from "../Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import BestSeller from "./sections/BestSeller.jsx";
import Contact from "./sections/Contact.jsx";
import History from "./sections/History.jsx";
import QandA from "./sections/Q&A.jsx";
import WineSellar from "./sections/WineSellar.jsx";
import NewsLetter from "./sections/NewsLetter.jsx";

import { lazy,Suspense } from "react";
import { useState,useRef } from "react";

const Cart = lazy(()=>import("../CartComponent/Cart.jsx"));

function Home(){

 const [cartCount,setCartCount] = useState(0);
 const [showCart,setShowCart] = useState(false);
 const [cart,setCart] = useState([]);

 let homeRef = useRef();
 let historyRef = useRef();
 let bestsellerRef = useRef();
 let contactRef = useRef();

 function scrollToSection(section){
   if(section === "home"){
    homeRef.current.scrollIntoView({behavior:"smooth",block:"start"});
   }else if(section === "history"){
      const elementPosition = historyRef.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - 150, 
        behavior: "smooth",
      });

    }else if(section === "bestseller"){
      const elementPosition = bestsellerRef.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - 180,
        behavior: "smooth",
      });

   }else if(section === "contact"){
    contactRef.current.scrollIntoView({behavior:"smooth",block:"end"});
   }

 }

  return <div className=" flex flex-col gap-24">
<Suspense fallback={<div>loading...</div>}>
{showCart && <Cart setCartCount={setCartCount} cart={cart} setCart={setCart} setShowCart={setShowCart}/>
}
</Suspense>

    <Navbar cartCount={cartCount} scrollToSection={scrollToSection} setShowCart={setShowCart}/>
    <Hero ref={homeRef} scrollToSection={scrollToSection}/>
    <History ref={historyRef} scrollToSection={scrollToSection}/>
    <BestSeller setCartCount={setCartCount} cart={cart} setCart={setCart} ref={bestsellerRef}/>   
    <QandA />
    <WineSellar />
    <NewsLetter />
    <Contact ref={contactRef}/>
  </div>
}

export default Home;