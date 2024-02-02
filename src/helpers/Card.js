import React from "react"
// {progressPercentage,imageUrl,movieTitle,date}
const Card = (props)=>{
    const imageUrl = props.image;
    const movieTitle = props.title;
    const date = props.releaseDate
    const textColor = props.color || "text-black"
    const width = props.width || "9rem"
    const height = props.height || "18rem"
    // animate-pulse   have to work on 

    return(
        <div className={` flex flex-col w-[9rem] h-[18rem] overflow-hidden rounded-md mx-auto mt-5 hover:scale-105 transition duration-500 ease-in-out`} >
            <div className=" relative py-10 w-full h-[75%]">
                <img className="absolute inset-0  w-full h-full object-cover object-ceter rounded-md" src={imageUrl} alt="movieImg"/>
                
            </div>
            <div className=" relative p-4 flex flex-col text-center">
                <h2 className={`${textColor} font-bold `}>{movieTitle}</h2>
                {date ?<p className="text-gray-500">{date}</p>:null}
            </div>
            
        </div>
    )
}

export default Card