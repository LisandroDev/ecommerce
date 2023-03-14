import { TbTruckDelivery } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Delivery = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col place-items-center mt-8">
        <TbTruckDelivery  className="text-[#3C9379] w-16 h-16"/> <p className="text-base font-extralight  md:text-xl lg:text-2xl manrope-font text-center">Free Delivery</p>
      </div>{" "}
      <div className="mt-6 text-[#535A56] w-18 text-sm text-center">
        Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod
        tempor
      </div>
    </div>
  );
};


const Trusted = () => {
  return (<div>
    <div className="flex flex-col place-items-center mt-8">
      <VscWorkspaceTrusted className="text-[#3C9379] w-16 h-16 " /> <p className="text-base font-extralight  md:text-xl lg:text-2xl manrope-font text-center">Trusted Platform</p>
    </div>{" "}
    <div className="mt-6 text-[#535A56] text-sm text-center">
      Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod
      tempor
    </div>
  </div>)
}

const Reasons = () => {
  return (
    <div className="w-full flex flex-col justify-center text-3xl mt-24">
      {" "}
      <div className="text-base font-extralight  md:text-xl lg:text-2xl manrope-font text-center">
        Why Choose <span className="text-[#3C9379]">N</span>eithaClothes?
      </div>
      <div className="flex flex-row gap-x-8 justify-center mt-8">
      <Delivery />
      <Trusted />
      </div>
   {" "}
    </div>
  );
};

export default Reasons;
