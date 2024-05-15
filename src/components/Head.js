import React, { useEffect, useState } from "react";
import hamburger from "../icons/hamburger.png";
import youtubelogo from "../icons/youtubeicon.jpg";
import search from "../icons/search.png";
import usericon from "../icons/usericon.png";
import bellicon from "../icons/alert.png";
import videoicon from "../icons/create.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const cache = useSelector((store) => store.search);

  const [searchQuery, setsearchQuery] = useState();
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);

  /*

cache = {
  "iphone":["iphone11","iphone12"]
}
searchQuery = iphone

hence cache[searchQuery]
hence we setsuggestions to this ["iphone11","iphone12"]


*/
  useEffect(() => {
    // make API CALL AFTER EVERY KEYPRESS
    // IF DIFF BETWEEN 2 API CALLS IS < 200ms then DECLINE API CALL

    // make this api call after 200ms using settimeout
    const timer = setTimeout(() => {
      // if check in cache,  if searchQuery is present in cache dont make api call directly set suggestions to data from cachei.e cache[searchQuery] from store otherwise only make api call when you make api call also update in cache

      if (cache[searchQuery]) {
        setsuggestions(cache[searchQuery]);
      } else {
        getsearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();
  const getsearchSuggestion = async () => {
    // console.log("API CALL -", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setsuggestions(json[1]);

    // update in cache with key as searchQuery and value as json[1]
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    // console.log(json[1]);
  };

  const onclickhamburger = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          src={hamburger}
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={() => onclickhamburger()}
        />

        <img src={youtubelogo} alt="youtube-logo" className="h-20 -mt-6" />
      </div>

      <div className=" col-span-10 ">
        <div className="flex flex-col">
          <div className="flex">
            <input
              type="text"
              className="h-10 px-5  w-2/3 border-gray-400 border rounded-s-full outline-none"
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
              onFocus={() => setshowsuggestions(true)}
              onBlur={() => setshowsuggestions(false)}
            />

            <img
              src={search}
              alt="search"
              className="h-10 border border-gray-200 px-4 py-1 rounded-e-full cursor-pointer bg-gray-100"
            />
          </div>

          {showsuggestions && suggestions.length > 0 && (
            <div className="absolute mt-10 bg-white py-2 px-2 w-[43rem] rounded-lg border border-gray-100 z-[9999]">
              {suggestions &&
                suggestions.map((ele) => (
                  <div className="flex gap-3 text-lg py-1 px-3">
                    {" "}
                    <img src={search} alt="search" className="h-4 my-2" />
                    {ele}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-2 col-span-1">
        <img src={bellicon} alt="bell-icon" className="h-8" />
        <img src={videoicon} alt="video-icon" className="h-8" />
        <img src={usericon} alt="user-icon" className="h-8" />
      </div>
    </div>
  );
};

export default Head;
