import React, { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../utils/constants/urls";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/store/searchSlice";

const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const handleSearchQuery = (e) => setSearchQuery(e.target.value);

  useEffect(() => {
    // api call here
    const getSearchSuggestions = async () => {
      const data = await fetch(`${SEARCH_SUGGESTION_API}${searchQuery}`);
      const jsonData = await data.json();
      // console.log(jsonData[1]);
      dispatch(cacheResults({ [searchQuery]: jsonData[1] }));
      setSearchSuggestions(jsonData[1]);
    };

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="col-span-10 px-10">
      <input
        className="w-1/2 p-2 border border-gray-200 rounded-l-full"
        type="text"
        value={searchQuery}
        onChange={handleSearchQuery}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => {
          setTimeout(() => {
            setShowSuggestions(false);
          }, 50);
        }}
      />
      <button className="px-4 py-2  border border-gray-200 bg-gray-200 rounded-r-full">
        Search
      </button>

      {showSuggestions && (
        <div className="absolute bg-white py-2 px-5 mt-2 w-1/3 shadow-lg rounded-lg">
          <ul>
            {searchSuggestions.map((suggestion) => {
              return (
                <li
                  key={suggestion}
                  className="px-5 py-2 m-1 shadow-sm rounded-lg hover:bg-gray-100"
                  onClick={() => setSearchQuery(suggestion)}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
