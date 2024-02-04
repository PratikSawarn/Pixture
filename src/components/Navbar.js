import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  const [showMenu,setShowMenu] = useState("hidden")

  const ToggleMenu = ()=>{
    if (showMenu === "") {
      setShowMenu("hidden")
    }
    else{
      setShowMenu("")
    }
    
    
  }

  return (
    <nav className="bg-black sticky top-0 z-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button onClick={ToggleMenu} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
             
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> 
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1 href="/" className=" text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD633] to-[#FFD633] cursor-pointer">PIXTURE</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                
                <div className="relative inline-block text-left group">
                    <button className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white text-white focus:outline-none">
                    Movies
                    </button>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:z-50 origin-top-left absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300">
                        <Link to="/movie/popular" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-0">Popular</Link>
                        <Link to="/movie/now_playing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-1">Now Playing</Link>
                        <Link to="/movie/upcoming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-2">Upcoming</Link>
                        <Link to="/movie/top_rated" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-2">Top Rated</Link>
                    </div>
                </div>
                <div className="relative inline-block text-left group">
                    <button className="inline-flex justify-center items-center hover:bg-gray-700 hover:text-white px-4 py-2 text-sm font-medium text-white focus:outline-none">
                    TV Shows
                    </button>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:z-50 origin-top-left absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300">
                        <Link to="/tv/airing_today" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-0">Popular</Link>
                        <Link to="/tv/on_the_air" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-1">Airing Today</Link>
                        <Link to="/tv/popular" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-2">On TV</Link>
                        <Link to="/tv/top_rated" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-2">Top Rated</Link>
                    </div>
                </div>
                <div className="relative inline-block text-left group">
                    <button className="inline-flex justify-center items-center px-4 py-2 hover:bg-gray-700 hover:text-white text-sm font-medium text-white focus:outline-none">
                    People
                    </button>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:z-50 origin-top-left absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300">
                        <Link to="/people/popular" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-0">Popular People</Link>
                    </div>
                </div>
                
                <div className="relative inline-block text-left group">
                    <button className="inline-flex justify-center items-center hover:bg-gray-700 hover:text-white px-4 py-2 text-sm font-medium text-white focus:outline-none">
                    More
                    </button>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:z-50 origin-top-left absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300">
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-0">Discussion</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-1">Leardboard</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-2">Support</a>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="text-white text-right absolute right-4">
              <Link className="bg-[#FFD633] py-1 px-3 rounded-sm font-semibold">Login</Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${showMenu}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="/movie/popular"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Movies
          </a>
          <a
            href="/tv/popular"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            TV Shows
          </a>
          <a
            href="/people/popular"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            People
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
