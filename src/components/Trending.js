import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../helpers/Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";

const Trending = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 7,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [trendingMovies, setTrendingMovies] = useState();
  const [timeWindow, setTimeWindow] = useState("day");

  // Function Which is Used to Change The Trending State (day/week)
  const dayTrendChange = async () => {
    setTimeWindow("day");
    console.log("day button clicked");
  };
  const WeekTrendChange = async () => {
    setTimeWindow("week");
    console.log("week button clicked");
  };

  // Fetch Data For Trending Section
  const fetchData = async () => {
    try {
      const apiKey = "5d3e2b809f8db18d3c7397a5b8655ac3";

      const responce = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}`
      );
      const parsedResponce = await responce.json();

      if (responce.status === 200) {
        console.log("trending", parsedResponce);
        setTrendingMovies(parsedResponce.results);
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
  }, [timeWindow]);
  return (
    <div className="overflow-hidden pt-10 pb-16 bg-black">
      <div className="flex mx-auto w-[90%] mt-5">
        <h2 className="text-white font-bold text-3xl border-l-2 border-[#FFD633] pl-1">
          {" "}
          Trending
        </h2>
        <div className="flex border-2 border-[#FFD633] rounded-2xl md:ml-[4vw] ml-auto">
          <button
            className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none ${
              timeWindow === "day"
                ? "bg-[#FFD633] text-white"
                : "bg-black text-white"
            } hover:text-[#66ddef] `}
            onClick={dayTrendChange}
          >
            Toady
          </button>
          <button
            className={`text-md border-2 rounded-xl px-4 py-0 border-none outline-none ${
              timeWindow === "week"
                ? "bg-[#FFD633] text-white"
                : "bg-black text-white"
            } hover:text-[#66ddef] `}
            onClick={WeekTrendChange}
          >
            This Week
          </button>
        </div>
      </div>
      <Slider {...settings}>
        {trendingMovies?.map((movie) => {
          return (
            <NavLink
              to={`/details/${movie.media_type}/${movie.id}`}
              className="flex mx-auto"
              key={movie.id}
            >
              <Card
                key={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                color={"text-white"}
              />
            </NavLink>
          );
        })}
      </Slider>
    </div>
  );
};

export default Trending;
