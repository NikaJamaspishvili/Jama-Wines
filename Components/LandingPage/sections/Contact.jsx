const Contact = () => {
    return <div className="bg-[url('public/images/village.svg')] bg-cover flex flex-row justify-between items-start gap-5 md:justify-around p-10">
         <section className="items-center flex justify-items-center gap-4 mr-auto max-[470px]:flex-col max-[470px]:text-center">
             <img className="w-20 " src="../public/Assets/logo.svg" alt="logo" />
             <h1 className="text-3xl font-Almendra text-customBrown]">Jama Wines</h1>
        </section>

        <div className="flex flex-col gap-10 text-left md:flex-row">
        <section>
            <h1 className="text-2xl font-Almendra text-customBrown border-b-2
            py-2 border-[#AF6900]">CONTACT US</h1>

            <div className="font-Baskerville flex flex-col gap-5 mt-5">
            <p className="flex flex-col gap-1"><i class="fa-solid fa-location-dot"></i> Kakheti,Eniseli</p>
            <p className="flex flex-col gap-1"><i class="fa-regular fa-envelope"></i> JamaWines@gmail.com</p>
            <p className="flex flex-col gap-1"><i class="fa-solid fa-phone"></i> +(123) 456-7890-456-7890</p>
            </div>
        </section>

        <section>
            <h1 className="text-2xl font-Almendra text-customBrown py-2 border-b-2 border-[#AF6900]">UPCOMING EVENTS</h1>
           <div className="flex flex-col gap-5 mt-4 font-Baskerville">
            <p className="flex flex-col gap-1 text-[#9E845C]"><label className="text-[#BB6500]">January 1, 2025</label> Vineyard Tour</p>
            <p className="flex flex-col gap-1 text-[#9E845C]"><label className="text-[#BB6500]">March 11, 2025</label> Wine Tasting</p>
            <p className="flex flex-col gap-1 text-[#9E845C]"><label className="text-[#BB6500]">August 23, 2025</label> Competition</p>
           </div>
        </section>
        </div>
    </div>
}

export default Contact;