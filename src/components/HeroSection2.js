import React from "react"

const HeroSection2 = ()=>{
    return(
        <div className="relative h-4/5 bg-gradient-to-r from-black via-black to-transparent mb-7">
            <img
                className="absolute inset-0  w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1501696461415-6bd6660c6742?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black  to-transparent opacity-60"></div>

            <div className="relative z-10 flex flex-col items-left content-center p-20 text-white md:p-8 ">
                <p className=" text-xl ">
                <span className="font-bold text-5xl mt-6 pb-4 text-[#3C9CEA]">That's a <br/> Wrap 2023</span><br/>
                The best and The best and worst of the year from TMDB.
                </p>
                <a href="/" className="w-max py-2 px-4 mt-8 border-4 border-white text-white  rounded-full mb-4 md:mb-0">check it out -</a>
                
            </div>
        </div>
    )
}

export default HeroSection2
