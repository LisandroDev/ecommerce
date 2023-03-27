import "./Landing.css";

const Landing = () => {
  return (
    <div className="flex flex-row mt-4">
      <div className="basis-1/3 flex flex-col justify-center ml-12">
        <span className="landing-font text-sm md:text-5xl">
          Best place to buy, <div className="text-[#3C9379]">Everything!</div>
        </span>
        <span className="mt-6 text-[#535A56] w-55 text-xs">
          At NeithaClothes, you can shop for all your favorite beauty brands,
          clothes, household products and more at a single place.
        </span>{" "}
        <button className="mt-6 rounded-full bg-[#3C9379] text-white text-sm  h-6 landing-font md:w-44 md:h-12 ">
          Shop now!{" "}
        </button>
      </div>
      <div className="container mx-auto basis-1/2  ">
        <div className="vector">
          <img
            className="lady-img max-w-full h-auto rounded-b-full"
            src="/resources/lady.png"
            alt="Lady with shopping bags"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
