import './Landing.css'

const Landing = () => {
    return (
        <div className='flex flex-row mt-4'>
            <div className='basis-1/3 flex flex-col justify-center ml-6'><span className='landing-font md:text-5xl'>Best place to buy, <div className='text-[#3C9379]'>Everything!</div></span></div>
            <div className='container mx-auto basis-1/2  '><div className='vector'><img className="lady-img max-w-full h-auto rounded-b-full" src={require("./images/lady.png")} alt="Lady with shopping bags" /></div></div>
        </div>
    )
}

export default Landing