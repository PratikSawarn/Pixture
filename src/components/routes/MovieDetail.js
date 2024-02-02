import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import Card from '../../helpers/Card'
import Slider from 'react-slick'

const MovieDetail =()=> {
    const params = useParams()



    const [FetchedDetails,setFetchedDetails] = useState()
    const [FetchedCredits,setFetchedCredit] = useState()
    const [FetchedRecomendation,setFetchedRecomendation] = useState()

    const getDetails = async()=>{
        try {
            const API_KEY = "5d3e2b809f8db18d3c7397a5b8655ac3"
            const url = (`https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=${API_KEY}`)
            const movieData = await fetch(url)
            const fetchedData = await movieData.json()
            
            if (fetchedData) {
                setFetchedDetails(fetchedData)
                console.log("Movie Detais:",fetchedData)
            }
        } catch (error) {
            console.log("error requesting to this endpoint",error)
        }
    }

    const getCredits = async()=>{
        try {
            const API_KEY = "5d3e2b809f8db18d3c7397a5b8655ac3"
            const url = (`https://api.themoviedb.org/3/${params.media_type}/${params.id}/credits?api_key=${API_KEY}`)
            const movieCredit = await fetch(url)
            const fetchedCred = await movieCredit.json()
            
            if (fetchedCred) {
                setFetchedCredit(fetchedCred)
                console.log(fetchedCred)
            }
        } catch (error) {
            console.log("error requesting to this endpoint",error)
        }
    }

    const getRecomended = async()=>{
        try {
            const API_KEY = "5d3e2b809f8db18d3c7397a5b8655ac3"
            const url = (`https://api.themoviedb.org/3/${params.media_type}/${params.id}/similar?api_key=${API_KEY}`)
            const recomendation = await fetch(url)
            const fetchedRecomened = await recomendation.json()
            
            if (fetchedRecomened) {
                setFetchedRecomendation(fetchedRecomened)
                console.log(fetchedRecomened)
            }
        } catch (error) {
            console.log("error requesting to this endpoint",error)
        }
    }

    useEffect(() => {
        getDetails();
        getCredits();
        getRecomended();
    }, [params]);

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 7,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    }

  return (
    <>
    <div>
        { FetchedDetails ?
        (
        <div className='relative'>
            {FetchedDetails.backdrop_path ? 
                <img 
                className='absolute inset-0  w-full h-full object-cover object-top opacity-65 blur-sm'
                src={`https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces${FetchedDetails.backdrop_path}`}
                alt='backdrop'
                />:null
            }
            
            <div className='relative z-10 sm:flex flex-nowrap p-10 overflow-hidden'>
                <div className='w-max '>
                    {FetchedDetails.poster_path ?<img className='w-[80%]  sm:min-w-[300px] sm:h-[450px] rounded-md' src={`https://image.tmdb.org/t/p/w300${FetchedDetails.poster_path}`} alt='poster'/>:null}
                </div>
                <div className='flex flex-col md:my-auto items-start justify-center sm:pl-[40px]'>
                    <div className='w-full flex flex-col mb-5'>
                        {FetchedDetails.title || FetchedDetails.name ?<h1 className='text-4xl font-bold antialiased'>{FetchedDetails.title ? FetchedDetails.title : FetchedDetails.name} (2024)</h1>:null}
                        {FetchedDetails.genres && FetchedDetails.genres.length > 0 ? 
                        (<p className='text-lg text-black font-medium'>
                            Genres: {FetchedDetails.genres.map(genre => genre.name).join(', ')}
                        </p>) : null}
                        
                    </div>
                    <div className='flex flex-row w-full mb-4'>
                        {FetchedDetails.vote_average ?
                        <div className='flex flex-row text-lg mr-6 justify-center bg-black py-1 px-3 text-white rounded-md'>
                            <svg class="w-4 h-4 text-yellow-300 me-1 m-auto font-bold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <Link>{(FetchedDetails.vote_average).toFixed(1)}</Link>
                        </div>:null}
                        <div><Link className='border-bottom'>Play trailer</Link></div>
                    </div>
                    <div className='w-full mb-4'>
                        <h3 className='mb-4 font-semibold'>Overview:</h3>
                        {FetchedDetails.overview ?<p className=' text-wrap text-black font-serif antialiased'>{FetchedDetails.overview}</p>:null}
                        <div className='mt-5'>
                        {FetchedDetails.created_by ?
                            (<><h3 className='mb-4 font-semibold'>Creator</h3>
                            <p className='text-md font-medium'>
                                {FetchedDetails.created_by.map(created_by=>created_by.name).join(', ')}
                            </p></>):null}

                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between'>
                            <ul className='mb-4 flex flex-row sm:flex-col justify-between'>
                                <h3 className='text-md font-semibold'>Status</h3>
                                <p>{FetchedDetails.status}</p>
                            </ul>
                            <ul className='mb-4 flex flex-row sm:flex-col justify-between'>
                                <h3 className='text-md font-semibold'>Language</h3>
                                <p>{FetchedDetails.spoken_languages.map(languages=>languages.name).join(', ')}</p>
                            </ul>
                            <ul className='mb-4 flex flex-row sm:flex-col justify-between'>
                                <h3 className='text-md font-semibold'>Budget</h3>
                                <p>${FetchedDetails.budget}</p>
                            </ul>
                            <ul className='mb-4 flex flex-row sm:flex-col justify-between'>
                                <h3 className='text-md font-semibold'>Revenue</h3>
                                <p>${FetchedDetails.revenue}</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ):<p className='text-center text-2xl p-20'>Loading</p>
        }
    </div>
    {/* top billed cast */}
    <section>
        {FetchedCredits?
        (<div className="w-[90%] mx-auto my-7">
                <div className="flex mx-auto w-[90%] mt-5">
                    <h2 className="text-black font-bold text-3xl">Top Billed Cast</h2>
                    
                </div>
                <div className='w-full flex flex-row overflow-x-auto overflow-y-hidden'>
                        {FetchedCredits.cast?.map((credit)=>{
                            return <NavLink className="flex mx-5" key={credit.id}>
                                <Card key={credit.id} title={credit.name} releaseDate={credit.character} image={credit.profile_path ?(`https://image.tmdb.org/t/p/w500${credit.profile_path}`):"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"}/>
                            </NavLink>
                        })}
                </div>   
                
        </div>
        ):<p className='text-center text-2xl p-20'>Loading</p>
        }
    </section>

{/* display Recommendations for a movie */}
    <section>
        {FetchedRecomendation?(
            <div className="overflow-hidden mb-7">
                <div className="flex mx-auto w-[90%] mt-5">
                    <h2 className="text-black font-bold text-3xl"> Recommendations</h2>
                </div>
                <Slider {...settings}>
                        {FetchedRecomendation.results?.map((movie)=>{
                            return <NavLink className="flex mx-auto" key={movie.id}>
                                <Card key={movie.id} title={movie.title} releaseDate={movie.release_date} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            </NavLink>
                        })}
                    
                </Slider>
            </div>
        ):<p className='text-center text-2xl p-20'>Loading</p>}
        
    </section>
    </>
  )
}

export default MovieDetail


// for background image

// https://media.themoviedb.org/t/p/w300_and_h450_multi_faces_filter(blur)/rSAmgcoA74371rplbqM27yVsd3y.jpg