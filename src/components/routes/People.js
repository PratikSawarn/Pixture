import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../helpers/Card'
import ReactPaginate from 'react-paginate';

const People= ()=>  {
    const [people,setPeople] = useState()
    const [currentPage, setCurrentPage] = useState(1);


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };


    const getMovie = async() => {
        try {
            const apiKey = "5d3e2b809f8db18d3c7397a5b8655ac3"
            const url = (`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${currentPage}`)
            const peopleData = await fetch(url)
            const fetchedData = await peopleData.json()
            console.log(fetchedData)

            if (fetchedData) {
                setPeople(fetchedData.results)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMovie()
    },[currentPage])

  return (
    <>
        <div className='w-[80%] mx-auto flex justify-between mt-7'>
            <Link to="/" className='px-4 py-2 bg-sky-600 hover:bg-sky-300 text-white rounded-md'>&larr; Back</Link>
            <div class="relative inline-block text-left">
                <div>
                    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Sort by-
                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* main code movie data */}
        <div className='w-[80%] mx-auto my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {people?.map((people)=>{
            return  <div className="flex mx-auto justify-between " key={people.id}>
                        <Card key={people.id} title={people.name} image={`https://image.tmdb.org/t/p/w500${people.profile_path}`} />
                    </div>
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

export default People