import React, { useEffect, useState } from "react"

const Video = ({movieId}) =>{
    const [latestTrailers,setLatestTrailers] = useState()

    const fetchVideo = async () => {
            const apiKey = '5d3e2b809f8db18d3c7397a5b8655ac3';
            const trailersResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&append_to_response=videos`);
            const trailersData = await trailersResponse.json();
            setLatestTrailers(trailersData.results)
            console.log(latestTrailers)
          
    }
     useEffect(()=>{
        fetchVideo()
     },[])
    return(
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Latest Trailers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestTrailers.map((trailer) => (
            <div key={trailer.key} className="mb-4">
              <iframe
                title={trailer.name}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allowFullScreen
                className="rounded-md shadow-md"
              ></iframe>
              <p className="mt-2 text-lg font-semibold">{trailer.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Video