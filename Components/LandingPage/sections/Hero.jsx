const Hero = () => {
    return <div className="flex flex-col md:flex-row gap-10 justify-between items-center bg-[url('../../../public/images/village.svg')] bg-cover mt-[120px]">
    <section className="flex flex-col items-center md:items-start max-w-[560px] gap-16 md:gap-20">
     <div className="flex flex-col gap-8">
     <h3 className="text-xl text-[#AF6900] font-Baskerville text-center md:text-left">WINEMAKING TRADITION</h3>
     <h1 className="text-4xl md:text-6xl text-center md:text-left font-Almendra text-customBrown">Jamaspishvili wines located in Kakheti</h1>
     </div>
     <div className="flex flex-col gap-8 items-center md:items-start">
     <p className="text-base text-center md:text-left italic text-customBrown font-Baskerville">Jama Wines brings you the timeless tradition of Kakheti winemaking, passed down through generations. Taste the heritage of our ancestors in every bottle.</p>
     <button className="border-y-2 p-3 border-[rgb(175,105,0)] font-Baskerville w-1/2">SEE HOW IT MADE</button>
     </div>
    </section>
    <img className="md:w-[45%] md:min-w-[350px]" src="../public/Assets/bottle_hero.svg" alt="wine bottle artwork" />
    </div>
}

export default Hero;