import { forwardRef } from "react";

import {motion} from "framer-motion";

const Hero = forwardRef((props,ref) => {

 const parentVariants = {
     visible:{
         opacity:1,
         transition:{
             duration:0.5,
             staggerChildren: 0.6
          }
     },
     hidden:{
          opacity:0,
     }
 }

 const childVariants={
     visible:{opacity:1,y:0},
     hidden:{opacity:0,y:-100}
 }

return <div ref={ref} className="flex flex-col md:flex-row gap-10 justify-between items-center bg-[url('../../../public/images/village.svg')] bg-cover mt-[120px]">
    <motion.section variants={parentVariants} initial="hidden" animate="visible" className="flex flex-col items-center md:items-start max-w-[560px] gap-16 md:gap-20">
     <div className="flex flex-col gap-8">
     <motion.h3 variants={childVariants} className="text-xl text-[#AF6900] font-Baskerville text-center md:text-left">WINEMAKING TRADITION</motion.h3>
     <motion.h1 variants={childVariants} className="text-4xl md:text-6xl text-center md:text-left font-Almendra text-customBrown">Jamaspishvili wines located in Kakheti</motion.h1>
     </div>
     <div className="flex flex-col gap-8 items-center md:items-start">
     <motion.p variants={childVariants} className="text-base text-center md:text-left italic text-customBrown font-Baskerville">Jama Wines brings you the timeless tradition of Kakheti winemaking, passed down through generations. Taste the heritage of our ancestors in every bottle.</motion.p>
     <motion.button variants={childVariants}  whileHover={{marginLeft:"20px",scale:1.02}} className="border-y-2 p-3 border-[rgb(175,105,0)] font-Baskerville w-1/2 hover:scale-110" onClick={()=> props.scrollToSection("history")}>SEE HOW IT IS MADE</motion.button>
     </div>
    </motion.section>
    <img className="md:w-[45%] md:min-w-[350px]" src="../public/Assets/bottle_hero.svg" alt="wine bottle artwork" />
    </div>
})

export default Hero;