import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import Card from '../../helpers/Card'
import ReactPaginate from 'react-paginate';

const Movie= ()=>  {
    const params = useParams()
    const [movies,setMovies] = useState()
    const [dropdown,setDropDown] = useState("hidden")
    const [currentPage, setCurrentPage] = useState(1);

    const toggleButton = ()=>{
        if (dropdown == "hidden") {
            setDropDown("")
        }
        else{
            setDropDown("hidden")
        }
        
    }

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };


    const getMovie = async() => {
        try {
            const apiKey = "5d3e2b809f8db18d3c7397a5b8655ac3"
            const url = (`https://api.themoviedb.org/3/movie/${params.type}?api_key=${apiKey}&page=${currentPage}`)
            const movieData = await fetch(url)
            const fetchedData = await movieData.json()

            if (fetchedData) {
                setMovies(fetchedData.results)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMovie()
    },[params,currentPage])

  return (
    <>
        <div className='w-[80%] mx-auto flex justify-between mt-7'>
            <Link to="/" className='px-4 py-2 bg-sky-600 text-white rounded-md'>&larr; Back</Link>
            <div class="relative inline-block text-left">
                <div>
                    <button type="button" onClick={toggleButton} class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Sort by- {(params.type).toUpperCase()}
                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>
                <div class={`${dropdown} absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1`}>
                    <div class="py-1" role="none">
                        <Link to="/movie/popular" class="text-gray-700 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Popular</Link>
                        <Link to="/movie/now_playing" class="text-gray-700 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Now Playing</Link>
                        <Link to="/movie/upcoming" class="text-gray-700 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Top Rated</Link>
                        <Link to="/movie/top_rated" class="text-gray-700 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Up Coming</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* main code movie data */}
        <div className='w-[80%] mx-auto my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {movies?.map((movie)=>{
            return  <NavLink to={`/details/movie/${movie.id}`} className="flex mx-auto justify-between " key={movie.id}>
                        <Card key={movie.id} title={movie.title} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    </NavLink>
            })}
        </div>

        <ReactPaginate
        previousClassName={'bg-sky-600 p-2 rounded-md'}
        previousLabel="&larr; Previous"
        nextLabel="Next &rarr;"
        nextClassName='bg-sky-600 p-2 rounded-md hover:bg-sky-300'
        pageCount={190} // TMDb API currently supports up to 500 pages
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageClassName='p-2'
        onPageChange={handlePageChange}
        containerClassName={'flex w-[80%] mx-auto justify-between mb-10'}
        activeClassName={'border-b-2 border-rose-500 p-2'}
        />
    </>
  )
}

export default Movie