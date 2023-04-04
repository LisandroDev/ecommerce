const Footer = () => {
    return (
        <footer className="flex mt-auto pt-12 mr-8 ml-8 mb-8 justify-around">
            <div >
                <div className="logo font-bold text-base md:text-3xl">
                    <span className="text-[#3C9379]">N</span>eithaClothes
                </div>
                <div className="mt-6 text-[#535A56] w-1/2 text-xs hidden md:block md:text-sm" >Neithaclothes is an online store dealing with all product
                    Neithaclothes provide cheap, high quality, products to
                    customers</div>
                <div className="mt-6 text-[#535A56] w-1/2 text-xs  md:hidden md:text-sm">Shop affordable, high-quality products at Neithaclothes online!</div>
            </div>
            <div>
                <div className="text-base font-extralight  md:text-xl lg:text-2xl manrope-font ">Connect Us</div>
                <div className="text-[#535A56] text-xs md:text-sm"><p>support@neithaclothes.com</p><p>+1-202-555-0187</p><p>123 Fake Street</p></div>
            </div>
        </footer>
    );
};

export default Footer;
