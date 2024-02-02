import React, { useEffect, useState } from "react"

const HeroSection = () =>{

    const [latestMov,setLatestMov] = useState()
    const [activeId, setActiveId] = useState(0);

    const fetchData = async ()=>{
        try {
            const apiKey = "5d3e2b809f8db18d3c7397a5b8655ac3";
            const responce = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
            const parsedResponce = await responce.json()

            if(parsedResponce){
                setLatestMov(parsedResponce.results)
                console.log(parsedResponce)
            }
            else{
                console.error(`Error: ${responce.status}, ${responce.data.status_message}`);
            }
        } catch (error) {
            console.error("error fetching data",error)
        }
    }

    const refreshBackdrop = ()=>{
        setActiveId(prevId => (prevId + 1 === 20 ? 0 : prevId + 1));
    }

    useEffect(()=>{
        fetchData();

        setTimeout(() => {
            refreshBackdrop()
        }, 4000);
        
    },[activeId])

    
return(

        <div className="relative w-full screen bg-gradient-to-r from-[#026A96] to-[#032541]">
            {latestMov?(
                <img
                className="absolute inset-0  w-full h-full object-cover object-ceter blur-[2px]"
                src={latestMov ?(`https://media.themoviedb.org/t/p/w500${latestMov[activeId].backdrop_path}`):"https://images.unsplash.com/photo-1675379067633-6b5d367e9e48?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Background"
            />
            ):null}
            

            <div className="absolute inset-0 bg-gradient-to-r from-[#032541b5] to-[#026A96] opacity-60"></div>

            <div className=" relative z-10 flex flex-col items-left pt-[60px]  p-20 text-white  md:p-8 ">
                <p className=" text-3xl ">
                <span className="font-bold text-4xl">Welcome.</span><br/>
                Millions of movies, TV shows and people to discover. Explore now.
                </p>
                <div class="flex rounded-md overflow-hidden w-full my-5 ">
                    <input type="text" placeholder="Search for a movie, tv shows, person" class="w-full rounded-xl rounded-r-none pl-6" />
                    <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md">Go</button>
                </div>
            </div>
        </div>
    
)
}

export default HeroSection