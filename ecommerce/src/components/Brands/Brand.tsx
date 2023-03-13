

const BrandsLogos = () => {
    return (<div className="flex flex-col md:flex-row lg:flex-row gap-8 content-center place-items-center justify-center mt-12"> <img className="w-32 md:w-32 lg:w-48 " src="/resources/logos/adidas.svg" alt="adidas logo" /> <img className="w-32 md:w-32 lg:w-48 " src="/resources/logos/Balenciaga.svg" alt="balenciaga logo" /> <img className="w-32 md:w-32 lg:w-48 " src="/resources/logos/Bukalapak.svg" alt="bukalapak logo" /> <img className="w-32 md:w-32 lg:w-48 " src="/resources/logos/gucci.svg" alt="gucci logo" /><img className="w-32 md:w-32 lg:w-48 " src="/resources/logos/Tokopedia.svg" alt="tokopedia logo" /></div>)
};


const Brands = () => {
    return (
        <div className="mt-12 flex flex-col justify-center content-center"><p className="manrope-font  text-base md:text-xl lg:text-2xl text-center">We collaborate with TOP Brands</p> <BrandsLogos /> </div>
    )
}

export default Brands