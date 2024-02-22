import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Trailers = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [trailers, setTrailers] = useState();
  const [group, setGroup] = useState("upcoming");
  const [selectedMovie, setSelectedMovie] = useState([]);

  // Function Which is Used to Change The Trending State (popolar/in-theaters)
  const changeOnClick = (group) => {
    setGroup(group);
  };

  const handleSelectedMovie = (data) => {
    setTimeout(() => {
      setSelectedMovie(data);
    }); // Adjust the delay time as needed
  };

  // Fetch Data For Trending Section
  const fetchData = async () => {
    try {
      const apiKey = "5d3e2b809f8db18d3c7397a5b8655ac3";
      const responce = await fetch(
        `https://api.themoviedb.org/3/movie/${group}?api_key=${apiKey}`
      );
      const parsedResponce = await responce.json();

      if (responce.status === 200) {
        setTrailers(parsedResponce.results);
        setSelectedMovie(parsedResponce?.results[0]);
        console.log("trailers", parsedResponce.results);
      } else {
        console.error(
          `Error: ${responce.status}, ${responce.data.status_message}`
        );
      }
    } catch (error) {
      console.error("error fetching data", error);
    }
  };
  // calling on load
  useEffect(() => {
    fetchData();
  }, [group]);

  return (
    <div className="relative overflow-hidden py-8 ">
      {selectedMovie && (
        <img
          className="absolute inset-0  w-full h-full object-cover object-top opacity-65 transition-background-image duration-500 ease-in-out"
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
          alt="Background"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032541] to-[#02212f] opacity-60"></div>
      <div className="relative z-10 flex flex-col sm:flex-row mx-auto w-[90%] mt-5 ">
        <h2 className="text-[#FFD633] font-bold text-3xl border-l-2 border-[#FFD633] pl-1">
          {" "}
          Latest Trailers
        </h2>
        <div className="flex border-2 border-[#73EBBD] rounded-2xl md:ml-[4vw] ml-auto">
          <button
            className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none font-medium ${
              group === "upcoming"
                ? "bg-[#73EBBD] text-[#032541] font-normal hover:text-white"
                : "bg-transparent"
            } hover:text-[#73EBBD] `}
            onClick={() => {
              changeOnClick("upcoming");
            }}
          >
            UP Coming
          </button>
          <button
            className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none font-medium ${
              group === "popular"
                ? "bg-[#73EBBD] text-[#032541] font-normal hover:text-white"
                : "bg-transparent"
            } hover:text-[#73EBBD] `}
            onClick={() => {
              changeOnClick("popular");
            }}
          >
            Popular
          </button>
          <button
            className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none font-medium ${
              group === "now_playing"
                ? "bg-[#73EBBD] text-[#032541] font-normal hover:text-white"
                : "bg-transparent"
            } hover:text-[#73EBBD] `}
            onClick={() => {
              changeOnClick("now_playing");
            }}
          >
            In Theaters
          </button>
        </div>
      </div>
      <Slider {...settings}>
        {trailers?.map((movie) => {
          return (
            <NavLink
              to={`/details/movie/${movie.id}`}
              className="flex mx-auto justify-between "
              key={movie.id}
            >
              <div
                key={movie.id}
                className="overflow-hidden mt-5 hover:scale-105 transition duration-500 ease-in-out text-center mx-5"
                onMouseEnter={() => {
                  handleSelectedMovie(movie);
                }}
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt="poster"
                    className="w-full h-32 object-cover items-center rounded-md"
                  />
                </div>
                <div>
                  <h2 className="text-white text-xl font-bold mt-2">
                    {movie.title}
                  </h2>
                </div>
              </div>
            </NavLink>
          );
        })}
      </Slider>
    </div>
  );
};

export default Trailers;
