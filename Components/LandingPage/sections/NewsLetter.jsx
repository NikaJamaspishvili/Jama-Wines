const NewsLetter = () => {
    return <div className="flex flex-col gap-5 text-center max-w-[550px] mx-auto">
        <h1 className="text-6xl font-Almendra text-customBrown">We Have Offer</h1>
        <p className="text-base font-Baskerville text-[#9E845C]">Send us your email and if you come up in random we will let you visit us for free!</p>

        <section className="mt-8 flex flex-col gap-4 items-center">
            <input className="border-b-2 border-black w-3/4 bg-transparent text-center text-customBrown italic font-Baskerville text-base outline-none p-1" type="text" placeholder="Your Email..."/>
            <button className="bg-[#AF6900] text-[#FAF7F2] w-1/2 h-12 text-center font-Baskerville rounded">SEND</button>
        </section>
    </div>
}

export default NewsLetter;