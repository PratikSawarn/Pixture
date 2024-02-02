import React from 'react'

const Videocard = (props)=> {
    const imageUrl = props.image;
    const movieTitle = props.title;
    const textColor = props.color || "text-black"
    return(
        <div className={`flex flex-col w-[9rem] h-[18rem] overflow-hidden rounded-md hover:scale-105`} >
            <div className=" relative py-10 w-full h-[80%]">
                <img className="absolute inset-0  w-full h-full object-cover object-ceter rounded-md" src={imageUrl} alt="movieImg"/>
            </div>
            <div className="relative p-4 flex flex-col text-center">
                <h2 className={`${textColor} font-bold `}>{movieTitle}</h2>
            </div>
            
        </div>
    )
}

export default Videocard