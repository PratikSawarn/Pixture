import React,{useEffect,useState} from "react"
import Slider from "react-slick";
import Card from "../helpers/Card"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Trailers = ()=>{
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }
    

    const [trailers,setTrailers] = useState()
    const [group,setGroup] = useState("upcoming")
    const [selectedMovie,setSelectedMovie] = useState([])
    
    // Function Which is Used to Change The Trending State (popolar/in-theaters)
    const changeOnClick = (group)=>{
      setGroup(group)
    }

    const handleSelectedMovie = (movie) =>{
      setTimeout(() => {
        setSelectedMovie(movie);
    }, 200); // Adjust the delay time as needed
    }
    
    // Fetch Data For Trending Section
    const fetchData = async ()=>{
        try {
            const apiKey = "5d3e2b809f8db18d3c7397a5b8655ac3";
            const responce = await fetch(`https://api.themoviedb.org/3/movie/${group}?api_key=${apiKey}`)
            const parsedResponce = await responce.json()

            if(responce.ok){
                setTrailers(parsedResponce.results)
                setSelectedMovie(parsedResponce.results[0])
            }
            else{
                console.error(`Error: ${responce.status}, ${responce.data.status_message}`);
            }
        } catch (error) {
            console.error("error fetching data",error)
        }
    }
    // calling on load
    useEffect(()=>{
        fetchData()
    },[group])

    return(

        <div className="relative overflow-hidden mb-10">
            {selectedMovie && (
              <img
                className="absolute inset-0  w-full h-full object-cover object-top opacity-65 transition-background-image duration-500 ease-in-out"
                src={`https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces${selectedMovie.backdrop_path}`}
                alt="Background"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[#032541] to-[#02212f] opacity-60"></div>
            <div className="relative z-10 flex mx-auto w-[90%] mt-5 ">
                <h2 className="text-white font-bold text-3xl"> Latest Trailers</h2>
                <div className="flex border-2 border-[#73EBBD] rounded-2xl md:ml-[4vw] ml-auto">
                    <button className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none font-medium ${group === 'upcoming' ? 'bg-[#73EBBD] text-[#032541] font-normal hover:text-white' : 'bg-transparent'} hover:text-[#73EBBD] `} onClick={()=>{changeOnClick("upcoming")}}>UP Coming</button>
                    <button className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none font-medium ${group === 'popular' ? 'bg-[#73EBBD] text-[#032541] font-normal hover:text-white' : 'bg-transparent'} hover:text-[#73EBBD] `} onClick={()=>{changeOnClick("popular")}}>Popular</button>
                    {/* <button className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none ${group === 'on-tv' ? 'bg-[#73EBBD] text-transaprent' : 'bg-transparent'} hover:text-[#73EBBD] `} onClick={()=>{changeOnClick("on-tv")}}>On TV</button>
                    <button className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none ${group === 'for-rent' ? 'bg-[#73EBBD] text-transparent' : 'bg-transparent'} hover:text-[#73EBBD] `} onClick={()=>{changeOnClick("for-rent")}}>For Rent</button> */}
                    <button className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none font-medium ${group === 'now_playing' ? 'bg-[#73EBBD] text-[#032541] font-normal hover:text-white'  : 'bg-transparent'} hover:text-[#73EBBD] `} onClick={()=>{changeOnClick("now_playing")}}>In Theaters</button>
                </div>
            </div>
            <Slider {...settings}>
                    {trailers?.map((movie)=>{
                        return <NavLink to={`/details/${movie.media_type}/${movie.id}`} className="flex mx-auto justify-between " key={movie.id} onMouseEnter={()=>{handleSelectedMovie(movie)}}>
                            <Card key={movie.id} title={movie.title} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} color={"text-white"}/>
                        </NavLink>
                    })}
                
            </Slider>
      </div>
    )
}

export default Trailers