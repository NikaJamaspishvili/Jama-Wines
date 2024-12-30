import Navbar from "../Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import BestSeller from "./sections/BestSeller.jsx";
import Contact from "./sections/Contact.jsx";
import History from "./sections/History.jsx";
import QandA from "./sections/Q&A.jsx";
import WineSellar from "./sections/WineSellar.jsx";
import NewsLetter from "./sections/Newsletter.jsx";

import { useState } from "react";

function Home(){

 const [cartCount,setCartCount] = useState(0);

  return <div className=" flex flex-col gap-24">
    <Navbar cartCount={cartCount}/>
    <Hero />
    <History />
    <BestSeller setCartCount={setCartCount}/>   
    <QandA />
    <WineSellar />
    <NewsLetter />
    <Contact />
  </div>
}

export default Home;